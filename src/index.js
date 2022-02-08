import _ from 'lodash';
import './style.css';
import header from './header.js';

import todaysEvents from './todaysEvents';
import createTask from './createTask.js';


import { projectOverview } from './projectOverview.js';

import { createForm } from './domCreate.js';

projectOverview();


// Get taskList from localStorage or create it if not found (first time visitor)
let taskList= JSON.parse(localStorage.getItem('taskList'));


if (taskList === null) {
    const taskListcreate = [{Title: "Test Task", Catagory: "Home", DateDue: "2023-01-01"}];
    localStorage.setItem("taskList", JSON.stringify(taskListcreate));
    let taskList = JSON.parse(localStorage.getItem('taskList'));
};

todaysEvents('today');
createTask(); // Calls module to create task form and push new task to localStorage





//createForm();


