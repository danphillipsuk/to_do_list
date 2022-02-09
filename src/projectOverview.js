// This module creates tabs/buttons for each catagory of tasks and allocates a dataset.name to allow taskList array filtering
import config from './config.js';
import {  today, todaysNum, todayHeadline,  
          tomorrow, tomorrowsNum, tomorrowsHeadline, 
          highPriority, priorityNum, highPriorityHeadline,
          countProjects,uniqueProjects, taskList } from './projectArrays.js';
import { tasklistPane } from './tasklistPane.js';

const projectOverview = () => {
  

  // get global variabels from config.js

  const content = config.content();

  const projectMenu = document.createElement('div');
  projectMenu.id = "projectMenu";
  content.prepend(projectMenu);

  (function () {

    const projectTab = document.createElement('p');
    projectTab.classList.add('todayMenu');
    projectTab.innerHTML= `TODAY <span> ${todaysNum}</span>`;
    projectMenu.appendChild(projectTab);
    projectTab.addEventListener("click", () => {
      tasklistPane(today, todayHeadline);
    });
  })();

  (function () {

      const projectTab = document.createElement('p');
      projectTab.classList.add('tomorrowMenu');
      projectTab.innerHTML= `TOMORROW <span> ${tomorrowsNum}</span>`;
      projectMenu.appendChild(projectTab);
      projectTab.addEventListener("click", () => {
        tasklistPane(tomorrow, tomorrowsHeadline);
      });
    })();

  (function () {
      const projectTab = document.createElement('p');
      projectTab.classList.add('sevenDayMenu');
      projectTab.innerHTML= `NEXT 7 DAYS <span>3</span>`;
      projectMenu.appendChild(projectTab);
      projectTab.addEventListener("click", () => {
        tasklistPane("hell0 from next seven days");
      });
  })();

  (function () {
    const projectTab = document.createElement('p');
    projectTab.classList.add('urgentMenu');
    projectTab.innerHTML= `HIGH PRIORITY <span>${priorityNum}</span>`;
    projectMenu.appendChild(projectTab);
    projectTab.addEventListener("click", () => {
      tasklistPane(highPriority, highPriorityHeadline);
    });
  })();

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
      const project = taskList.filter(task => task.Catagory === item.dataset.name);
      tasklistPane(project, item.dataset.name);
    });
  });
  
  
};

export { projectOverview };
