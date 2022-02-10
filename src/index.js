import _ from 'lodash';
import './style.css';
import header from './header.js';
import { projectOverview } from './projectOverview.js';
import { tasklistPane } from './tasklistPane.js';
import createTask from './createTask.js';

let taskList= JSON.parse(localStorage.getItem('taskList'));


if (taskList === null) {
    const taskListcreate = [{Title: "Test Task", Catagory: "Home", DateDue: "2023-01-01"}];
    localStorage.setItem("taskList", JSON.stringify(taskListcreate));
    let taskList = JSON.parse(localStorage.getItem('taskList'));
};


projectOverview();
tasklistPane()
createTask();

// let taskList = [];
// localStorage.setItem("taskList", JSON.stringify(taskList));

// Get taskList from localStorage or create it if not found (first time visitor)

const showForm = document.createElement('div');
showForm.id = 'showForm';
showForm.innerText = "Create +";
document.querySelector(".headerContainer").appendChild(showForm);

showForm.addEventListener("click", () => {
  const taskForm = document.querySelector('.taskForm');
  taskForm.classList.add('open');
});

const pcancel = document.querySelector('.hiddenCancel');
    pcancel.addEventListener("click", () => {
      const taskForm = document.querySelector('.taskForm');
      taskForm.classList.remove('open');
    });




