// import format from 'date-fns/format';
import addDays from 'date-fns/addDays';

let taskList;

taskList = JSON.parse(localStorage.getItem('taskList'));
  
if (taskList === null) {

  // generate current/relevent dates for dummy data
  const today= new Date().toISOString().slice(0,10);

  let tomDate = addDays(new Date(), 1);
  let tomorrow = tomDate.toISOString().slice(0,10);

  let yesDate = addDays(new Date(), -1);
  let yesterday = yesDate.toISOString().slice(0,10);

  const taskListcreate = [
    {
      id: 7567,
      task: "Mow Lawn", 
      project: "Home", 
      subcatagory: "Garden",
      priority: "medium",
      date: today,
      time: "",
      complete: false
    },
    {
      id: 75234567,
      task: "Pay home insurance", 
      project: "Home", 
      subcatagory: "Financial",
      priority: "high",
      date: tomorrow,
      time: "",
      complete: false
    },
    {
      id: 7562347,
      task: "Sow tomato seeds", 
      project: "Home", 
      subcatagory: "Garden",
      priority: "medium",
      date: yesterday,
      time: "",
      complete: true
    }
  ];
  
  localStorage.setItem("taskList", JSON.stringify(taskListcreate));
  taskList = JSON.parse(localStorage.getItem('taskList'));
};

export { taskList }

