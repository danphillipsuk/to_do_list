import config from './config.js';
export default (function tabs() {

    // get global variabels from config.js
    let taskList= config.taskList();
    const mainContent = config.mainContent();

    const tabContainer = document.createElement('div');
    tabContainer.classList.add('tabContainer');
    mainContent.appendChild(tabContainer);
    

    const tabMenu = document.querySelector('.tabContainer');

    const todaysTasksNumber = document.createElement('p');
    todaysTasksNumber.classList.add('todayTab');
    const today = taskList.filter(task => task.DateDue === new Date().toISOString().slice(0,10));
    const todayLength = today.length;
    todaysTasksNumber.innerHTML = `<span>${todayLength}</span> Tasks Today`;

    const SevenTasksNumber = document.createElement('p');
    SevenTasksNumber.classList.add('sevenDayTab');
    const nextSevenTasksNumber = taskList.filter(task => task.DateDue > new Date().toISOString().slice(0,10));
    const SevenDayLength = nextSevenTasksNumber.length;
    SevenTasksNumber.innerHTML = `<span>${SevenDayLength}</span> Tasks Within 7 Days`;



    tabMenu.append(todaysTasksNumber, SevenTasksNumber);



})();