import deleteTask from "./deleteTask.js";
export default function todaysEvents(test) {

    // retrieve taskList array from localStorage
    let taskList= JSON.parse(localStorage.getItem('taskList'));

    let displayTasks;
    let pageTitle;

    if (test === 'seven') {
      displayTasks = taskList.filter(task => task.DateDue > new Date().toISOString().slice(0,10));
      const currentTab = document.querySelector('.sevenDayTab');
      currentTab.style.pointerEvents = "none";
      currentTab.classList.add("active");  

      const todayTab = document.querySelector('.todayTab');
      todayTab.style.pointerEvents = "auto";
      todayTab.classList.remove("active");

      pageTitle = "Next Seven Days";
        
    } else {

      if (test === 'today')
      displayTasks = taskList.filter(task => task.DateDue === new Date().toISOString().slice(0,10));
      const currentTab = document.querySelector('.todayTab');
      currentTab.style.pointerEvents = "none";
      currentTab.classList.add("active");  

      const todayTab = document.querySelector('.sevenDayTab');
      todayTab.style.pointerEvents = "auto";
      todayTab.classList.remove("active");

      pageTitle = "Today's Tasks";
    }


    // Display Events/Tasks due today
    function display() {

        const todaysEvents = document.createElement('div');
        todaysEvents.id ='todaysEvents';
        document.getElementById("mainContent").append(todaysEvents);
    
        displayTasks.forEach((item, index) => {

            const taskItem = document.createElement('ul');
            taskItem.classList.add('taskItem');
            document.getElementById('todaysEvents').prepend(taskItem);


            const taskTitle = document.createElement('li');
            taskTitle.classList.add('taskTitle');
            taskTitle.innerText = `${item.Title}`;

            const taskTitleCatagory = document.createElement('span');
            taskTitleCatagory.innerText = `${item.Catagory}`;
            taskTitle.prepend(taskTitleCatagory);

            document.querySelector('.taskItem').appendChild(taskTitle);


            // create modify task button for each task
            const modifyTask = document.createElement('button');
            modifyTask.value = `${item['id']}`;
            modifyTask.classList.add('modifyTask');
            modifyTask.innerText = "EDIT";
            document.querySelector('.taskItem').append(modifyTask);
            
            // create delete button for each task
            const deleteTask = document.createElement('button');
            deleteTask.value = `${item['id']}`;
            deleteTask.classList.add('deleteTask');
            deleteTask.innerText = "X";
            document.querySelector('.taskItem').append(deleteTask);
        
        });

        const futureHeadline = document.createElement('h3');
        futureHeadline.innerText = pageTitle;
        document.getElementById('todaysEvents').prepend(futureHeadline);

    };

    display();


    // Delete task from taskList array
    document.querySelectorAll(".deleteTask").forEach(function(item) {
      item.addEventListener("click", () => {
        deleteTask(item.value, taskList);
      });
    });
    
    
}

