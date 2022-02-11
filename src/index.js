import _ from 'lodash';
import './style.css';
import { taskList } from "./defineTasklist.js";
import header from './header.js';
import { projectOverview } from './projectOverview.js';
import { tasklistPane } from './tasklistPane.js';
import createTask from './createTask.js';

projectOverview();
tasklistPane()
createTask();

const showForm = document.createElement('div');
showForm.id = 'showForm';
showForm.innerText = "Create +";
document.querySelector(".headerContainer").appendChild(showForm);

showForm.addEventListener("click", () => {
  const taskForm = document.querySelector('.taskForm');
  taskForm.classList.add('open');
});

const pcancel = document.querySelector('.hiddenCancel');
pcancel.addEventListener("click", () => {
  const taskForm = document.querySelector('.taskForm');
  taskForm.classList.remove('open');
});

const editForm = document.querySelector('[data-name="hiddenCancel"]');
editForm.addEventListener("click", () => {
  console.log("hellodan")
  // const task = document.querySelector("input[name='task']").value;
  // const projectTitle = document.querySelector("input[name='projectTitle']").value;
  // const subCatagory = document.querySelector("input[name='catagory']").value;
  // const priority = document.querySelector("select[name='priority1']").value;
  // const dueDate = document.querySelector("input[name='date']").value;
  // const time = document.querySelector("input[name='taskTime']").value;
  // modifyTask(index, task, projectTitle, subCatagory, priority, dueDate, time);
});




