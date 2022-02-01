export default function printMe() {
    console.log('I get called from print.js!');

    // let clearTaskList = [];
    // localStorage.setItem("taskList", JSON.stringify(clearTaskList));

    const taskList = JSON.parse(localStorage.getItem("taskList"));


    const todoList = document.createElement('div');
    todoList.classList.add('todoList');
    document.getElementById("content").appendChild(todoList);

    (function() {
        let taskElement = "";
        taskList.forEach((item, index) => {
            taskElement += `<ul>${index}`;
            for (let key in item) {
                taskElement += `<li>${item[key]}</li>`;
            }
            taskElement += "</ul>";
        });

        const page = document.querySelector('.todoList');
        page.innerHTML = taskElement;

    })();

    
}