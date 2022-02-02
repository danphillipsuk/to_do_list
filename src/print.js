export default function printMe() {

    function deleteButton(num) {
        const deleteTask = document.createElement('button');
        deleteTask.value = num;
        deleteTask.classList.add('deleteTask');
        deleteTask.innerText = "Delete";
        document.querySelector('.taskItem').append(deleteTask);
        return;
    }

    // let clearTaskList = [];
    // localStorage.setItem("taskList", JSON.stringify(clearTaskList));

    // retrieve taskList array from localStorage
    const taskList = JSON.parse(localStorage.getItem("taskList"));

    // create array of tasks due today 
    const today = taskList.filter(task => task.DateDue === new Date().toISOString().slice(0,10));

    //create array of tasks due in future
    const future = taskList.filter(task => task.DateDue !== new Date().toISOString().slice(0,10));

    // Display Events/Tasks Due in the future
    function displayList() {

        const todoList = document.createElement('div');
        todoList.classList.add('todoList');
        document.getElementById("content").appendChild(todoList);

        
            
        future.forEach((item, index) => {

            const taskItem = document.createElement('ul');
            taskItem.classList.add('taskItem');
            document.querySelector('.todoList').prepend(taskItem);

            const taskIndex = document.createElement('li');
            taskIndex.innerText = `Object Index: ${index}`;
            document.querySelector('.taskItem').appendChild(taskIndex);

            for (let key in item) {
        
                const taskElement = document.createElement('li');
                taskElement.innerText = `${[key]} ${item[key]}`;
                document.querySelector('.taskItem').appendChild(taskElement);

            }

            // create modify task button for each task
            const modifyTask = document.createElement('button');
            modifyTask.classList.add('modifyTask');
            modifyTask.innerText = "Modify";
            document.querySelector('.taskItem').append(modifyTask);
            
            // create delete button for each task
            // const deleteTask = document.createElement('button');
            // deleteTask.value = `${index}`;
            // deleteTask.classList.add('deleteTask');
            // deleteTask.innerText = "Delete";
            // document.querySelector('.taskItem').append(deleteTask);
            deleteButton(`${index}`);
        
        });

        const todoListHeadline = document.createElement('h3');
        todoListHeadline.innerText = "Tasks due in future";
        document.querySelector('.todoList').prepend(todoListHeadline);

    }



    // Display Events/Tasks due today
    function todaysList() {

        const todaysEvents = document.createElement('div');
        todaysEvents.classList.add('todaysEvents');
        document.getElementById("content").appendChild(todaysEvents);
            
        today.forEach((item, index) => {

            const taskItemToday = document.createElement('ul');
            taskItemToday.classList.add('taskItemToday');
            taskItemToday.classList.add('today');
            document.querySelector('.todaysEvents').prepend(taskItemToday);

            for (let key in item) {
        
                const taskElement = document.createElement('li');
                taskElement.innerText = `${[key]} ${item[key]}`;
                document.querySelector('.taskItemToday').appendChild(taskElement);

            }

            // create modify task button for each task
            const modifyTask = document.createElement('button');
            modifyTask.classList.add('modifyTask');
            modifyTask.innerText = "Modify";
            document.querySelector('.taskItemToday').append(modifyTask);
            
            // create delete button for each task
            const deleteTask = document.createElement('button');
            deleteTask.value = `${index}`;
            deleteTask.classList.add('deleteTask');
            deleteTask.innerText = "Delete";
            document.querySelector('.taskItemToday').append(deleteTask);
        //    deleteButton(`${index}`);
        
        });

        const futureHeadline = document.createElement('h3');
        futureHeadline.innerText = "Today's Tasks";
        document.querySelector('.todaysEvents').prepend(futureHeadline);

    }

    
    todaysList();
    displayList();


        // Delete book object from array
        document.querySelectorAll(".deleteTask").forEach(function(item, value) {
            item.addEventListener("click", () => {
                console.log(value)
                taskList.splice(value, 1);
                localStorage.setItem("taskList", JSON.stringify(taskList));
            });
        });
    

    
}

