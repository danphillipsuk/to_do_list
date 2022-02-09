export default function createTask() {

    // create new task form 
    const taskForm = document.createElement('section');
    taskForm.classList.add('taskForm');
    taskForm.style.visibility = 'hidden';
    taskForm.innerHTML = 
    '<h2>CREATE A NEW TASK</h2>\
    <div class="formElement taskTitle">\
      <label for="taskTitle">Task</label><input name ="taskTitle" type="text">\
    </div>\
    <div class="formElement">\
      <label for="taskCatagory">Project</label><input name="taskCatagory" type="text">\
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
      <label for="taskTime">Time</label><input type="time" name="time">\
    </div>\
    <button id="submit">Add Task</button>';

    document.getElementById("createForm").appendChild(taskForm);

    //listen for task form submit
    document.getElementById("submit").addEventListener("click", newTask);


    class taskClass {
      constructor(id, title, catagory, subCatagory, priority, dateDue, time) {
        this.id = id;
        this.Title = title;
        this.Catagory = catagory;
        this.subCatagory = subCatagory;
        this.Priority = priority;
        this.DateDue = dateDue;
        this.Time = time;
        this.complete = false;
      }
    } 

    //function to run on taskForm submit
    function newTask () {
      const title = document.querySelector("input[name='taskTitle']").value;
      const catagory = document.querySelector("input[name='taskCatagory']").value;
      const subcatagory = document.querySelector("input[name='subCatagory']").value;
      const priority = document.querySelector("select[name='priority']").value;
      const dueDate = document.querySelector("input[name='dueDate']").value;
      const time = document.querySelector("input[name='time']").value;
        
      if (title !== '' && dueDate !== '') {
        const id = Math.random();
        
        // Create a new task object
        const newAddition = new taskClass(id, title, catagory, subcatagory, priority, dueDate, time);

        // add new task to taskList array and set in localStorage
        const taskList = JSON.parse(window.localStorage.getItem("taskList"));
        taskList.push(newAddition);
        window.localStorage.setItem("taskList", JSON.stringify(taskList));
        location.reload(); 

      }
    }
  
};
