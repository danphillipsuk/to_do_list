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
    taskForm.innerHTML = '<h2>Create a new task</h2><div class="formElement"><label for="taskTitle">Task</label><input name ="taskTitle" type="text"></div><div class="formElement"><label for="taskCatagory">Catagory</label><select name="taskCatagory"><option value="Home">Home</option><option value="work">Work</option></select></div><div class="formElement"><label for="dueDate">Due Date</label><input type="date" name="dueDate"></div><div class="formElement"><label for="taskTime">Time</label><input type="time" name="time"></div><button id="submit">Add Task</button><button id="more">Add more detail</button>';
    document.getElementById("mainContent").appendChild(taskForm);

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
            const taskList = JSON.parse(window.localStorage.getItem("taskList"));
            taskList.push(newAddition);
            window.localStorage.setItem("taskList", JSON.stringify(taskList));

    
        }


    }
    

};

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7VUFBQTtVQUNBOzs7OztXQ0RBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOQTs7QUFFZTs7QUFFZjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvX2RvX2xpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvX2RvX2xpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b19kb19saXN0Ly4vc3JjL2NyZWF0ZVRhc2suanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBpbXBvcnQgdG9kYXlzRXZlbnRzIGZyb20gXCIuL3RvZGF5c0V2ZW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVUYXNrKCkge1xuXG4gICAgLy8gY3JlYXRlIG5ldyB0YXNrIGZvcm0gXG4gICAgY29uc3QgdGFza0Zvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0YXNrRm9ybS5jbGFzc0xpc3QuYWRkKCd0YXNrRm9ybScpO1xuICAgIHRhc2tGb3JtLmlubmVySFRNTCA9ICc8aDI+Q3JlYXRlIGEgbmV3IHRhc2s8L2gyPjxkaXYgY2xhc3M9XCJmb3JtRWxlbWVudFwiPjxsYWJlbCBmb3I9XCJ0YXNrVGl0bGVcIj5UYXNrPC9sYWJlbD48aW5wdXQgbmFtZSA9XCJ0YXNrVGl0bGVcIiB0eXBlPVwidGV4dFwiPjwvZGl2PjxkaXYgY2xhc3M9XCJmb3JtRWxlbWVudFwiPjxsYWJlbCBmb3I9XCJ0YXNrQ2F0YWdvcnlcIj5DYXRhZ29yeTwvbGFiZWw+PHNlbGVjdCBuYW1lPVwidGFza0NhdGFnb3J5XCI+PG9wdGlvbiB2YWx1ZT1cIkhvbWVcIj5Ib21lPC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIndvcmtcIj5Xb3JrPC9vcHRpb24+PC9zZWxlY3Q+PC9kaXY+PGRpdiBjbGFzcz1cImZvcm1FbGVtZW50XCI+PGxhYmVsIGZvcj1cImR1ZURhdGVcIj5EdWUgRGF0ZTwvbGFiZWw+PGlucHV0IHR5cGU9XCJkYXRlXCIgbmFtZT1cImR1ZURhdGVcIj48L2Rpdj48ZGl2IGNsYXNzPVwiZm9ybUVsZW1lbnRcIj48bGFiZWwgZm9yPVwidGFza1RpbWVcIj5UaW1lPC9sYWJlbD48aW5wdXQgdHlwZT1cInRpbWVcIiBuYW1lPVwidGltZVwiPjwvZGl2PjxidXR0b24gaWQ9XCJzdWJtaXRcIj5BZGQgVGFzazwvYnV0dG9uPjxidXR0b24gaWQ9XCJtb3JlXCI+QWRkIG1vcmUgZGV0YWlsPC9idXR0b24+JztcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5Db250ZW50XCIpLmFwcGVuZENoaWxkKHRhc2tGb3JtKTtcblxuICAgIC8vbGlzdGVuIGZvciB0YXNrIGZvcm0gc3VibWl0XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdWJtaXRcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG5ld1Rhc2spO1xuXG5cbiAgICBjbGFzcyB0YXNrQ2xhc3Mge1xuICAgICAgICBjb25zdHJ1Y3Rvcih0aXRsZSwgY2F0YWdvcnksIGRhdGVEdWUsIHRpbWUpIHtcbiAgICAgICAgICAgIHRoaXMuVGl0bGUgPSB0aXRsZTtcbiAgICAgICAgICAgIHRoaXMuQ2F0YWdvcnkgPSBjYXRhZ29yeTtcbiAgICAgICAgICAgIHRoaXMuRGF0ZUR1ZSA9IGRhdGVEdWU7XG4gICAgICAgICAgICB0aGlzLlRpbWUgPSB0aW1lO1xuICAgICAgICB9XG4gICAgfSBcblxuICAgIC8vZnVuY3Rpb24gdG8gcnVuIG9uIHRhc2tGb3JtIHN1Ym1pdFxuICAgIGZ1bmN0aW9uIG5ld1Rhc2sgKCkge1xuICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFtuYW1lPSd0YXNrVGl0bGUnXVwiKS52YWx1ZTtcbiAgICAgICAgY29uc3QgY2F0YWdvcnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwic2VsZWN0W25hbWU9J3Rhc2tDYXRhZ29yeSddXCIpLnZhbHVlO1xuICAgICAgICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImlucHV0W25hbWU9J2R1ZURhdGUnXVwiKS52YWx1ZTtcbiAgICAgICAgY29uc3QgdGltZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFtuYW1lPSd0aW1lJ11cIikudmFsdWU7XG4gICAgICAgIFxuICAgICAgICBpZiAodGl0bGUgIT09ICcnICYmIGR1ZURhdGUgIT09ICcnKSB7XG4gICAgICAgICAgICAvLyBDcmVhdGUgYSBuZXcgdGFzayBvYmplY3RcbiAgICAgICAgICAgIGNvbnN0IG5ld0FkZGl0aW9uID0gbmV3IHRhc2tDbGFzcyh0aXRsZSwgY2F0YWdvcnksIGR1ZURhdGUsIHRpbWUpO1xuXG4gICAgICAgICAgICAvLyBhZGQgbmV3IHRhc2sgdG8gdGFza0xpc3QgYXJyYXkgYW5kIHNldCBpbiBsb2NhbFN0b3JhZ2VcbiAgICAgICAgICAgIGNvbnN0IHRhc2tMaXN0ID0gSlNPTi5wYXJzZSh3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0YXNrTGlzdFwiKSk7XG4gICAgICAgICAgICB0YXNrTGlzdC5wdXNoKG5ld0FkZGl0aW9uKTtcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRhc2tMaXN0XCIsIEpTT04uc3RyaW5naWZ5KHRhc2tMaXN0KSk7XG5cbiAgICBcbiAgICAgICAgfVxuXG5cbiAgICB9XG4gICAgXG5cbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=