/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!***************************!*\
  !*** ./src/createTask.js ***!
  \***************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createTask)
/* harmony export */ });
// import todaysEvents from "./todaysEvents";

function createTask() {

    // create new task form 
    const taskForm = document.createElement('div');
    taskForm.classList.add('taskForm');
    taskForm.innerHTML = '<h2>Create a new task</h2><div class="formElement taskTitle"><label for="taskTitle">Task</label><input name ="taskTitle" type="text"></div><div class="formElement"><label for="taskCatagory">Catagory</label><select name="taskCatagory"><option value="Home">Home</option><option value="work">Work</option></select></div><div class="formElement"><label for="dueDate">Due Date</label><input type="date" name="dueDate"></div><div class="formElement"><label for="taskTime">Time</label><input type="time" name="time"></div><button id="submit">Add Task</button>';
    document.getElementById("mainContent").appendChild(taskForm);

    //listen for task form submit
    document.getElementById("submit").addEventListener("click", newTask);


    class taskClass {
        constructor(id, title, catagory, dateDue, time) {
            this.id = id;
            this.Title = title;
            this.Catagory = catagory;
            this.DateDue = dateDue;
            this.Time = time;
        }
    } 

    //function to run on taskForm submit
    function newTask () {
        const title = document.querySelector("input[name='taskTitle']").value;
        const catagory = document.querySelector("select[name='taskCatagory']").value;
        const dueDate = document.querySelector("input[name='dueDate']").value;
        const time = document.querySelector("input[name='time']").value;
        
        if (title !== '' && dueDate !== '') {
            const id = title + Math.random();
            console.log(id)
            // Create a new task object
            const newAddition = new taskClass(id, title, catagory, dueDate, time);

            // add new task to taskList array and set in localStorage
            const taskList = JSON.parse(window.localStorage.getItem("taskList"));
            taskList.push(newAddition);
            window.localStorage.setItem("taskList", JSON.stringify(taskList));

    
        }


    }
    

};

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7VUFBQTtVQUNBOzs7OztXQ0RBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOQTs7QUFFZTs7QUFFZjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvX2RvX2xpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvX2RvX2xpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b19kb19saXN0Ly4vc3JjL2NyZWF0ZVRhc2suanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBpbXBvcnQgdG9kYXlzRXZlbnRzIGZyb20gXCIuL3RvZGF5c0V2ZW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVUYXNrKCkge1xuXG4gICAgLy8gY3JlYXRlIG5ldyB0YXNrIGZvcm0gXG4gICAgY29uc3QgdGFza0Zvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0YXNrRm9ybS5jbGFzc0xpc3QuYWRkKCd0YXNrRm9ybScpO1xuICAgIHRhc2tGb3JtLmlubmVySFRNTCA9ICc8aDI+Q3JlYXRlIGEgbmV3IHRhc2s8L2gyPjxkaXYgY2xhc3M9XCJmb3JtRWxlbWVudCB0YXNrVGl0bGVcIj48bGFiZWwgZm9yPVwidGFza1RpdGxlXCI+VGFzazwvbGFiZWw+PGlucHV0IG5hbWUgPVwidGFza1RpdGxlXCIgdHlwZT1cInRleHRcIj48L2Rpdj48ZGl2IGNsYXNzPVwiZm9ybUVsZW1lbnRcIj48bGFiZWwgZm9yPVwidGFza0NhdGFnb3J5XCI+Q2F0YWdvcnk8L2xhYmVsPjxzZWxlY3QgbmFtZT1cInRhc2tDYXRhZ29yeVwiPjxvcHRpb24gdmFsdWU9XCJIb21lXCI+SG9tZTwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCJ3b3JrXCI+V29yazwvb3B0aW9uPjwvc2VsZWN0PjwvZGl2PjxkaXYgY2xhc3M9XCJmb3JtRWxlbWVudFwiPjxsYWJlbCBmb3I9XCJkdWVEYXRlXCI+RHVlIERhdGU8L2xhYmVsPjxpbnB1dCB0eXBlPVwiZGF0ZVwiIG5hbWU9XCJkdWVEYXRlXCI+PC9kaXY+PGRpdiBjbGFzcz1cImZvcm1FbGVtZW50XCI+PGxhYmVsIGZvcj1cInRhc2tUaW1lXCI+VGltZTwvbGFiZWw+PGlucHV0IHR5cGU9XCJ0aW1lXCIgbmFtZT1cInRpbWVcIj48L2Rpdj48YnV0dG9uIGlkPVwic3VibWl0XCI+QWRkIFRhc2s8L2J1dHRvbj4nO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpbkNvbnRlbnRcIikuYXBwZW5kQ2hpbGQodGFza0Zvcm0pO1xuXG4gICAgLy9saXN0ZW4gZm9yIHRhc2sgZm9ybSBzdWJtaXRcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN1Ym1pdFwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgbmV3VGFzayk7XG5cblxuICAgIGNsYXNzIHRhc2tDbGFzcyB7XG4gICAgICAgIGNvbnN0cnVjdG9yKGlkLCB0aXRsZSwgY2F0YWdvcnksIGRhdGVEdWUsIHRpbWUpIHtcbiAgICAgICAgICAgIHRoaXMuaWQgPSBpZDtcbiAgICAgICAgICAgIHRoaXMuVGl0bGUgPSB0aXRsZTtcbiAgICAgICAgICAgIHRoaXMuQ2F0YWdvcnkgPSBjYXRhZ29yeTtcbiAgICAgICAgICAgIHRoaXMuRGF0ZUR1ZSA9IGRhdGVEdWU7XG4gICAgICAgICAgICB0aGlzLlRpbWUgPSB0aW1lO1xuICAgICAgICB9XG4gICAgfSBcblxuICAgIC8vZnVuY3Rpb24gdG8gcnVuIG9uIHRhc2tGb3JtIHN1Ym1pdFxuICAgIGZ1bmN0aW9uIG5ld1Rhc2sgKCkge1xuICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFtuYW1lPSd0YXNrVGl0bGUnXVwiKS52YWx1ZTtcbiAgICAgICAgY29uc3QgY2F0YWdvcnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwic2VsZWN0W25hbWU9J3Rhc2tDYXRhZ29yeSddXCIpLnZhbHVlO1xuICAgICAgICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImlucHV0W25hbWU9J2R1ZURhdGUnXVwiKS52YWx1ZTtcbiAgICAgICAgY29uc3QgdGltZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFtuYW1lPSd0aW1lJ11cIikudmFsdWU7XG4gICAgICAgIFxuICAgICAgICBpZiAodGl0bGUgIT09ICcnICYmIGR1ZURhdGUgIT09ICcnKSB7XG4gICAgICAgICAgICBjb25zdCBpZCA9IHRpdGxlICsgTWF0aC5yYW5kb20oKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGlkKVxuICAgICAgICAgICAgLy8gQ3JlYXRlIGEgbmV3IHRhc2sgb2JqZWN0XG4gICAgICAgICAgICBjb25zdCBuZXdBZGRpdGlvbiA9IG5ldyB0YXNrQ2xhc3MoaWQsIHRpdGxlLCBjYXRhZ29yeSwgZHVlRGF0ZSwgdGltZSk7XG5cbiAgICAgICAgICAgIC8vIGFkZCBuZXcgdGFzayB0byB0YXNrTGlzdCBhcnJheSBhbmQgc2V0IGluIGxvY2FsU3RvcmFnZVxuICAgICAgICAgICAgY29uc3QgdGFza0xpc3QgPSBKU09OLnBhcnNlKHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRhc2tMaXN0XCIpKTtcbiAgICAgICAgICAgIHRhc2tMaXN0LnB1c2gobmV3QWRkaXRpb24pO1xuICAgICAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidGFza0xpc3RcIiwgSlNPTi5zdHJpbmdpZnkodGFza0xpc3QpKTtcblxuICAgIFxuICAgICAgICB9XG5cblxuICAgIH1cbiAgICBcblxufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==