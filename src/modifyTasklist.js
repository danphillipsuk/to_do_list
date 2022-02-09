import { tasklistPane } from './tasklistPane.js';
import { taskList, countProjects, uniqueProjects } from './projectArrays.js';

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


export { deleteTask, editTask, viewProject, markComplete };