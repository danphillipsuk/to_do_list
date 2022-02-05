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

        const sevenDayEvents = document.createElement('div');
        sevenDayEvents.classList.add('sevenDayEvents');
        document.getElementById("mainContent").appendChild(sevenDayEvents);
            
        seven.forEach((items) => {

            const sevenDayItem = document.createElement('ul');
            sevenDayItem.classList.add('sevenDay');
            document.querySelector('.sevenDayEvents').prepend(sevenDayItem);

            for (let key in items) {

                const taskElement = document.createElement('li');
                if ([key] != "id") {
                    taskElement.classList.add(`${[key]}`);
                    const taskTitle = document.createElement('span');
                    taskTitle.innerText = `${[key]}`;
                    taskElement.innerText = `${items[key]}`;
                    taskElement.prepend(taskTitle);
                    document.querySelector('.sevenDay').appendChild(taskElement);
                }
            }

            // create modify task button for each task
            const modifyTask = document.createElement('button');
            modifyTask.classList.add('modifyTask');
            modifyTask.innerText = "EDIT";
            document.querySelector('.sevenDay').append(modifyTask);
            
            // create delete button for each task
            (function() {
            const deleteTask = document.createElement('button');
            deleteTask.value = `${items['id']}`;
            deleteTask.classList.add('deleteTask');
            deleteTask.innerText = "X";
            document.querySelector('.sevenDay').append(deleteTask);
            })();
        
        });

        const futureHeadline = document.createElement('h3');
        futureHeadline.innerText = "Your Next Seven Days";
        document.querySelector('.sevenDayEvents').prepend(futureHeadline);

    };

    displaySeven();

        // Delete task object from array
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



