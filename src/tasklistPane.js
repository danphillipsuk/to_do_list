import { today } from './projectArrays.js';
import { deleteTask, editTask } from './modifyTasklist.js';

const tasklistPane = (list) => {

  const headers = document.createElement('ul');
  headers.innerHTML = 
    '<ul id="columnHeaders">\
      <li>Priority</li>\
      <li>Time</li>\
      <li>Task</li>\
      <li>Catagory</li>\
    </ul>';
    
  
  const tasklistPane = document.createElement('section');
  tasklistPane.id = "tasklistPane";


  const content = document.getElementById('content');
  content.appendChild(tasklistPane);
  tasklistPane.prepend(headers);
  content.removeChild(content.childNodes[1]);


  

  let displayArray;

  if (!list) {
    displayArray = today;
  } else {
    displayArray = list;
  }

  displayArray.forEach((item, index) => {

    const taskItem = document.createElement('ul');
    taskItem.classList.add('taskItem');
    document.getElementById('tasklistPane').prepend(taskItem);

    const taskPriority = document.createElement('li');
    taskPriority.classList.add('taskPriority');
    switch(item.Priority) {
      case 'low':
        taskPriority.classList.add('low');
        break;
      case 'medium':
        taskPriority.classList.add('medium');
        break;
      case 'high':
        taskPriority.classList.add('high');
        break;
      default:
        break;
    }

    const taskTime = document.createElement('li');
    taskTime.classList.add('taskTime');
    taskTime.innerText = `${item.Time}`;

    const taskTitle = document.createElement('li');
    taskTitle.classList.add('taskTitle');
    taskTitle.innerText = `${item.Title}`;

    const taskCatagory = document.createElement('li');
    taskCatagory.classList.add('taskCatagory');
    taskCatagory.innerText = `${item.Catagory}`;

    // create modify task button for each task
    const modifyTask = document.createElement('button');
    modifyTask.value = `${item['id']}`;
    modifyTask.classList.add('modifyTask');
    modifyTask.innerText = "Modify Task";
  
    
    // create delete button for each task
    const deleteTask = document.createElement('button');
    deleteTask.value = `${item['id']}`;
    deleteTask.classList.add('deleteTask');
    deleteTask.innerText = "Delete";
  
    document.querySelector('.taskItem').append(
      taskPriority,
      taskTime, 
      taskTitle,
      taskCatagory,
      modifyTask,
      deleteTask
      );

  })
  tasklistPane.prepend(headers);
  
  // Delete task from taskList array
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
    
    
}

export { tasklistPane }