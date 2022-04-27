class Project {
    constructor(name) {
        this.name = name;
        this.taskList = [];
    }
    get name() {
        return this.name;
    }
    get taskList() {
        return this.taskList;
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