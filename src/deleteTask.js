import todaysEvents from "./todaysEvents.js";
export default function deleteTask(unique_id, taskList) {

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
  const refresh = document.getElementById("mainContent");
  refresh.removeChild(refresh.childNodes[2]);
  todaysEvents('today');

}