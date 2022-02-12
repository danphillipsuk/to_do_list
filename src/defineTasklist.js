let taskList;

taskList = JSON.parse(localStorage.getItem('taskList'));


if (taskList === null) {

  // get todays date

  const taskListcreate = [
    {
      id: 7567,
      Title: "Mow Lawn", 
      Catagory: "Home", 
      subCatagory: "Garden",
      Priority: "medium",
      DateDue: "2023-01-01",
      Time: "",
      complete: false
    },
    {
      id: 435,
      Title: "Test Task", 
      Catagory: "Home", 
      subCatagory: "ToDo List",
      Priority: "medium",
      DateDue: "2023-01-01",
      Time: "",
      complete: false
    }
  ];
  
  localStorage.setItem("taskList", JSON.stringify(taskListcreate));
  taskList = JSON.parse(localStorage.getItem('taskList'));
};

export { taskList }

