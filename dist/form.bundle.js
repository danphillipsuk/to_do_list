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
function createTask() {

    // create new task form 
    const taskForm = document.createElement('div');
    taskForm.classList.add('taskForm');
    taskForm.innerHTML = '<h2>Create a new task</h2><div class="formElement"><label for="taskTitle">Task</label><input name ="taskTitle" type="text"></div><div class="formElement"><label for="taskCatagory">Catagory</label><select name="taskCatagory"><option value="Home">Home</option><option value="work">Work</option></select></div><div class="formElement"><label for="dueDate">Due Date</label><input type="date" name="dueDate"></div><div class="formElement"><label for="taskTime">Time</label><input type="time" name="time"></div><button id="submit">Add Task</button><button id="more">Add more detail</button>';
    document.getElementById("content").appendChild(taskForm);

    //listen for task form submit
    document.getElementById("submit").addEventListener("click", newTask);


    class taskClass {
        constructor(title, catagory, dateDue, time) {
            this.Title = title;
            this.Catagory = catagory;
            this.DateDue = dateDue;
            this.Time = time;
        }
    } 

    const taskList = JSON.parse(localStorage.getItem("taskList"));

    if(!taskList) {
        const taskListcreate = [];
        localStorage.setItem("taskList", JSON.stringify(taskListcreate));
    } 

    //function to run on taskForm submit
    function newTask () {
        const title = document.querySelector("input[name='taskTitle']").value;
        const catagory = document.querySelector("select[name='taskCatagory']").value;
        const dueDate = document.querySelector("input[name='dueDate']").value;
        const time = document.querySelector("input[name='time']").value;
        
        if (title !== '' && dueDate !== '') {
            // Create a new task object
            const newAddition = new taskClass(title, catagory, dueDate, time);

            // add new task to taskList array and set in localStorage
            taskList.push(newAddition);
            localStorage.setItem("taskList", JSON.stringify(taskList));
        }

        return;
    }

    

};

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7VUFBQTtVQUNBOzs7OztXQ0RBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOZTs7QUFFZjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvX2RvX2xpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvX2RvX2xpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b19kb19saXN0Ly4vc3JjL2NyZWF0ZVRhc2suanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVUYXNrKCkge1xuXG4gICAgLy8gY3JlYXRlIG5ldyB0YXNrIGZvcm0gXG4gICAgY29uc3QgdGFza0Zvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0YXNrRm9ybS5jbGFzc0xpc3QuYWRkKCd0YXNrRm9ybScpO1xuICAgIHRhc2tGb3JtLmlubmVySFRNTCA9ICc8aDI+Q3JlYXRlIGEgbmV3IHRhc2s8L2gyPjxkaXYgY2xhc3M9XCJmb3JtRWxlbWVudFwiPjxsYWJlbCBmb3I9XCJ0YXNrVGl0bGVcIj5UYXNrPC9sYWJlbD48aW5wdXQgbmFtZSA9XCJ0YXNrVGl0bGVcIiB0eXBlPVwidGV4dFwiPjwvZGl2PjxkaXYgY2xhc3M9XCJmb3JtRWxlbWVudFwiPjxsYWJlbCBmb3I9XCJ0YXNrQ2F0YWdvcnlcIj5DYXRhZ29yeTwvbGFiZWw+PHNlbGVjdCBuYW1lPVwidGFza0NhdGFnb3J5XCI+PG9wdGlvbiB2YWx1ZT1cIkhvbWVcIj5Ib21lPC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIndvcmtcIj5Xb3JrPC9vcHRpb24+PC9zZWxlY3Q+PC9kaXY+PGRpdiBjbGFzcz1cImZvcm1FbGVtZW50XCI+PGxhYmVsIGZvcj1cImR1ZURhdGVcIj5EdWUgRGF0ZTwvbGFiZWw+PGlucHV0IHR5cGU9XCJkYXRlXCIgbmFtZT1cImR1ZURhdGVcIj48L2Rpdj48ZGl2IGNsYXNzPVwiZm9ybUVsZW1lbnRcIj48bGFiZWwgZm9yPVwidGFza1RpbWVcIj5UaW1lPC9sYWJlbD48aW5wdXQgdHlwZT1cInRpbWVcIiBuYW1lPVwidGltZVwiPjwvZGl2PjxidXR0b24gaWQ9XCJzdWJtaXRcIj5BZGQgVGFzazwvYnV0dG9uPjxidXR0b24gaWQ9XCJtb3JlXCI+QWRkIG1vcmUgZGV0YWlsPC9idXR0b24+JztcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIikuYXBwZW5kQ2hpbGQodGFza0Zvcm0pO1xuXG4gICAgLy9saXN0ZW4gZm9yIHRhc2sgZm9ybSBzdWJtaXRcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN1Ym1pdFwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgbmV3VGFzayk7XG5cblxuICAgIGNsYXNzIHRhc2tDbGFzcyB7XG4gICAgICAgIGNvbnN0cnVjdG9yKHRpdGxlLCBjYXRhZ29yeSwgZGF0ZUR1ZSwgdGltZSkge1xuICAgICAgICAgICAgdGhpcy5UaXRsZSA9IHRpdGxlO1xuICAgICAgICAgICAgdGhpcy5DYXRhZ29yeSA9IGNhdGFnb3J5O1xuICAgICAgICAgICAgdGhpcy5EYXRlRHVlID0gZGF0ZUR1ZTtcbiAgICAgICAgICAgIHRoaXMuVGltZSA9IHRpbWU7XG4gICAgICAgIH1cbiAgICB9IFxuXG4gICAgY29uc3QgdGFza0xpc3QgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidGFza0xpc3RcIikpO1xuXG4gICAgaWYoIXRhc2tMaXN0KSB7XG4gICAgICAgIGNvbnN0IHRhc2tMaXN0Y3JlYXRlID0gW107XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidGFza0xpc3RcIiwgSlNPTi5zdHJpbmdpZnkodGFza0xpc3RjcmVhdGUpKTtcbiAgICB9IFxuXG4gICAgLy9mdW5jdGlvbiB0byBydW4gb24gdGFza0Zvcm0gc3VibWl0XG4gICAgZnVuY3Rpb24gbmV3VGFzayAoKSB7XG4gICAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImlucHV0W25hbWU9J3Rhc2tUaXRsZSddXCIpLnZhbHVlO1xuICAgICAgICBjb25zdCBjYXRhZ29yeSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJzZWxlY3RbbmFtZT0ndGFza0NhdGFnb3J5J11cIikudmFsdWU7XG4gICAgICAgIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaW5wdXRbbmFtZT0nZHVlRGF0ZSddXCIpLnZhbHVlO1xuICAgICAgICBjb25zdCB0aW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImlucHV0W25hbWU9J3RpbWUnXVwiKS52YWx1ZTtcbiAgICAgICAgXG4gICAgICAgIGlmICh0aXRsZSAhPT0gJycgJiYgZHVlRGF0ZSAhPT0gJycpIHtcbiAgICAgICAgICAgIC8vIENyZWF0ZSBhIG5ldyB0YXNrIG9iamVjdFxuICAgICAgICAgICAgY29uc3QgbmV3QWRkaXRpb24gPSBuZXcgdGFza0NsYXNzKHRpdGxlLCBjYXRhZ29yeSwgZHVlRGF0ZSwgdGltZSk7XG5cbiAgICAgICAgICAgIC8vIGFkZCBuZXcgdGFzayB0byB0YXNrTGlzdCBhcnJheSBhbmQgc2V0IGluIGxvY2FsU3RvcmFnZVxuICAgICAgICAgICAgdGFza0xpc3QucHVzaChuZXdBZGRpdGlvbik7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRhc2tMaXN0XCIsIEpTT04uc3RyaW5naWZ5KHRhc2tMaXN0KSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgXG5cbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=