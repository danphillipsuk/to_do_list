export default (function sidebar() {

    const sidebar = document.createElement('div');
    sidebar.classList.add('sidebar');
    sidebar.innerHTML = "<h2>Sidebar</h2>";
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
    SevenTasksNumber.innerHTML = `<span>${SevenDayLength}</span> Tasks Due Within The Next Week`;

    document.querySelector('.sidebar').appendChild(SevenTasksNumber);



})();