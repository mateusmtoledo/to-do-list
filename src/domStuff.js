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
    
        // Example project
        const project0 = document.createElement('li');
        project0.classList.add('project');
        const p0header = document.createElement('div');
        p0header.classList.add('header');
        const p0title = document.createElement('h2');
        p0title.textContent = 'Project 0';
        const p0buttons = document.createElement('div');
        p0buttons.classList.add('buttons');
        const p0add = document.createElement('button');
        p0add.textContent = 'New task';
        p0add.setAttribute('type', 'button');
        const p0del = document.createElement('button');
        p0del.textContent = 'Delete';
        p0del.setAttribute('type', 'button');
        p0buttons.append(p0add, p0del);
        p0header.append(p0title, p0buttons);
        project0.append(p0header);
        ul.append(project0);
    
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
    
        // Task 0
        const task0 = document.createElement('li');
        task0.classList.add('task');
        const task0title = document.createElement('h3');
        task0title.textContent = 'Task 0';
    
        const task0priority = document.createElement('p');
        task0priority.textContent = 'High';
        const task0completed = document.createElement('p');
        task0completed.textContent = 'Y';
        const task0due = document.createElement('p');
        task0due.textContent = 'dd/mm/yy';
    
        task0.append(task0title, task0priority, task0completed, task0due);
    
        // Task 1
        const task1 = document.createElement('li');
        task1.classList.add('task');
        const task1title = document.createElement('h3');
        task1title.textContent = 'Task 1';
    
        const task1priority = document.createElement('p');
        task1priority.textContent = 'Low';
        const task1completed = document.createElement('p');
        task1completed.textContent = 'N';
        const task1due = document.createElement('p');
        task1due.textContent = 'dd/mm/yy';
    
        task1.append(task1title, task1priority, task1completed, task1due);
    
        taskList.append(legend, task0, task1);
        project0.append(taskList);
    
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
    function newTaskForm(projectName) {
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
        return fillerDiv;
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

        newTask.addEventListener('click', () => {
            document.body.append(newTaskForm(title.textContent));
        })
        del.addEventListener('click', () => {
            document.body.append(deleteProjectConfirmation(title.textContent, projects.indexOf(project)));
        })

        project.append(header, taskList);
        projectsDiv.append(project);
    }
    pubSub.subscribe('projectAdded', (name) => addProject(name));
    pubSub.subscribe('projectRemoved', (index) => {
        projects[index].remove();
        projects.splice(index, 1);
    });
    newProjectButton.addEventListener('click', addBlankProject);
})();

export default domStuff;