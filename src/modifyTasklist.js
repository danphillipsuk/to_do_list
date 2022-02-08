// import todaysEvents from "./todaysEvents.js";
import { tasklistPane } from './tasklistPane.js';
import config from './config.js';
import { taskList } from './projectArrays.js';
import { display } from './todaysEvents.js';

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
  console.log(`Edit ${unique_id}`);

};

const viewProject = (unique_id) => {
  console.log(`Edit ${unique_id}`);
};


export { deleteTask, editTask, viewProject };