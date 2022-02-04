import _ from 'lodash';
import './style.css';

import header from './header.js';
import sidebar from './sidebar.js';
import todaysEvents from './todaysEvents';
import nextSevenDays from './nextSevenDays.js';
import createTask from './createTask.js';


// Get taskList from localStorage or create it if not found (first time visitor)
let taskList= JSON.parse(localStorage.getItem('taskList'));
if (taskList === null) {
    const taskListcreate = [{Title: "Test Task", Catagory: "Home", DateDue: "2023-01-01"}];
    localStorage.setItem("taskList", JSON.stringify(taskListcreate));
    let taskList = JSON.parse(localStorage.getItem('taskList'));
};

console.log(taskList)


// Create div for main content
const test = document.createElement('div');
test.id = "mainContent";
document.getElementById("content").appendChild(test);

createTask(); // Calls module to create task form and push new task to localStorage

todaysEvents();

nextSevenDays();
