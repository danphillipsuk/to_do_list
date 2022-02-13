import { taskList } from "./defineTasklist.js";
import { arrayLists, createTask, markComplete, undoComplete, deleteTask } from "./updateDelete.js";
import { tasklistDisplay } from './domCreate.js';


const createTaskEvent = () => {

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // Event listeners for create task form
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  showForm.addEventListener("click", () => {

    const taskForm = document.querySelector('.taskForm');
    taskForm.classList.add('open');
  });

  document.querySelector('[data-name="cancel"]').addEventListener("click", () => {
    const taskForm = document.querySelector('.taskForm');
    taskForm.classList.remove('open');
  });

  document.querySelector('[data-name="submit"]').addEventListener("click", () => {
    const task = document.querySelector("input[name='createTaskTitle']").value;
    const catagory = document.querySelector("input[name='taskCatagory']").value;
    const subcatagory = document.querySelector("input[name='subCatagory']").value;
    const priority = document.querySelector("select[name='priority']").value;
    const dueDate = document.querySelector("input[name='dueDate']").value;
    const time = document.querySelector("input[name='time']").value;
    createTask(task, catagory, subcatagory, priority, dueDate, time);
  });

}

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // Event listeners for tabs in side
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  const sideMenuEvent = () => {
  const todayTab = document.querySelector('.todayMenu');
  todayTab.addEventListener("click", () => {
    tasklistDisplay(arrayLists.today, 'Today');
  });

  const tomorrowTab = document.querySelector('.tomorrowMenu');
  tomorrowTab.addEventListener("click", () => {
    tasklistDisplay(arrayLists.tomorrowCompleted, 'Tomorrow');
  });

  const urgentTab = document.querySelector('.urgentMenu');
  urgentTab.addEventListener("click", () => {
    tasklistDisplay(arrayLists.priorityCompleted, 'High Priority');
  });

  document.querySelectorAll(".projectTitle").forEach(function(item) {
    item.addEventListener("click", () => {
      const project = taskList.filter(task => task.project === item.dataset.name);
      tasklistDisplay(project, item.dataset.name);
    });
  });

  }

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // Event listeners for individual task actions 
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //Delete task from taskList array
  const singleTaskEvent = () => {
    document.querySelectorAll(".deleteTask").forEach(function(item) {
      item.addEventListener("click", () => {
        deleteTask(item.value);
      });
    });
  
    // Modify task from taskList array
    document.querySelectorAll(".modifyTask").forEach(function(item) {
      item.addEventListener("click", () => {
        editTask(item.value, displayArray);
      });
    });
  
    // View project from taskList array
    document.querySelectorAll(".viewProject").forEach(function(item) {
      item.addEventListener("click", () => {
        // viewProject(item.value);
        console.log('view project')
      });
    });
  
      // Mark task complete
    document.querySelectorAll(".markComplete").forEach(function(item) {
      item.addEventListener("click", () => {
        markComplete(item.value);
      });
    });

    // Remove complete status from task
    document.querySelectorAll('[data-name="undo"]').forEach(function(item) {
      item.addEventListener("click", () => {
        undoComplete(item.value);
      });
    });

  }

export { createTaskEvent, sideMenuEvent, singleTaskEvent }