import { tasklistPane } from './tasklistPane.js';
import { taskList } from './projectArrays.js';
import { modifySingleTask } from './modifySingleTask.js';

// Delete task from main taskList array
const deleteTask = (unique_id, array) => {

  // find index of item to delete in master array (taskList)
  const taskListIndex = taskList.findIndex((obj) => {
    if(obj.id == unique_id) {
      return true;
    };
    return false;
  });

  // remove item from master array
  taskList.splice(taskListIndex, 1);

  // upload new array to local storage
  localStorage.setItem("taskList", JSON.stringify(taskList));
  location.reload(); 
  
};

// Modify task in main taskList array
const editTask = (unique_id) => {

  // find index of item to delete in master array (taskList)
  const taskListIndex = taskList.findIndex((obj) => {
    if(obj.id == unique_id) {
      return true;
    };
    return false;
  });

  const task = taskList.filter(task => task.id == unique_id);


  modifySingleTask(taskListIndex, task);

};

const viewProject = (cat) => {
  // Get array of all tasks with that catagory
  const catagoryArray = taskList.filter(task => task.Catagory == cat);
  tasklistPane(catagoryArray, cat);
};

const markComplete = (unique_id) => {

  const taskListIndex = taskList.findIndex((obj) => {
    if(obj.id == unique_id) {
      return true;
    };
    return false;
  });

  console.log(taskList[taskListIndex])
  taskList[taskListIndex].complete = true;
  localStorage.setItem("taskList", JSON.stringify(taskList));
  location.reload(); 
};

const modifyTask = (index, task, projectTitle, subCatagory, priority, dueDate, time) => {

  console.log(index, task, projectTitle, subCatagory, priority, dueDate, time);
  console.log(taskList[index])
  if (task) {
    taskList[index].Title = task;
  }
  if (projectTitle) {
    taskList[index].Catagory = projectTitle;
  }
  if (subCatagory) {
    taskList[index].subCatagory = subCatagory;
  }
  if (priority) {
    taskList[index].Priority = priority;
  }
  if (dueDate) {
    taskList[index].DateDue = dueDate;
  }
  if (time) {
    taskList[index].Time = time;
  }

  localStorage.setItem("taskList", JSON.stringify(taskList));
  location.reload(); 
};


export { deleteTask, editTask, viewProject, markComplete, modifyTask };