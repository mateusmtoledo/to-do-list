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
    project0.classList.add('project-0');
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
    newProjectButton.textContent = 'New Project';
    newProjectButtonContainer.append(newProjectButton);

    content.append(ul, newProjectButtonContainer);
    return main;
})();

const pageLoad = function() {
    document.body.append(header, content);
}

export default pageLoad;