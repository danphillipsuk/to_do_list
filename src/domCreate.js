import { taskList } from "./defineTasklist.js";
import format from "date-fns/format";
import { arrayLists } from "./updateDelete.js";
import {
  createTaskEvent,
  sideMenuEvent,
  singleTaskEvent,
  updateTaskEvent,
} from "./eventListeners.js";

export default (function domCreate() {
  // get main content container from DOM
  const content = document.getElementById("content");

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // Create Header
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  (function createHeader() {
    const header = document.createElement("header");
    header.classList.add("header");
    document.body.prepend(header);

    const headerContainer = document.createElement("div");
    headerContainer.classList.add("headerContainer");

    const siteTitleContainer = document.createElement("div");
    const siteTitle = document.createElement("h1");
    siteTitle.classList.add("siteTitle");
    siteTitle.innerText = "whatKnot";
    siteTitleContainer.appendChild(siteTitle);

    let today = new Date();
    const changeDateFormat = format(today, "EEEE do LLLL yyyy");
    const todaysDate = document.createElement("p");
    todaysDate.innerHTML = changeDateFormat;

    const showForm = document.createElement("div");
    showForm.id = "showForm";
    showForm.innerText = "Create +";

    headerContainer.append(siteTitleContainer, todaysDate, showForm);
    header.append(headerContainer);
  })();

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // Create New Task Form
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  (function createNewTaskForm() {
    const taskForm = document.createElement("section");
    taskForm.classList.add("taskForm");

    const taskFormHeadline = document.createElement("h2");
    taskFormHeadline.innerText = "Create a new task";

    const taskFormElementTitle = document.createElement("div");
    taskFormElementTitle.innerHTML =
      '<label for="createTaskTitle">Task</label>';
    const taskFormTitleInput = document.createElement("input");
    taskFormTitleInput.name = "createTaskTitle";
    taskFormTitleInput.type = "text";
    taskFormElementTitle.append(taskFormTitleInput);

    const taskFormElementProject = document.createElement("div");
    taskFormElementProject.innerHTML =
      '<label for="taskCatagory">Project Title</label>';
    const taskFormProjectInput = document.createElement("input");
    taskFormProjectInput.name = "taskCatagory";
    taskFormProjectInput.type = "text";
    taskFormElementProject.append(taskFormProjectInput);

    const taskFormElementSubCat = document.createElement("div");
    taskFormElementSubCat.innerHTML =
      '<label for="subCatagory">Sub Catagory</label>';
    const taskFormSubCatInput = document.createElement("input");
    taskFormSubCatInput.name = "subCatagory";
    taskFormSubCatInput.type = "text";
    taskFormElementSubCat.append(taskFormSubCatInput);

    const taskFormElementPriority = document.createElement("div");
    taskFormElementPriority.innerHTML =
      '<label for="priority">Priority</label>';
    const taskFormPriorityInput = document.createElement("select");
    taskFormPriorityInput.name = "priority";

    const priorityOne = document.createElement("option");
    priorityOne.value = "low";
    priorityOne.text = "Low";

    const priorityTwo = document.createElement("option");
    priorityTwo.value = "medium";
    priorityTwo.text = "Medium";

    const priorityThree = document.createElement("option");
    priorityThree.value = "high";
    priorityThree.text = "High";

    taskFormPriorityInput.append(priorityOne, priorityTwo, priorityThree);
    taskFormElementPriority.append(taskFormPriorityInput);

    const taskFormElementDate = document.createElement("div");
    taskFormElementDate.innerHTML = '<label for="dueDate">Date</label>';
    const taskFormDateInput = document.createElement("input");
    taskFormDateInput.name = "dueDate";
    taskFormDateInput.type = "date";
    taskFormElementDate.append(taskFormDateInput);

    const taskFormElementTime = document.createElement("div");
    taskFormElementTime.innerHTML = '<label for="time">Time</label>';
    const taskFormTimeInput = document.createElement("input");
    taskFormTimeInput.name = "time";
    taskFormTimeInput.type = "time";
    taskFormElementTime.append(taskFormTimeInput);

    const taskFormElementSubmit = document.createElement("div");
    const taskFormElementSubmitButton = document.createElement("button");
    const taskFormElementCancelButton = document.createElement("button");

    taskFormElementSubmitButton.id = "submit";
    taskFormElementSubmitButton.innerText = "Create Task";
    taskFormElementSubmitButton.dataset.name = "submit";

    taskFormElementCancelButton.id = "cancel";
    taskFormElementCancelButton.dataset.name = "cancel";
    taskFormElementCancelButton.innerText = "Cancel";

    taskFormElementSubmit.append(
      taskFormElementSubmitButton,
      taskFormElementCancelButton
    );

    taskForm.append(
      taskFormHeadline,
      taskFormElementTitle,
      taskFormElementProject,
      taskFormElementSubCat,
      taskFormElementPriority,
      taskFormElementDate,
      taskFormElementTime,
      taskFormElementSubmit
    );

    document.getElementById("createForm").appendChild(taskForm);
  })();

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // Create Side Menu / Tab Menu
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  (function createSideMenu() {
    const projectMenu = document.createElement("div");
    projectMenu.id = "projectMenu";
    const todayTab = document.createElement("p");
    todayTab.classList.add("todayMenu");
    todayTab.innerHTML = `TODAY <span> ${arrayLists.todaysNum}</span>`;

    const tomorrowTab = document.createElement("p");
    tomorrowTab.classList.add("tomorrowMenu");
    tomorrowTab.innerHTML = `TOMORROW <span> ${arrayLists.tomorrowsNum}</span>`;

    const urgentTab = document.createElement("p");
    urgentTab.classList.add("urgentMenu");
    urgentTab.innerHTML = `HIGH PRIORITY <span>${arrayLists.priorityNum}</span>`;

    const projectTabContainer = document.createElement("div");
    projectTabContainer.id = "projectTabContainer";
    projectTabContainer.innerHTML = "<h4>PROJECTS</h4>";

    // Loop through array of project titles and create tab for each project
    arrayLists.uniqueProjects.forEach((project) => {
      const num = arrayLists.countProjects[project];
      const projectTab = document.createElement("p");
      projectTab.classList.add("projectTitle");
      projectTab.dataset.name = project;
      projectTab.innerHTML = `${project} <span>${num}</span>`;
      projectTabContainer.appendChild(projectTab);
    });

    projectMenu.append(todayTab, tomorrowTab, urgentTab, projectTabContainer);
    content.prepend(projectMenu);
  })();
})();

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Main Tasklist Window / List
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const tasklistDisplay = (list, headline) => {
  const content = document.getElementById("content");

  const headLine = document.createElement("h2");
  if (!headline) {
    headline = "Today";
  }
  headLine.innerText = `${headline}`;

  // Create headers for task pane
  const headers = document.createElement("ul");
  headers.innerHTML =
    '<ul id="columnHeaders">\
      <li>Priority</li>\
      <li>Task</li>\
      <li>Project</li>\
      <li>Deadline</li>\
    </ul>';

  const tasklistPane = document.createElement("section");
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

  displayArray.forEach((item) => {
    // Assign object values to variables
    const itemPriority = item.priority;
    const itemTask = item.task;

    // get todays date, task date, format and compare for display
    let today = new Date();
    let date = new Date(item.date);
    const todaysDate = format(today, "EEEE do LLLL yyyy");
    const taskDate = format(date, "EEEE do LLLL yyyy");

    let thisYear = today.getFullYear();
    let taskYear = date.getFullYear();

    let itemDate;
    if (todaysDate === taskDate) {
      itemDate = "Due Today";
    } else if (thisYear === taskYear) {
      itemDate = format(date, "EEEE do LLLL");
    } else {
      itemDate = format(date, "EEEE do LLLL yyyy");
    }

    // Determine if task is complete
    const taskItem = document.createElement("ul");
    taskItem.classList.add("taskItem");
    if (item.complete === true) {
      taskItem.classList.add("completed");
    }

    // Determine if task is overdue
    let isOverDue;
    if (item.complete === false && date < today) {
      taskItem.classList.add("overdue");
      isOverDue = true;
    }

    document.getElementById("tasklistPane").prepend(taskItem);

    const taskPriority = document.createElement("li");
    const taskPriorityInner = document.createElement("span");
    taskPriority.classList.add("taskPriority");
    switch (itemPriority) {
      case "low":
        taskPriority.classList.add("low");
        break;
      case "medium":
        taskPriority.classList.add("medium");
        break;
      case "high":
        taskPriority.classList.add("high");
        break;
      default:
        break;
    }
    taskPriority.append(taskPriorityInner);

    const taskTitle = document.createElement("li");
    taskTitle.classList.add("taskTitle");
    if (isOverDue) {
      taskTitle.innerText = `OVERDUE ${itemTask}`;
    } else {
      taskTitle.innerText = `${itemTask}`;
    }

    const taskCatagory = document.createElement("li");
    taskCatagory.classList.add("taskCatagory");
    taskCatagory.innerText = `${item.project}`;
    if (item.subcatagory !== "") {
      const catagorySpan = document.createElement("span");
      catagorySpan.innerText = `${item.subcatagory}`;
      taskCatagory.appendChild(catagorySpan);
    }

    const deadline = document.createElement("li");
    deadline.classList.add("deadline");
    deadline.innerText = `${itemDate}`;
    if (item.Time !== "") {
      const timeSpan = document.createElement("span");
      timeSpan.innerText = `${item.time}`;
      deadline.appendChild(timeSpan);
    }

    // create container for buttons
    const buttonWrapper = document.createElement("div");
    buttonWrapper.classList.add("buttonWrapper");

    // create modify task button for each task
    const modifyTask = document.createElement("button");
    modifyTask.value = `${item["id"]}`;
    modifyTask.classList.add("modifyTask");
    modifyTask.innerText = "Modify Task";

    // create delete button for each task
    const deleteTask = document.createElement("button");
    deleteTask.value = `${item["id"]}`;
    deleteTask.classList.add("deleteTask");
    deleteTask.innerText = "Delete";

    // create view project button for each task
    const viewProject = document.createElement("button");
    viewProject.value = `${item["project"]}`;
    viewProject.classList.add("viewProject");
    viewProject.innerText = "View Project";

    if (item.complete === true) {
      const completed = document.createElement("button");
      completed.classList.add("completedButton");
      completed.innerText = "Completed";
      const undo = document.createElement("span");
      undo.dataset.name = "undo";
      undo.value = `${item["id"]}`;
      undo.innerText = " Undo?";
      completed.append(undo);
      buttonWrapper.append(modifyTask, deleteTask, viewProject, completed);
    } else {
      // create view project button for each task
      const markComplete = document.createElement("button");
      markComplete.value = `${item["id"]}`;
      markComplete.classList.add("markComplete");
      markComplete.innerText = "Mark Complete?";
      buttonWrapper.append(modifyTask, deleteTask, viewProject, markComplete);
    }

    document
      .querySelector(".taskItem")
      .append(taskPriority, taskTitle, taskCatagory, deadline, buttonWrapper);
  });

  tasklistPane.prepend(headers);
  tasklistPane.prepend(headLine);

  // Call event listeners for the modify/delete/view/complete functions
  singleTaskEvent();
  sideMenuEvent();
  createTaskEvent();
};

