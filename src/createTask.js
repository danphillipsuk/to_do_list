export default function createTask() {
    console.log("I'm createTask.js")

    // create new task form 
    const taskForm = document.createElement('div');
    taskForm.classList.add('taskForm');
    taskForm.innerHTML = '<label for="taskTitle">Task</label><input name ="taskTitle" type="text"><label for="taskCatagory">Catagory</label><select name="taskCatagory"><option value="Home">Home</option><option value="work">Work</option></select><button id="submit">Add Task</button>';
    document.getElementById("content").appendChild(taskForm);

    //listen for task form submit
    document.getElementById("submit").addEventListener("click", newTask);


    class taskClass {
        constructor(title, catagory) {
            this.title = title;
            this.catagory = catagory;
        }
    } 

    const taskList = JSON.parse(localStorage.getItem("taskList"));

    if(!taskList) {
        localStorage.setItem("taskList", JSON.stringify(taskList));
    } 

    //function to run on taskForm submit
    function newTask () {
        const title = document.querySelector("input[name='taskTitle']").value;
        const catagory = document.querySelector("select[name='taskCatagory']").value;
    
        // Create a new task object
        const newAddition = new taskClass(title, catagory);

        // add new task to taskList array and set in localStorage
        taskList.push(newAddition);
        localStorage.setItem("taskList", JSON.stringify(taskList));
    }

};
