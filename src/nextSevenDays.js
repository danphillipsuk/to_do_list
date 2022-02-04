export default function nextSevenDays() {

    // retrieve taskList array from localStorage
    let taskList= JSON.parse(localStorage.getItem('taskList'));

    // Display Events/Tasks due today
    function displaySeven() {

        // create array of tasks due today 
        const today = taskList.filter(task => task.DateDue > new Date().toISOString().slice(0,10));

        //arrang in reverse date order for display
        const seven =  today.sort(function(a, b) {
            if(a.DateDue > b.DateDue) {
                return -1;
            } else {
                return 1;
            }
        })

        console.log(seven)

        const todaysEvents = document.createElement('div');
        todaysEvents.classList.add('todaysEvents');
        document.getElementById("mainContent").appendChild(todaysEvents);
            
        seven.forEach((items, index) => {
            const taskItemToday = document.createElement('ul');
            taskItemToday.classList.add('taskItemToday');
            taskItemToday.classList.add('seven');
            document.querySelector('.todaysEvents').prepend(taskItemToday);

            for (let key in items) {

                const taskElement = document.createElement('li');
                taskElement.innerText = `${[key]} ${items[key]}`;
                document.querySelector('.taskItemToday').appendChild(taskElement);

            }

            // create modify task button for each task
            const modifyTask = document.createElement('button');
            modifyTask.classList.add('modifyTask');
            modifyTask.innerText = "Modify";
            document.querySelector('.taskItemToday').append(modifyTask);
            
            // create delete button for each task
            const deleteTask = document.createElement('button');
            deleteTask.value = `${items['id']}`;
            deleteTask.classList.add('deleteTask');
            deleteTask.innerText = "Delete";
            document.querySelector('.taskItemToday').append(deleteTask);
        
        });

        const futureHeadline = document.createElement('h3');
        futureHeadline.innerText = "Your Next Seven Days";
        document.querySelector('.todaysEvents').prepend(futureHeadline);

    };

    displaySeven();

        // Delete book object from array
        document.querySelectorAll(".deleteTask").forEach(function(item) {

            item.addEventListener("click", () => {
                
                // console.log(item.value)
                // console.log(taskList)
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
