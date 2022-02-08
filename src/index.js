import _ from 'lodash';
import './style.css';
import header from './header.js';
import { projectOverview } from './projectOverview.js';
import { tasklistPane } from './tasklistPane.js';
import createTask from './createTask.js';


projectOverview();
tasklistPane()
createTask();

// Get taskList from localStorage or create it if not found (first time visitor)
let taskList= JSON.parse(localStorage.getItem('taskList'));


if (taskList === null) {
    const taskListcreate = [{Title: "Test Task", Catagory: "Home", DateDue: "2023-01-01"}];
    localStorage.setItem("taskList", JSON.stringify(taskListcreate));
    let taskList = JSON.parse(localStorage.getItem('taskList'));
};

  // Delete task from taskList array
  // document.querySelectorAll(".deleteTask").forEach(function(item) {
  //   item.addEventListener("click", () => {
  //     console.log("hello")
  //     deleteTask(item.value, taskList);
  //   });
  // });

  //   // Modify task from taskList array
  //   document.querySelectorAll(".modifyTask").forEach(function(item) {
  //     item.addEventListener("click", () => {
  //       editTask(item.value, taskList);
  //     });
  //   });



