import addDays from 'date-fns/addDays';
import { taskList } from "./defineTasklist.js";
import { tasklistDisplay } from './domCreate.js';

// Get array for todays date
const arrayLists = (() => {

  // Get array for todays date
  const today = taskList.filter(task => task.date === new Date().toISOString().slice(0,10));
  const todayCompleted = today.filter(task => task.complete === false);
  const todaysNum = todayCompleted.length;
  const todayHeadline = 'Today';

  // Get array for tomorrows date
  let todaysDate = addDays(new Date(), 1);
  let tomorrowsDate = todaysDate.toISOString().slice(0,10);
  const tomorrow = taskList.filter(task => task.date === tomorrowsDate);
  const tomorrowCompleted = tomorrow.filter(task => task.complete === false);
  const tomorrowsNum = tomorrowCompleted.length;
  const tomorrowsHeadline = 'Tomorrow';

  // Get array of tasks with high priority
  const highPriorityHeadline = 'High Priority';
  const highPriority = taskList.filter(task => task.priority === 'high');
  const priorityCompleted = highPriority.filter(task => task.complete === false);
  const priorityNum = priorityCompleted.length;

  // Get array for individual projects
  // create new array of catagory names
  const projects = taskList.map(project => project.project);
  // count ocurrances of each catagory name 
  const countProjects = projects.reduce((acc, value) => {
  return { 
    ...acc, [value]:(acc[value] || 0) + 1};
  }, {});
  
  // create array of unique catagory names
  const uniqueProjects = projects.filter((i, index) => projects.indexOf(i) === index);

  return { 
    today, todaysNum, todayHeadline,
    tomorrowsNum, tomorrowsHeadline, tomorrowCompleted,
    highPriorityHeadline, priorityNum, priorityCompleted,
    uniqueProjects, countProjects
  };

})();


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Process new task submission
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const createTask = (task, project, subcatagory, priority, date, time) => {
  
  // New task object factory
  const newTaskFactory = (task, project, subcatagory, priority, date, time) => {
    const id = Math.random();
    const complete = false;
    return { id, task, project, subcatagory, priority, date, time, complete };
  }

  // Create new task object
  const newTask = newTaskFactory(task, project, subcatagory, priority, date, time);
  console.log(newTask)

  // add new task to taskList array and set in localStorage
  taskList.push(newTask);
  window.localStorage.setItem("taskList", JSON.stringify(taskList));
  const content = document.getElementById('content');
  content.removeChild(content.childNodes[1]);
  tasklistDisplay();

}

export {  arrayLists, createTask }