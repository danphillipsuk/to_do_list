export default function nextSevenDays() {

    // retrieve taskList array from localStorage
    let taskList= JSON.parse(localStorage.getItem('taskList'));

    // Display Events/Tasks due over next seven days
    function displaySeven() {

        // create array of tasks due today 
        const today = taskList.filter(task => task.DateDue > new Date().toISOString().slice(0,10));

        //arrange in reverse date order for display
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

    // Remove previous view content, load seven day content, and disable eventlistener on seven day tab
    (function() {
        const test = document.getElementById("mainContent");
        if (test.childNodes[2] !== undefined) {
            test.removeChild(test.childNodes[2]);

        };

        const currentTab = document.querySelector('.sevenDayTab');
        currentTab.style.pointerEvents = "none";
        currentTab.classList.add("active");     
    })();

    
}



