import pubSub from './pubSub.js';

const page = (function() {
    const header = (function() {
        const header = document.createElement('header');
    
        const h1 = document.createElement('h1');
        h1.textContent = 'To do List';
    
        header.append(h1);
    
        return header;
    })();
    
    const content = (function() {
        const main = document.createElement('main');
        const content = document.createElement('div');
        content.classList.add('content');
        main.append(content);
        const ul = document.createElement('ul');
        ul.classList.add('projects');

        // New Project Button
        const newProjectButtonContainer = document.createElement('div');
        newProjectButtonContainer.classList.add('button-container');
        const newProjectButton = document.createElement('button');
        newProjectButton.setAttribute('type', 'button');
        newProjectButton.classList.add('new-project-button');
        newProjectButton.setAttribute('data-active', '1');
        newProjectButton.textContent = 'New Project';
        newProjectButtonContainer.append(newProjectButton);
    
        content.append(ul, newProjectButtonContainer);
        return {main, newProjectButton};
    })();
    document.body.append(header, content.main);
    return {newProjectButton: content.newProjectButton};
})();

const domStuff = (function() {
    const projectsDiv = document.querySelector('.projects');
    const projects = [];
    const newProjectButton = document.querySelector('.new-project-button');
    function toggleNewProjectButton() {
        if(newProjectButton.getAttribute('data-active') === '1') {
            newProjectButton.removeEventListener('click', addBlankProject);
            newProjectButton.setAttribute('data-active', '0');
        }
        else {
            newProjectButton.addEventListener('click', addBlankProject);
            newProjectButton.setAttribute('data-active', '1');
        }
    }
    function addBlankProject() {
        toggleNewProjectButton();
        (function newBlankProject() {
            let project = document.createElement('li');
            project.classList.add('project');
            const header = document.createElement('div');
            header.classList.add('header');
            const title = document.createElement('input');
            title.setAttribute('type', 'text');
            title.setAttribute('placeholder', 'New project');
            const buttons = document.createElement('div');
            buttons.classList.add('buttons');
            const confirm = document.createElement('button');
            confirm.textContent = 'Confirm';
            confirm.setAttribute('type', 'button');
            const cancel = document.createElement('button');
            cancel.textContent = 'Cancel';
            cancel.setAttribute('type', 'button');
            buttons.append(confirm, cancel);
            header.append(title, buttons);
            project.append(header);
            projectsDiv.append(project);
            confirm.addEventListener('click', () => {
                project.remove();
                toggleNewProjectButton();
                if(!title.value) return;
                pubSub.publish('projectAdded', title.value);
            });
            cancel.addEventListener('click', () => {
                project.remove();
                toggleNewProjectButton();
            });
        })();
    }
    function newTaskForm(projectName, projectIndex) {
        const fillerDiv = document.createElement('div');
        fillerDiv.classList.add('filler');
        const containerDiv = document.createElement('div');
        containerDiv.classList.add('new-task-container');
        const h5 = document.createElement('h5');
        h5.textContent = `Add new task to "${projectName}"`;

        // Name
        const name = document.createElement('p');
        name.id = 'name-field';
        const nameLabel = document.createElement('label');
        nameLabel.setAttribute('for', 'name-input');
        nameLabel.textContent = 'Task name';
        const nameInput = document.createElement('input');
        nameInput.setAttribute('type', 'text');
        nameInput.id = 'name-input';
        name.append(nameLabel,nameInput);

        // Priority
        const priority = document.createElement('p');
        const priorityLabel = document.createElement('label');
        priorityLabel.setAttribute('for', 'priority-input');
        priorityLabel.textContent = 'Priority';
        const priorityInput = document.createElement('select');
        priorityInput.id = 'priority-input';
        const highPriority = document.createElement('option');
        highPriority.textContent = 'High';
        highPriority.setAttribute('value', 'High');
        const mediumPriority = document.createElement('option');
        mediumPriority.textContent = 'Medium';
        mediumPriority.setAttribute('value', 'Medium');
        const lowPriority = document.createElement('option');
        lowPriority.textContent = 'Low';
        lowPriority.setAttribute('value', 'Low');
        priorityInput.append(highPriority, mediumPriority, lowPriority);
        priority.append(priorityLabel, priorityInput);

        // Due date
        const date = document.createElement('p');
        const dateLabel = document.createElement('label');
        dateLabel.setAttribute('for', 'date-input');
        dateLabel.textContent = 'Due date';
        const dateInput = document.createElement('input');
        dateInput.setAttribute('type', 'date');
        dateInput.id = 'date-input';
        date.append(dateLabel, dateInput);

        // Description
        const description = document.createElement('p');
        description.id = 'description-field';
        const descriptionLabel = document.createElement('label');
        descriptionLabel.setAttribute('for', 'description-input');
        descriptionLabel.textContent = 'Description';
        const descriptionInput = document.createElement('textarea');
        descriptionInput.id = 'description-input';
        description.append(descriptionLabel, descriptionInput);

        // Buttons
        const buttonsDiv = document.createElement('div');
        const cancelButton = document.createElement('button');
        cancelButton.setAttribute('type', 'button');
        cancelButton.textContent = 'Cancel';
        const confirmButton = document.createElement('button');
        confirmButton.setAttribute('type', 'button');
        confirmButton.textContent = 'Confirm';
        buttonsDiv.append(cancelButton, confirmButton);

        containerDiv.append(h5, name, priority, date, description, buttonsDiv);
        fillerDiv.append(containerDiv);

        cancelButton.addEventListener('click', () => {
            fillerDiv.remove();
        });
        confirmButton.addEventListener('click', () => {
            const task = {
                projectIndex: projectIndex,
                name: nameInput.value,
                priority: priorityInput.value,
                date: dateInput.value,
                description: descriptionInput.value
            };
            pubSub.publish('taskAdded', task);
            fillerDiv.remove();
        });
        return fillerDiv;
    }
    function newTask(taskInfo) {
        const task = document.createElement('li');
        task.classList.add('task');
        const title = document.createElement('h3');
        title.textContent = taskInfo.name;
    
        const priority = document.createElement('p');
        priority.textContent = taskInfo.priority;
        const completed = document.createElement('p');
        completed.textContent = 'N';
        const due = document.createElement('p');
        due.textContent = taskInfo.date;

        task.append(title, priority, completed, due);
        return task;
    }
    function deleteProjectConfirmation(projectName, projectIndex) {
        const fillerDiv = document.createElement('div');
        fillerDiv.classList.add('filler');
        const confirmationDiv = document.createElement('div');
        confirmationDiv.classList.add('confirmation');
        const confirmationMsg = document.createElement('p');
        confirmationMsg.textContent = `Are you sure you want to delete "${projectName}"?`;
        const buttonsDiv = document.createElement('div');
        const confirmButton = document.createElement('button');
        confirmButton.setAttribute('type', 'button');
        confirmButton.textContent = 'Delete';
        const cancelButton = document.createElement('button');
        cancelButton.textContent = 'Cancel';
        buttonsDiv.append(cancelButton, confirmButton);
        confirmationDiv.append(confirmationMsg, buttonsDiv);
        fillerDiv.append(confirmationDiv);
        cancelButton.addEventListener('click', () => {
            fillerDiv.remove();
        });
        confirmButton.addEventListener('click', () => {
            pubSub.publish('projectRemoved', projectIndex);
            fillerDiv.remove();
        })
        return fillerDiv;
    }
    function addProject(name) {
        const project = document.createElement('li');
        project.setAttribute('data-hidden', '0');
        projects.push(project);
        project.classList.add('project');
        const header = document.createElement('div');
        header.classList.add('header');
        const title = document.createElement('h2');
        title.textContent = name;
        const buttons = document.createElement('div');
        buttons.classList.add('buttons');
        const newTask = document.createElement('button');
        newTask.textContent = 'New Task';
        newTask.setAttribute('type', 'button');
        const del = document.createElement('button');
        del.textContent = 'Delete';
        del.setAttribute('type', 'button');
        buttons.append(newTask, del);
        header.append(title, buttons);
        
        // Task List
        const taskList = document.createElement('ul');
        taskList.classList.add('task-list');

        // Legend
        const legend = document.createElement('li');
        legend.classList.add('legend');
        const legendName = document.createElement('h4');
        legendName.textContent = 'Task name';
        const legendPriority = document.createElement('h4');
        legendPriority.textContent = 'Priority';
        const legendCompleted = document.createElement('h4');
        legendCompleted.textContent = 'Completed';
        const legendDueDate = document.createElement('h4');
        legendDueDate.textContent = 'Due date';
        legend.append(legendName, legendPriority, legendCompleted, legendDueDate);
        taskList.append(legend);

        header.addEventListener('click', () => {
            if(project.getAttribute('data-hidden') == '1') {
                project.append(taskList);
                project.setAttribute('data-hidden', '0');
            }
            else {
                project.removeChild(taskList);
                project.setAttribute('data-hidden', '1');
            }
        });
        newTask.addEventListener('click', (e) => {
            e.stopPropagation();
            document.body.append(newTaskForm(title.textContent, projects.indexOf(project)));
        });
        del.addEventListener('click', (e) => {
            e.stopPropagation();
            document.body.append(deleteProjectConfirmation(title.textContent, projects.indexOf(project)));
        });
        project.append(header, taskList);
        projectsDiv.append(project);
    }

    pubSub.subscribe('projectAdded', (name) => addProject(name));
    pubSub.subscribe('projectRemoved', (index) => {
        projects[index].remove();
        projects.splice(index, 1);
    });
    pubSub.subscribe('taskAdded', (taskInfo) => {
        const taskList = projects[taskInfo.projectIndex].querySelector('.task-list');
        taskList.append(newTask(taskInfo));
    });
    newProjectButton.addEventListener('click', addBlankProject);
})();

export default domStuff;