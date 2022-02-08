import todaysEvents from "./todaysEvents.js";
import config from './config.js';

// Delete task from main taskList array
const deleteTask = (unique_id, taskList) => {
  // get global variabels from config.js
  const mainContent = config.content();

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

  // remove expired array from display and refresh
  mainContent.removeChild(mainContent.childNodes[3]);

  todaysEvents('today');

};

// Modify task in main taskList array
const editTask = (unique_id, taskList) => {
  console.log(`Edit ${unique_id}`);
};


export { deleteTask, editTask };