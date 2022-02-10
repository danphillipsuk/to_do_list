import { taskList } from './projectArrays.js';
const modifySingleTask = (index, object) => {

  console.log(taskList[index].Title, object)

  const modifyContainer = document.createElement('div');
  modifyContainer.classList.add('modifyContainer');
  const content = document.getElementById('content');
  content.removeChild(content.childNodes[1]);    

  let taskFormEditTitle = document.createElement('h2');
  taskFormEditTitle.innerText = "Modify Task";


  const headers = document.createElement('ul');
  headers.innerHTML = 
    '<ul id="columnHeaders">\
      <li>Priority</li>\
      <li>Time</li>\
      <li>Task</li>\
      <li>Project</li>\
      <li>Day Due</li>\
    </ul>';

  const taskItem = document.createElement('ul');
  taskItem.classList.add('taskItem');

  const taskPriority = document.createElement('li');
  const taskPriorityInner = document.createElement('span');
  taskPriority.classList.add('taskPriority');
  switch(taskList[index].Priority) {
    case 'low':
      taskPriority.classList.add('low');
      break;
    case 'medium':
      taskPriority.classList.add('medium');
      break;
    case 'high':
      taskPriority.classList.add('high');
      break;
    default:
      break;
  }
  taskPriority.append(taskPriorityInner);

  const taskTime = document.createElement('li');
  taskTime.classList.add('taskTime');
  taskTime.innerText = `${taskList[index].Time}`;

  const taskTitle = document.createElement('li');
  taskTitle.classList.add('taskTitle');
  taskTitle.innerText = `${taskList[index].Title}`;

  const taskCatagory = document.createElement('li');
  taskCatagory.classList.add('taskCatagory');
  taskCatagory.innerText = `${taskList[index].Catagory}`;

  const taskDateDue = document.createElement('li');
  taskDateDue.classList.add('taskDateDue');
  taskDateDue.innerText = `${taskList[index].DateDue}`;
  

  const tasklistPane = document.createElement('section');
  tasklistPane.id = "tasklistPane";


  let taskForm = document.createElement('div');
  taskForm.classList.add('taskFormEdit');

  const itemOne = document.createElement('div');
  itemOne.innerHTML = '<label for="taskTitle">Task</label>';
  const itemOneInput = document.createElement('input');
  itemOneInput.name = 'taskTitle';
  itemOneInput.type = 'text';
  itemOne.appendChild(itemOneInput);

  const itemTwo = document.createElement('div');
  itemTwo.innerHTML = '<label for="taskCatagory">Project</label>';
  const itemTwoInput = document.createElement('input');
  itemTwoInput.name = 'taskCatagory';
  itemTwoInput.type = 'text';
  itemTwo.appendChild(itemTwoInput);

  const itemThree = document.createElement('div');
  itemThree.innerHTML = '<label for="subCatagory">Sub Catagory</label>';
  const itemThreeInput = document.createElement('input');
  itemThreeInput.name = 'subCatagory';
  itemThreeInput.type = 'text';
  itemThree.appendChild(itemThreeInput);

  const itemFour = document.createElement('div');
  itemFour.innerHTML = '<label for="priority">Priority</label>';
  const itemFourInput = document.createElement('select');
  itemFourInput.name = 'priority';
  

  const priorityOne = document.createElement('option');
  priorityOne.value = 'low';
  priorityOne.text = 'Low';
  priorityOne.selected = true;

  const priorityTwo = document.createElement('option');
  priorityTwo.value = 'medium';
  priorityTwo.text = 'Medium';

  const priorityThree = document.createElement('option');
  priorityThree .value = 'high';
  priorityThree .text = 'High';

  itemFourInput.append(priorityOne, priorityTwo, priorityThree);
  itemFour.appendChild(itemFourInput);


  const itemFive = document.createElement('div');
  itemFive.innerHTML = '<label for="dueDate">Due Date</label>';
  const itemFiveInput = document.createElement('input');
  itemFiveInput.name = 'dueDate';
  itemFiveInput.type = 'date';
  itemFive.appendChild(itemFiveInput);

  const itemSix = document.createElement('div');
  itemSix.innerHTML = '<label for="taskTime">Time</label>';
  const itemSixInput = document.createElement('input');
  itemSixInput.name = 'taskTime';
  itemSixInput.type = 'time';
  itemSix.appendChild(itemSixInput);

  const itemSeven = document.createElement('div');
  itemSeven.innerHTML = '<button id="submit">Update Task</button>';

  taskForm.append(
    itemOne, itemTwo, itemThree, itemFour, itemFive, itemSix, itemSeven
  );

  taskItem.append(
    taskPriority,
    taskTime, 
    taskTitle,
    taskCatagory,
    taskDateDue,
    );
  

  tasklistPane.append(taskFormEditTitle)
  tasklistPane.append(headers);
  tasklistPane.append(taskItem);
  tasklistPane.append(taskForm);

  content.append(tasklistPane);

}


export { modifySingleTask }