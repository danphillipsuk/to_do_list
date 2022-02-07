// This module creates tabs/buttons for each catagory of tasks and allocates a dataset.name to allow taskList array filtering
import config from './config.js';
import todaysEvents from './todaysEvents.js';

const projectOverview = () => {
  
    // get global variabels from config.js
    let taskList= config.taskList();
    const mainContent = config.mainContent();

    const projectMenu = document.createElement('div');
    projectMenu.id = "projectMenu";
    mainContent.prepend(projectMenu);

    // create new array of catagory names
    const projects = taskList.map(project => project.Catagory);

    // count ocurrances of each catagory name 
    const countProjects = projects.reduce((acc, value) => {
      return { 
        ...acc, [value]:(acc[value] || 0) + 1};
      }, {});

    // create array of unique catagory names
    const uniqueProjects = projects.filter((i, index) => projects.indexOf(i) === index);

    // loop through array and create tab for each category with number of projects stored under each catagory
    uniqueProjects.forEach(project => {
      const num = countProjects[project];
      const projectTab = document.createElement('div');
      projectTab.classList.add('projectTitle');
      projectTab.dataset.name = project;
      projectTab.innerText = `${project} ${num}`;
      projectMenu.appendChild(projectTab);
    })

    // add event listener to pass dataset name to display array and refresh dom element
    document.querySelectorAll(".projectTitle").forEach(function(item) {
      item.addEventListener("click", () => {
        mainContent.removeChild(mainContent.childNodes[3]);
        todaysEvents(item.dataset.name);
      });
    });
  
  
};

export { projectOverview };