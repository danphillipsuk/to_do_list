import { taskList } from "./defineTasklist.js";
import format from 'date-fns/format';
import { arrayLists } from "./updateDelete.js";

export default (function domCreate () {

  // get main content container from DOM
  const content = document.getElementById('content');

  (function createHeader () {

    const header = document.createElement('header');
    header.classList.add('header');
    document.body.prepend(header);

    const headerContainer = document.createElement('div');
    headerContainer.classList.add('headerContainer');


    const siteTitleContainer = document.createElement('div');
    const siteTitle = document.createElement('h1');
    siteTitle.classList.add('siteTitle');
    siteTitle.innerText ="whatKnot"
    siteTitleContainer.appendChild(siteTitle);

    let today = new Date();
    const changeDateFormat = format(today, 'EEEE do LLLL yyyy');
    const todaysDate = document.createElement('p');
    todaysDate.innerHTML = changeDateFormat;

    const showForm = document.createElement('div');
    showForm.id = 'showForm';
    showForm.innerText = "Create +";

    headerContainer.append(siteTitleContainer, todaysDate, showForm);
    header.append(headerContainer);
    
  })();

  // taskCreate form
  const formWrapper = document.getElementById("createForm");
  const taskForm = document.createElement('section');
  taskForm.classList.add('taskForm');
  taskForm.innerHTML = 
  '<h2>Create a new task</h2>\
  <div>\
    <label for="taskTitle">Task</label><input name ="taskTitle" type="text">\
  </div>\
  <div class="formElement">\
    <label for="taskCatagory">Project Title</label><input name="taskCatagory" type="text">\
  </div>\
  <div class="formElement">\
    <label for="subCatagory">Sub Catagory</label><input name="subCatagory" type="text">\
  </div>\
  <div class="formElement">\
    <label for="priority">Priority</label><select name ="priority">\
      <option value="high">High</option>\
      <option value="medium">Medium</option>\
      <option value="low" selected>Low</option>\
      </select>\
  </div>\
  <div class="formElement">\
    <label for="dueDate">Due Date</label><input type="date" name="dueDate">\
  </div>\
  <div class="formElement">\
    <label for="taskTime">Time</label><input type="time" name="time"></div>\
  <div class="formElement">\
  <button id="submit">Create Task</button>\
  <button id="cancel" class="hiddenCancel" data-name="hiddenCancel">Cancel</button>\
  </div>';

  document.getElementById("createForm").appendChild(taskForm);

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // Side Menu / Tab Menu 
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  (function createSideMenu () {
  
    const projectMenu = document.createElement('div');
    projectMenu.id = "projectMenu";
    const todayTab = document.createElement('p');
    todayTab.classList.add('todayMenu');
    todayTab.innerHTML= `TODAY <span> ${arrayLists.todaysNum}</span>`;

    const tomorrowTab = document.createElement('p');
    tomorrowTab.classList.add('tomorrowMenu');
    tomorrowTab.innerHTML= `TOMORROW <span> ${arrayLists.tomorrowsNum}</span>`;

    const urgentTab = document.createElement('p');
    urgentTab.classList.add('urgentMenu');
    urgentTab.innerHTML= `HIGH PRIORITY <span>${arrayLists.priorityNum}</span>`;

    const projectTabContainer = document.createElement('div');
    projectTabContainer.id = 'projectTabContainer';
    projectTabContainer.innerHTML = '<h4>PROJECTS</h4>';

    // Loop through array of project titles and create tab for each project
    arrayLists.uniqueProjects.forEach(project => {
      const num = arrayLists.countProjects[project];
      const projectTab = document.createElement('p');
      projectTab.classList.add('projectTitle');
      projectTab.dataset.name = project;
      projectTab.innerHTML = `${project} <span>${num}</span>`;
      projectTabContainer.appendChild(projectTab);
    })

    projectMenu.append(todayTab, tomorrowTab, urgentTab, projectTabContainer);
    content.prepend(projectMenu);

  })();

})()

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Main Tasklist Window / List
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const tasklistDisplay = (list, headline) => {
  
  const content = document.getElementById('content');


  const headLine = document.createElement('h2');
  if (!headline) {
    headline = 'Today';
  }
  headLine.innerText = `${headline}`;

  const headers = document.createElement('ul');
  headers.innerHTML = 
    '<ul id="columnHeaders">\
      <li>Priority</li>\
      <li>Task</li>\
      <li>Project</li>\
      <li>Deadline</li>\
    </ul>';
  

  const tasklistPane = document.createElement('section');
  tasklistPane.id = "tasklistPane";


  content.appendChild(tasklistPane);
  tasklistPane.prepend(headers);
  content.removeChild(content.childNodes[1]);

  let displayArray;

  if (!list) {
    displayArray = arrayLists.today;
  } else {
    displayArray = list;
  }

  displayArray.forEach((item, index) => {
    
    // get todays date, task date, format and compare for display
    let today = new Date();
    let date = new Date(item.DateDue);
    const todaysDate = format(today, 'EEEE do LLLL yyyy');
    const taskDate = format(date, 'EEEE do LLLL yyyy');

    let thisYear = today.getFullYear();
    let taskYear = date.getFullYear();

    let itemDate; 
    if (todaysDate === taskDate) { 
      itemDate = 'Due Today';
    } else if (thisYear === taskYear) {
      itemDate = format(date, 'EEEE do LLLL');
    } else {
      itemDate = format(date, 'EEEE do LLLL yyyy');
    }


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

    const taskTitle = document.createElement('li');
    taskTitle.classList.add('taskTitle');
    taskTitle.innerText = `${item.Title}`;

    const taskCatagory = document.createElement('li');
    taskCatagory.classList.add('taskCatagory');
    taskCatagory.innerText = `${item.Catagory}`;
    if (item.subCatagory !== '') { 
      const catagorySpan = document.createElement('span');
      catagorySpan.innerText = `${item.subCatagory}`;
      taskCatagory.appendChild(catagorySpan);
    }

    const deadline = document.createElement('li');
    deadline.classList.add('deadline');
    deadline.innerText = `${itemDate}`;
    if (item.Time !== '') { 
      const timeSpan = document.createElement('span');
      timeSpan.innerText = `${item.Time}`;
      deadline.appendChild(timeSpan);
    }

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
    viewProject.value = `${item['Catagory']}`;
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
      taskTitle,
      taskCatagory,
      deadline,
      buttonWrapper
    );

  })
tasklistPane.prepend(headers);
tasklistPane.prepend(headLine);
};

export { tasklistDisplay }