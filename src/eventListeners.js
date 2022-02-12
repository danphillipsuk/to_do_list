import { taskList } from "./defineTasklist.js";
import { arrayLists } from "./updateDelete.js";
import { tasklistDisplay } from './domCreate.js';


const eventSelect = () => {

  // Event Listeners to show and hide create task form
  showForm.addEventListener("click", () => {
    const taskForm = document.querySelector('.taskForm');
    taskForm.classList.add('open');
  });

  document.querySelector('[data-name="hiddenCancel"]').addEventListener("click", () => {
    const taskForm = document.querySelector('.taskForm');
    taskForm.classList.remove('open');
  });

  // Delete task from taskList array
  document.querySelectorAll(".deleteTask").forEach(function(item) {
    item.addEventListener("click", () => {
      // deleteTask(item.value);
      console.log("delete")
    });
  });

  // Modify task from taskList array
  document.querySelectorAll(".modifyTask").forEach(function(item) {
    item.addEventListener("click", () => {
      // editTask(item.value, displayArray);
      console.log('modify')
    });
  });

  // Modify task from taskList array
  document.querySelectorAll(".viewProject").forEach(function(item) {
    item.addEventListener("click", () => {
      // viewProject(item.value);
      console.log('view project')
    });
  });

    // Modify task from taskList array
  document.querySelectorAll(".markComplete").forEach(function(item) {
    item.addEventListener("click", () => {
      // markComplete(item.value);
      console.log('complete')
    });
  });
  
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // Event listeners for tabs in side menu////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  const todayTab = document.querySelector('.todayMenu');
  todayTab.addEventListener("click", () => {
    tasklistDisplay(arrayLists.today, 'Today');
  });

  const tomorrowTab = document.querySelector('.tomorrowMenu');
  tomorrowTab.addEventListener("click", () => {
    tasklistDisplay(arrayLists.tomorrow, 'Tomorrow');
  });

  const urgentTab = document.querySelector('.urgentMenu');
  urgentTab.addEventListener("click", () => {
    tasklistDisplay(arrayLists.priorityCompleted, 'High Priority');
  });

  document.querySelectorAll(".projectTitle").forEach(function(item) {
    item.addEventListener("click", () => {
      const project = taskList.filter(task => task.Catagory === item.dataset.name);
      tasklistDisplay(project, item.dataset.name);
    });
  });


}

export { eventSelect }