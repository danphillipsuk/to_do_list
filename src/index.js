import _ from 'lodash';
import './style.css';

import printMe from './print.js';
import createTask from './createTask.js';



createTask();
printMe();








// function component() {
//     const element = document.createElement('div');
//     const btn = document.createElement('button');
  
//     // Lodash
//     element.innerHTML = _.join(['Hello', 'webpack'], ' ');
//     element.classList.add('hello');

//     btn.innerHTML = 'Click me and check the console!';

//     btn.onclick = printMe;
  
  
//     element.appendChild(btn);
  
//     return element;
//   }
  
//   document.body.appendChild(component());