import { today } from './projectArrays.js';
import { deleteTask, editTask, viewProject, markComplete } from './modifyTasklist.js';

const tasklistPane = (list, headline) => {

  const headLine = document.createElement('h2');
  if (!headline) {
    headline = 'Today';
  }
  headLine.innerText = `${headline}`;
  const headers = document.createElement('ul');
  headers.innerHTML = 
    '<ul id="columnHeaders">\
      <li>Priority</li>\
      <li>Time</li>\
      <li>Task</li>\
      <li>Project</li>\
      <li>Day Due</li>\
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
    if (item.complete === true) {
      taskItem.classList.add('completed');
    }
    document.getElementById('tasklistPane').prepend(taskItem);

    const taskPriority = document.createElement('li');
    const taskPriorityInner = document.createElement('span');
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
    taskPriority.append(taskPriorityInner);

    const taskTime = document.createElement('li');
    taskTime.classList.add('taskTime');
    taskTime.innerText = `${item.Time}`;

    const taskTitle = document.createElement('li');
    taskTitle.classList.add('taskTitle');
    taskTitle.innerText = `${item.Title}`;

    const taskCatagory = document.createElement('li');
    taskCatagory.classList.add('taskCatagory');
    taskCatagory.innerText = `${item.Catagory}`;

    const taskDateDue = document.createElement('li');
    taskDateDue.classList.add('taskDateDue');
    taskDateDue.innerText = `${item.DateDue}`;

    // create container for buttons
    const buttonWrapper = document.createElement('div');
    buttonWrapper.classList.add('buttonWrapper');

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

    // create view project button for each task
    const viewProject = document.createElement('button');
    viewProject.value = `${item['id']}`;
    viewProject.classList.add('viewProject');
    viewProject.innerText = "View Project";

    if (item.complete === true) {
      const completed = document.createElement('button');
      completed.classList.add('completedButton');
      completed.innerText = "Completed";
      buttonWrapper.append(modifyTask, deleteTask, viewProject, completed);
    } else {
      // create view project button for each task
      const markComplete = document.createElement('button');
      markComplete.value = `${item['id']}`;
      markComplete.classList.add('markComplete');
      markComplete.innerText = "Mark Complete?";
      buttonWrapper.append(modifyTask, deleteTask, viewProject, markComplete);
    }
    
    document.querySelector('.taskItem').append(
      taskPriority,
      taskTime, 
      taskTitle,
      taskCatagory,
      taskDateDue,
      buttonWrapper
      );

  })
  tasklistPane.prepend(headers);
  tasklistPane.prepend(headLine);

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

    // Modify task from taskList array
    document.querySelectorAll(".viewProject").forEach(function(item) {
      item.addEventListener("click", () => {
        viewProject(item.value);
      });
    });

      // Modify task from taskList array
      document.querySelectorAll(".markComplete").forEach(function(item) {
        item.addEventListener("click", () => {
          markComplete(item.value);
        });
      });
    
    
}

export { tasklistPane }