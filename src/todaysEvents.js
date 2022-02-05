export default function todaysEvents() {

    // retrieve taskList array from localStorage
    let taskList= JSON.parse(localStorage.getItem('taskList'));

    // Display Events/Tasks due today
    function display() {

        // create array of tasks due today 
        const today = taskList.filter(task => task.DateDue === new Date().toISOString().slice(0,10));

        const todaysEvents = document.createElement('div');
        todaysEvents.classList.add('todaysEvents');
        document.getElementById("mainContent").appendChild(todaysEvents);


        



            
        today.forEach((item, index) => {

            const taskItemToday = document.createElement('ul');
            taskItemToday.classList.add('taskItemToday');
            taskItemToday.classList.add('today');
            document.querySelector('.todaysEvents').prepend(taskItemToday);

            for (let key in item) {

                const taskElement = document.createElement('li');
                if ([key] != "id") {
                    taskElement.classList.add(`${[key]}`);
                    const taskTitle = document.createElement('span');
                    taskTitle.innerText = `${[key]}`;
                    if ([key] == 'DateDue') {
                        taskElement.innerText = ``;
                    } else {

                    taskElement.innerText = `${item[key]}`;
                    taskElement.prepend(taskTitle);
                    }
                    document.querySelector('.taskItemToday').appendChild(taskElement);
                }
            }

            // create modify task button for each task
            const modifyTask = document.createElement('button');
            modifyTask.classList.add('modifyTask');
            modifyTask.innerText = "EDIT";
            document.querySelector('.taskItemToday').append(modifyTask);
            
            // create delete button for each task
            const deleteTask = document.createElement('button');
            deleteTask.value = `${item['id']}`;
            deleteTask.classList.add('deleteTask');
            deleteTask.innerText = "X";
            document.querySelector('.taskItemToday').append(deleteTask);
        
        });

        const futureHeadline = document.createElement('h3');
        futureHeadline.innerText = "Today's Tasks";
        document.querySelector('.todaysEvents').prepend(futureHeadline);

    };

    display();

    document.querySelectorAll(".deleteTask").forEach(function(item) {

        item.addEventListener("click", () => {
    
            const rmv = item.value;

            taskList.forEach((items, index) => {

                if (items.id === rmv) {
                    console.log(index)
                    taskList.splice(index, 1);
                    localStorage.setItem("taskList", JSON.stringify(taskList));
                }
                
            })
        })
    })
    
}

