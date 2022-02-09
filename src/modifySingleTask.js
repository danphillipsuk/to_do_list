import { taskList } from './projectArrays.js';
const modifySingleTask = (index, object) => {

  console.log(taskList[index].Title)
  const modifyContainer = document.createElement('div');
  modifyContainer.classList.add('modifyContainer');
  const content = document.getElementById('content');


let taskForm = document.createElement('section');
taskForm.classList.add('modForm');
taskForm.innerHTML = 
'<h2>Modify your task</h2>\
  <div class="formElement taskTitle">\
    <label for="taskTitle">Task</label><input name ="taskTitle" type="text">\
  </div>\
  <div class="formElement">\
    <label for="taskCatagory">Project</label><input name="taskCatagory" type="text">\
  </div>\
  <div class="formElement">\
    <label for="priority">Priority</label><select name ="priority">\
      <option value="high">High</option>\
      <option value="medium">Medium</option>\
      <option value="low">Low</option>\
      <option value="NA">N/A</option>\
    </select>\
  </div>\
  <div class="formElement">\
    <label for="dueDate">Due Date</label><input type="date" name="dueDate">\
  </div>\
  <div class="formElement">\
    <label for="taskTime">Time</label><input type="time" name="time">\
  </div>\CREATE A NEW TASK\
  <button id="submit">Add Task</button>';

  modifyContainer.append(taskForm);
content.append(modifyContainer);

}


export { modifySingleTask }