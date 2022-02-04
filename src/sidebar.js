import { addDays } from 'date-fns';
export default (function sidebar() {

    const sidebar = document.createElement('div');
    sidebar.classList.add('sidebar');
    document.getElementById("content").appendChild(sidebar);

    // Get taskList array from localStorage
    let taskList= JSON.parse(localStorage.getItem('taskList'));

    const todaysTasksNumber = document.createElement('p');
    const today = taskList.filter(task => task.DateDue === new Date().toISOString().slice(0,10));
    const todayLength = today.length;
    todaysTasksNumber.innerHTML = `<span>${todayLength}</span> Tasks Due Today`;

    document.querySelector('.sidebar').appendChild(todaysTasksNumber);

    const SevenTasksNumber = document.createElement('p');
    const nextSevenTasksNumber = taskList.filter(task => task.DateDue > new Date().toISOString().slice(0,10));
    const SevenDayLength = nextSevenTasksNumber.length;
    SevenTasksNumber.innerHTML = `<span>${SevenDayLength}</span> Tasks Due Within 7 Days`;

    document.querySelector('.sidebar').appendChild(SevenTasksNumber);

    const expiredTasks = document.createElement('p');
    const expiredTasksNumber = taskList.filter(task => task.DateDue < new Date().toISOString().slice(0,10));
    const expiredLength = expiredTasksNumber.length;
    expiredTasks.innerHTML = `<span>${expiredLength}</span> Expired Tasks`;

    document.querySelector('.sidebar').appendChild(expiredTasks);



})();