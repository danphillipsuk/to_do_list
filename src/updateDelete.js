import addDays from "date-fns/addDays";
import { uniq } from "lodash";
import { taskList } from "./defineTasklist.js";
import { tasklistDisplay, modifySingleTask } from "./domCreate.js";

// Get array for todays date
const arrayLists = (() => {
  // Get array for todays date
  const today = taskList.filter(
    (task) => task.date === new Date().toISOString().slice(0, 10)
  );
  const todayCompleted = today.filter((task) => task.complete === false);
  const todaysNum = todayCompleted.length;
  const todayHeadline = "Today";

  // Get array for tomorrows date
  let todaysDate = addDays(new Date(), 1);
  let tomorrowsDate = todaysDate.toISOString().slice(0, 10);
  const tomorrow = taskList.filter((task) => task.date === tomorrowsDate);
  const tomorrowCompleted = tomorrow.filter((task) => task.complete === false);
  const tomorrowsNum = tomorrowCompleted.length;
  const tomorrowsHeadline = "Tomorrow";

  // Get array of tasks with high priority
  const highPriorityHeadline = "High Priority";
  const highPriority = taskList.filter((task) => task.priority === "high");
  const priorityCompleted = highPriority.filter(
    (task) => task.complete === false
  );
  const priorityNum = priorityCompleted.length;

  // Get array for individual projects
  // create new array of catagory names
  const projects = taskList.map((project) => project.project);
  // count ocurrances of each catagory name
  const countProjects = projects.reduce((acc, value) => {
    return {
      ...acc,
      [value]: (acc[value] || 0) + 1,
    };
  }, {});

  // create array of unique catagory names
  const uniqueProjects = projects.filter(
    (i, index) => projects.indexOf(i) === index
  );

  return {
    today,
    todaysNum,
    todayHeadline,
    tomorrowsNum,
    tomorrowsHeadline,
    tomorrowCompleted,
    highPriorityHeadline,
    priorityNum,
    priorityCompleted,
    uniqueProjects,
    countProjects,
  };
})();

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Process new task submission
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const createTask = (task, project, subcatagory, priority, date, time) => {
  // New task object factory
  const newTaskFactory = (task, project, subcatagory, priority, date, time) => {
    const id = Math.random();
    const complete = false;

    return { id, task, project, subcatagory, priority, date, time, complete };
  };

  // Create new task object
  const newTask = newTaskFactory(
    task,
    project,
    subcatagory,
    priority,
    date,
    time
  );
  console.log(newTask);

  // add new task to taskList array and set in localStorage
  taskList.push(newTask);
  window.localStorage.setItem("taskList", JSON.stringify(taskList));
  const content = document.getElementById("content");
  content.removeChild(content.childNodes[1]);
  tasklistDisplay();
};

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Mark Task Complete
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const markComplete = (unique_id) => {
  const taskListIndex = taskList.findIndex((obj) => {
    if (obj.id == unique_id) {
      return true;
    }
    return false;
  });
  taskList[taskListIndex].complete = true;
  localStorage.setItem("taskList", JSON.stringify(taskList));
  // location.reload();
};

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Undo Task Complete
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const undoComplete = (unique_id) => {
  const taskListIndex = taskList.findIndex((obj) => {
    if (obj.id == unique_id) {
      return true;
    }
    return false;
  });

  taskList[taskListIndex].complete = false;
  localStorage.setItem("taskList", JSON.stringify(taskList));
  location.reload();
};

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Delete Task
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const deleteTask = (unique_id) => {
  // find index of item to delete in master array (taskList)
  const taskListIndex = taskList.findIndex((obj) => {
    if (obj.id == unique_id) {
      return true;
    }
    return false;
  });

  // remove item from master array
  taskList.splice(taskListIndex, 1);

  // upload new array to local storage
  localStorage.setItem("taskList", JSON.stringify(taskList));
  location.reload();
};

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// View Project
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const viewProject = (cat) => {
  const catagoryArray = taskList.filter((task) => task.project == cat);
  tasklistDisplay(catagoryArray, cat);
};

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Edit individual task
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const editTask = (unique_id) => {
  // find index of item to delete in master array (taskList)
  const taskListIndex = taskList.findIndex((obj) => {
    if (obj.id == unique_id) {
      return true;
    }
    return false;
  });

  const task = taskList.filter((task) => task.id == unique_id);

  modifySingleTask(taskListIndex, task);
};

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Update taskList array with modified task
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const updateTask = (
  index,
  updateTask1,
  updateProject,
  updateCatagory,
  updatePriority,
  updateDate,
  updateTime
) => {
  if (updateTask1) {
    taskList[index].task = updateTask1;
  }
  if (updateProject) {
    taskList[index].project = updateProject;
  }
  if (updateCatagory) {
    taskList[index].subcatagory = updateCatagory;
  }
  if (updatePriority) {
    taskList[index].priority = updatePriority;
  }
  if (updateDate) {
    taskList[index].date = updateDate;
  }
  if (updateTime) {
    taskList[index].time = updateTime;
  }

  localStorage.setItem("taskList", JSON.stringify(taskList));
  location.reload();
};

export {
  arrayLists,
  createTask,
  markComplete,
  undoComplete,
  deleteTask,
  viewProject,
  editTask,
  updateTask,
};
