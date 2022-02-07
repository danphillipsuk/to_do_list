import _ from 'lodash';
import './style.css';
// import projectOverview from './projectOverview.js';

import header from './header.js';

import todaysEvents from './todaysEvents';
import createTask from './createTask.js';

import { tabMenu } from './tabMenu.js';
import { projectOverview } from './projectOverview.js';

projectOverview();
tabMenu();

// Get taskList from localStorage or create it if not found (first time visitor)
let taskList= JSON.parse(localStorage.getItem('taskList'));


if (taskList === null) {
    const taskListcreate = [{Title: "Test Task", Catagory: "Home", DateDue: "2023-01-01"}];
    localStorage.setItem("taskList", JSON.stringify(taskListcreate));
    let taskList = JSON.parse(localStorage.getItem('taskList'));
};

createTask(); // Calls module to create task form and push new task to localStorage

todaysEvents('today');


document.querySelector('.todayTab').addEventListener('click', function() {
    const refresh = document.getElementById("mainContent");
    refresh.removeChild(refresh.childNodes[3]);
    todaysEvents('today')
});


document.querySelector('.sevenDayTab').addEventListener('click', function() {
    const refresh = document.getElementById("mainContent");
    refresh.removeChild(refresh.childNodes[3]);
    todaysEvents('seven')
});



