import addDays from 'date-fns/addDays';
import { taskList } from "./defineTasklist.js";

// Get array for todays date
const arrayLists = (() => {

  // Get array for todays date
  const today = taskList.filter(task => task.DateDue === new Date().toISOString().slice(0,10));
  const todayCompleted = today.filter(task => task.complete === false);
  const todaysNum = todayCompleted.length;
  const todayHeadline = 'Today';

  // Get array for tomorrows date
  let todaysDate = addDays(new Date(), 1);
  let tomorrowsDate = todaysDate.toISOString().slice(0,10);
  const tomorrow = taskList.filter(task => task.DateDue === tomorrowsDate);
  const tomorrowCompleted = tomorrow.filter(task => task.complete === false);
  const tomorrowsNum = tomorrowCompleted.length;
  const tomorrowsHeadline = 'Tomorrow';

  // Get array of tasks with high priority
  const highPriorityHeadline = 'High Priority';
  const highPriority = taskList.filter(task => task.Priority === 'high');
  const priorityCompleted = highPriority.filter(task => task.complete === false);
  const priorityNum = priorityCompleted.length;

  // Get array for individual projects
  // create new array of catagory names
  const projects = taskList.map(project => project.Catagory);
  // count ocurrances of each catagory name 
  const countProjects = projects.reduce((acc, value) => {
  return { 
    ...acc, [value]:(acc[value] || 0) + 1};
  }, {});
  
  // create array of unique catagory names
  const uniqueProjects = projects.filter((i, index) => projects.indexOf(i) === index);

  return { 
    today, todaysNum, todayHeadline,
    tomorrowsNum, tomorrowsHeadline,
    highPriorityHeadline, priorityNum, priorityCompleted,
    uniqueProjects, countProjects
  };

})();



export {  arrayLists }