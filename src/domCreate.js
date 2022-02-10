// create new task form 
let modForm = document.createElement('div');
modForm.classList.add('modForm');
modForm.innerHTML = 
'<h2>CREATE A NEW TASK</h2>\
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
  </div>\
  <button id="submit">Add Task</button>';

export { modForm };

