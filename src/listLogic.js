import pubSub from './pubSub.js';

class Project {
    constructor(name) {
        this.name = name;
        this.taskList = [];
    }
    addTask(task) {
        this.taskList.push(task);
    }
}

class Task {
    constructor(title, description, dueDate, priority, completed) {
        this.title = title;
        this.description = description
        this.dueDate = dueDate;
        this.priority = priority;
        this.completed = completed;
    }
    toggleCompletedStatus() {
        if(this.completed === true) this.completed = false;
        else this.completed = true;
    }
}

const listLogic = (function () {
    const projects = [];
    pubSub.subscribe('projectAdded', (name) => {
        let newProject = new Project(name);
        projects.push(newProject);
    });
})();

export default listLogic;