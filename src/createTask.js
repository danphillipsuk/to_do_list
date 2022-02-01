export default (function createTask() {

    console.log("I'm createTask.js")

    const taskForm = document.createElement('div');
    taskForm.classList.add('taskForm');
  
    document.getElementById("content").appendChild(taskForm);

});