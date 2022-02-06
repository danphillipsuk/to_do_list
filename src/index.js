import _ from 'lodash';
import './style.css';


import header from './header.js';
import tabs from './tabMenu.js';
import todaysEvents from './todaysEvents';
import createTask from './createTask.js';

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
    refresh.removeChild(refresh.childNodes[2]);
    todaysEvents('today')
});


document.querySelector('.sevenDayTab').addEventListener('click', function() {
    const refresh = document.getElementById("mainContent");
    refresh.removeChild(refresh.childNodes[2]);
    todaysEvents('seven')
});

