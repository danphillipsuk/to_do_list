import addDays from 'date-fns/addDays'

// Get master task array
let taskList= JSON.parse(localStorage.getItem('taskList'));

// Get array for todays date
const today = taskList.filter(task => task.DateDue === new Date().toISOString().slice(0,10));
const todaysNum = today.length;

// Get array for tomorrows date
let todaysDate = addDays(new Date(), 1);
let tomorrowsDate = todaysDate.toISOString().slice(0,10);
const tomorrow = taskList.filter(task => task.DateDue === tomorrowsDate);
const tomorrowsNum = tomorrow.length;

// Get arrays for individual projects
// create new array of catagory names
const projects = taskList.map(project => project.Catagory);

// count ocurrances of each catagory name 
const countProjects = projects.reduce((acc, value) => {
  return { 
    ...acc, [value]:(acc[value] || 0) + 1};
  }, {});

// create array of unique catagory names
const uniqueProjects = projects.filter((i, index) => projects.indexOf(i) === index);


export {  today, todaysNum, 
          tomorrow, tomorrowsNum,
          countProjects, uniqueProjects,
          taskList }