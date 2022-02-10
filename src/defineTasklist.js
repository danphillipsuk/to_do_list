let taskList;

taskList = JSON.parse(localStorage.getItem('taskList'));


if (taskList === null) {
    const taskListcreate = [{Title: "Test Task", Catagory: "Home", DateDue: "2023-01-01"}];
    localStorage.setItem("taskList", JSON.stringify(taskListcreate));
    taskList = JSON.parse(localStorage.getItem('taskList'));
};

export { taskList }

// import { taskList } from "./defineTasklist.js";