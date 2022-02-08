// This module creates tabs/buttons for each catagory of tasks and allocates a dataset.name to allow taskList array filtering
import config from './config.js';
import todaysEvents from './todaysEvents.js';
import addDays from 'date-fns/addDays'

const projectOverview = () => {
  
  // get global variabels from config.js
  let taskList= config.taskList();
  const content = config.content();

  const projectMenu = document.createElement('div');
  projectMenu.id = "projectMenu";
  content.prepend(projectMenu);

  (function () {
    const today = taskList.filter(task => task.DateDue === new Date().toISOString().slice(0,10));
    const num = today.length;
    const projectTab = document.createElement('p');
    projectTab.classList.add('todayMenu');
    projectTab.innerHTML= `TODAY <span> ${num}</span>`;
    projectMenu.appendChild(projectTab);
    projectTab.addEventListener("click", () => {
      content.removeChild(content.childNodes[3]);
      todaysEvents('today');
    });
})();

(function () {
    const today = taskList.filter(task => task.DateDue === new Date().toISOString().slice(0,10));

    
    let todaysDate = addDays(new Date(), 1);
    let tomorrowsDate = todaysDate.toISOString().slice(0,10);
    console.log(tomorrowsDate);
    const tomorrow = taskList.filter(task => task.DateDue === tomorrowsDate);

    const num = tomorrow.length;
    const projectTab = document.createElement('p');
    projectTab.classList.add('tomorrowMenu');
    projectTab.innerHTML= `TOMORROW <span> ${num}</span>`;
    projectMenu.appendChild(projectTab);
    projectTab.addEventListener("click", () => {
      content.removeChild(content.childNodes[3]);
      todaysEvents('tomorrow', tomorrowsDate);
    });
})();

(function () {
    const today = taskList.filter(task => task.DateDue === new Date().toISOString().slice(0,10));
    const num = today.length;
    const projectTab = document.createElement('p');
    projectTab.classList.add('sevenDayMenu');
    projectTab.innerHTML= `NEXT 7 DAYS <span> ${num}</span>`;
    projectMenu.appendChild(projectTab);
    projectTab.addEventListener("click", () => {
      content.removeChild(content.childNodes[3]);
      todaysEvents('today');
    });
})();

(function () {
  const today = taskList.filter(task => task.DateDue === new Date().toISOString().slice(0,10));
  const num = today.length;
  const projectTab = document.createElement('p');
  projectTab.classList.add('urgentMenu');
  projectTab.innerHTML= `URGENT <span> ${num}</span>`;
  projectMenu.appendChild(projectTab);
  projectTab.addEventListener("click", () => {
    content.removeChild(content.childNodes[3]);
    todaysEvents('today');
  });
})();




  // create new array of catagory names
  const projects = taskList.map(project => project.Catagory);

  // count ocurrances of each catagory name 
  const countProjects = projects.reduce((acc, value) => {
    return { 
      ...acc, [value]:(acc[value] || 0) + 1};
    }, {});

  // create array of unique catagory names
  const uniqueProjects = projects.filter((i, index) => projects.indexOf(i) === index);

  const projectTabContainer = document.createElement('div');
  projectTabContainer.id = 'projectTabContainer';
  projectTabContainer.innerHTML = '<h4>PROJECTS</h4>';
  projectMenu.append(projectTabContainer);

  // loop through array and create tab for each category with number of projects stored under each catagory
  uniqueProjects.forEach(project => {
    const num = countProjects[project];
    const projectTab = document.createElement('p');
    projectTab.classList.add('projectTitle');
    projectTab.dataset.name = project;
    projectTab.innerHTML = `${project} <span>${num}</span>`;
    projectTabContainer.appendChild(projectTab);
  })

  // add event listener to pass dataset name to display array and refresh dom element
  document.querySelectorAll(".projectTitle").forEach(function(item) {
    item.addEventListener("click", () => {
      content.removeChild(content.childNodes[3]);
      todaysEvents(item.dataset.name);
    });
  });
  
  
};

export { projectOverview };