const modifySingleTask = (index) => {
  const content = document.getElementById("content");
  content.removeChild(content.childNodes[1]);

  let taskFormEditTitle = document.createElement("h2");
  taskFormEditTitle.innerText = "Modify Task";

  // Create display of task being edited
  const headers = document.createElement("ul");
  headers.innerHTML =
    '<ul id="columnHeaders">\
      <li>Priority</li>\
      <li>Task</li>\
      <li>Project</li>\
      <li>Deadline</li>\
    </ul>';

  // get todays date, task date, format and compare for display
  let today = new Date();
  let date = new Date(taskList[index].date);
  const todaysDate = format(today, "EEEE do LLLL yyyy");
  const taskDate = format(date, "EEEE do LLLL yyyy");

  let thisYear = today.getFullYear();
  let taskYear = date.getFullYear();

  let itemDate;
  if (todaysDate === taskDate) {
    itemDate = "Due Today";
  } else if (thisYear === taskYear) {
    itemDate = format(date, "EEEE do LLLL");
  } else {
    itemDate = format(date, "EEEE do LLLL yyyy");
  }

  const taskItem = document.createElement("ul");
  taskItem.classList.add("taskItem");

  const taskPriority = document.createElement("li");
  const taskPriorityInner = document.createElement("span");
  taskPriority.classList.add("taskPriority");
  switch (taskList[index].priority) {
    case "low":
      taskPriority.classList.add("low");
      break;
    case "medium":
      taskPriority.classList.add("medium");
      break;
    case "high":
      taskPriority.classList.add("high");
      break;
    default:
      break;
  }
  taskPriority.append(taskPriorityInner);

  const taskTitle = document.createElement("li");
  taskTitle.classList.add("taskTitle");
  taskTitle.innerText = `${taskList[index].task}`;

  const taskCatagory = document.createElement("li");
  taskCatagory.classList.add("taskCatagory");
  taskCatagory.innerText = `${taskList[index].project}`;
  if (taskList[index].subcatagory !== "") {
    const catagorySpan = document.createElement("span");
    catagorySpan.innerText = `${taskList[index].subcatagory}`;
    taskCatagory.appendChild(catagorySpan);
  }

  const deadline = document.createElement("li");
  deadline.classList.add("deadline");
  deadline.innerText = `${itemDate}`;
  if (taskList[index].time !== "") {
    const timeSpan = document.createElement("span");
    timeSpan.innerText = `${taskList[index].time}`;
    deadline.appendChild(timeSpan);
  }

  const tasklistPane = document.createElement("section");
  tasklistPane.id = "tasklistPane";

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // Create form to update task
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  let taskForm = document.createElement("div");
  taskForm.classList.add("taskFormEdit");

  const itemOne = document.createElement("div");
  itemOne.innerHTML = '<label for="updateTask">Task</label>';
  const itemOneInput = document.createElement("input");
  itemOneInput.name = "updateTask";
  itemOneInput.type = "text";
  itemOne.appendChild(itemOneInput);

  const itemTwo = document.createElement("div");
  itemTwo.innerHTML = '<label for="updateProject">Project Title</label>';
  const itemTwoInput = document.createElement("input");
  itemTwoInput.name = "updateProject";
  itemTwoInput.type = "text";
  itemTwo.appendChild(itemTwoInput);

  const itemThree = document.createElement("div");
  itemThree.innerHTML = '<label for="updateCatagory">Sub Catagory</label>';
  const itemThreeInput = document.createElement("input");
  itemThreeInput.name = "updateCatagory";
  itemThreeInput.type = "text";
  itemThree.appendChild(itemThreeInput);

  const itemFour = document.createElement("div");
  itemFour.innerHTML = '<label for="updatePriority">Priority</label>';
  const itemFourInput = document.createElement("select");
  itemFourInput.name = "updatePriority";

  const priorityZero = document.createElement("option");

  const priorityOne = document.createElement("option");
  priorityOne.value = "low";
  priorityOne.text = "Low";

  const priorityTwo = document.createElement("option");
  priorityTwo.value = "medium";
  priorityTwo.text = "Medium";

  const priorityThree = document.createElement("option");
  priorityThree.value = "high";
  priorityThree.text = "High";

  itemFourInput.append(priorityZero, priorityOne, priorityTwo, priorityThree);
  itemFour.appendChild(itemFourInput);

  const itemFive = document.createElement("div");
  itemFive.innerHTML = '<label for="updateDate">Due Date</label>';
  const itemFiveInput = document.createElement("input");
  itemFiveInput.name = "updateDate";
  itemFiveInput.type = "date";
  itemFive.appendChild(itemFiveInput);

  const itemSix = document.createElement("div");
  itemSix.innerHTML = '<label for="updateTime">Time</label>';
  const itemSixInput = document.createElement("input");
  itemSixInput.name = "updateTime";
  itemSixInput.type = "time";
  itemSix.appendChild(itemSixInput);

  const itemSeven = document.createElement("div");
  const itemSevenSubmit = document.createElement("button");
  itemSevenSubmit.id = "submit";
  itemSevenSubmit.dataset.name = "updateSubmit";
  itemSevenSubmit.innerText = "Update Task";

  const itemSevenCancel = document.createElement("button");
  itemSevenCancel.id = "cancel";
  itemSevenCancel.dataset.name = "updateCancel";
  itemSevenCancel.innerText = "Cancel";

  itemSeven.append(itemSevenSubmit, itemSevenCancel);

  taskForm.append(
    itemOne,
    itemTwo,
    itemThree,
    itemFour,
    itemFive,
    itemSix,
    itemSeven
  );

  taskItem.append(taskPriority, taskTitle, taskCatagory, deadline);

  tasklistPane.append(taskFormEditTitle);
  tasklistPane.append(headers);
  tasklistPane.append(taskItem);
  tasklistPane.append(taskForm);

  content.append(tasklistPane);

  updateTaskEvent(index);
};

export { tasklistDisplay, modifySingleTask };
