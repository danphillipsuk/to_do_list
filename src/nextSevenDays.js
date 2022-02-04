export default function nextSevenDays() {

    // retrieve taskList array from localStorage
    let taskList= JSON.parse(localStorage.getItem('taskList'));

    // Display Events/Tasks due today
    function display() {

        // create array of tasks due today 
        const today = taskList.filter(task => task.DateDue > new Date().toISOString().slice(0,10));

        const todaysEvents = document.createElement('div');
        todaysEvents.classList.add('todaysEvents');
        document.getElementById("mainContent").append(todaysEvents);
            
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
        
        });

        const futureHeadline = document.createElement('h3');
        futureHeadline.innerText = "Your Next Seven Days";
        document.querySelector('.todaysEvents').prepend(futureHeadline);

    };

    display();

        // Delete book object from array
        document.querySelectorAll(".deleteTask").forEach(function(item, value) {
            item.addEventListener("click", () => {
                console.log("HEllo",value)
                taskList.splice(value, 1);
                localStorage.setItem("taskList", JSON.stringify(taskList));
            })
        })
    
}

