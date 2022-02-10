import { taskList } from './projectArrays.js';
import { modifyTask } from './modifyTasklist.js';
const modifySingleTask = (index) => {

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
  itemOne.innerHTML = '<label for="task">Task</label>';
  const itemOneInput = document.createElement('input');
  itemOneInput.name = 'task';
  itemOneInput.type = 'text';
  itemOne.appendChild(itemOneInput);

  const itemTwo = document.createElement('div');
  itemTwo.innerHTML = '<label for="projectTitle">Project Title</label>';
  const itemTwoInput = document.createElement('input');
  itemTwoInput.name = 'projectTitle';
  itemTwoInput.type = 'text';
  itemTwo.appendChild(itemTwoInput);

  const itemThree = document.createElement('div');
  itemThree.innerHTML = '<label for="catagory">Sub Catagory</label>';
  const itemThreeInput = document.createElement('input');
  itemThreeInput.name = 'catagory';
  itemThreeInput.type = 'text';
  itemThree.appendChild(itemThreeInput);

  const itemFour = document.createElement('div');
  itemFour.innerHTML = '<label for="priority">Priority</label>';
  const itemFourInput = document.createElement('select');
  itemFourInput.name = 'priority1';

  const priorityZero = document.createElement('option');

  const priorityOne = document.createElement('option');
  priorityOne.value = 'low';
  priorityOne.text = 'Low';

  const priorityTwo = document.createElement('option');
  priorityTwo.value = 'medium';
  priorityTwo.text = 'Medium';

  const priorityThree = document.createElement('option');
  priorityThree.value = 'high';
  priorityThree.text = 'High';

  itemFourInput.append(priorityZero, priorityOne, priorityTwo, priorityThree);
  itemFour.appendChild(itemFourInput);


  const itemFive = document.createElement('div');
  itemFive.innerHTML = '<label for="date">Due Date</label>';
  const itemFiveInput = document.createElement('input');
  itemFiveInput.name = 'date';
  itemFiveInput.type = 'date';
  itemFive.appendChild(itemFiveInput);

  const itemSix = document.createElement('div');
  itemSix.innerHTML = '<label for="taskTime">Time</label>';
  const itemSixInput = document.createElement('input');
  itemSixInput.name = 'taskTime';
  itemSixInput.type = 'time';
  itemSix.appendChild(itemSixInput);

  const itemSeven = document.createElement('div');
  const itemSevenSubmit = document.createElement('button');
  itemSevenSubmit.id = 'submit';
  itemSevenSubmit.innerText = 'Update Task';

  const itemSevenCancel = document.createElement('button');
  itemSevenCancel.id = 'cancel';
  itemSevenCancel.innerText = 'Cancel';

  itemSeven.append(itemSevenSubmit, itemSevenCancel);

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



  itemSevenSubmit.addEventListener("click", () => {
    const task = document.querySelector("input[name='task']").value;
    const projectTitle = document.querySelector("input[name='projectTitle']").value;
    const subCatagory = document.querySelector("input[name='catagory']").value;
    const priority = document.querySelector("select[name='priority1']").value;
    const dueDate = document.querySelector("input[name='date']").value;
    const time = document.querySelector("input[name='taskTime']").value;
    modifyTask(index, task, projectTitle, subCatagory, priority, dueDate, time);
  });

}
export { modifySingleTask }