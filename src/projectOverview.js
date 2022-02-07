import config from './config.js';
export default (function projectOverview() {

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
      projectTab.innerText = `${project} ${num}`;
      projectMenu.appendChild(projectTab);
    })


    document.querySelectorAll(".projectTitle").forEach(function(item) {
      item.addEventListener("click", () => {
        console.log(item.innerText);
      });
    });
  


})();