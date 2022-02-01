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
    console.log("I'm createTask.js")

    // create new task form 
    const taskForm = document.createElement('div');
    taskForm.classList.add('taskForm');
    taskForm.innerHTML = '<label for="taskTitle">Task</label><input name ="taskTitle" type="text"><label for="taskCatagory">Catagory</label><select name="taskCatagory"><option value="Home">Home</option><option value="work">Work</option></select><button id="submit">Add Task</button>';
    document.getElementById("content").appendChild(taskForm);

    //listen for task form submit
    document.getElementById("submit").addEventListener("click", newTask);


    class taskClass {
        constructor(title, catagory) {
            this.title = title;
            this.catagory = catagory;
        }
    } 

    const taskList = JSON.parse(localStorage.getItem("taskList"));

    if(!taskList) {
        localStorage.setItem("taskList", JSON.stringify(taskList));
    } 

    //function to run on taskForm submit
    function newTask () {
        const title = document.querySelector("input[name='taskTitle']").value;
        const catagory = document.querySelector("select[name='taskCatagory']").value;
    
        // Create a new task object
        const newAddition = new taskClass(title, catagory);

        // add new task to taskList array and set in localStorage
        taskList.push(newAddition);
        localStorage.setItem("taskList", JSON.stringify(taskList));
    }

};

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7VUFBQTtVQUNBOzs7OztXQ0RBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOZTtBQUNmOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvX2RvX2xpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvX2RvX2xpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b19kb19saXN0Ly4vc3JjL2NyZWF0ZVRhc2suanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVUYXNrKCkge1xuICAgIGNvbnNvbGUubG9nKFwiSSdtIGNyZWF0ZVRhc2suanNcIilcblxuICAgIC8vIGNyZWF0ZSBuZXcgdGFzayBmb3JtIFxuICAgIGNvbnN0IHRhc2tGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGFza0Zvcm0uY2xhc3NMaXN0LmFkZCgndGFza0Zvcm0nKTtcbiAgICB0YXNrRm9ybS5pbm5lckhUTUwgPSAnPGxhYmVsIGZvcj1cInRhc2tUaXRsZVwiPlRhc2s8L2xhYmVsPjxpbnB1dCBuYW1lID1cInRhc2tUaXRsZVwiIHR5cGU9XCJ0ZXh0XCI+PGxhYmVsIGZvcj1cInRhc2tDYXRhZ29yeVwiPkNhdGFnb3J5PC9sYWJlbD48c2VsZWN0IG5hbWU9XCJ0YXNrQ2F0YWdvcnlcIj48b3B0aW9uIHZhbHVlPVwiSG9tZVwiPkhvbWU8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwid29ya1wiPldvcms8L29wdGlvbj48L3NlbGVjdD48YnV0dG9uIGlkPVwic3VibWl0XCI+QWRkIFRhc2s8L2J1dHRvbj4nO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKS5hcHBlbmRDaGlsZCh0YXNrRm9ybSk7XG5cbiAgICAvL2xpc3RlbiBmb3IgdGFzayBmb3JtIHN1Ym1pdFxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3VibWl0XCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBuZXdUYXNrKTtcblxuXG4gICAgY2xhc3MgdGFza0NsYXNzIHtcbiAgICAgICAgY29uc3RydWN0b3IodGl0bGUsIGNhdGFnb3J5KSB7XG4gICAgICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgICAgICAgICB0aGlzLmNhdGFnb3J5ID0gY2F0YWdvcnk7XG4gICAgICAgIH1cbiAgICB9IFxuXG4gICAgY29uc3QgdGFza0xpc3QgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidGFza0xpc3RcIikpO1xuXG4gICAgaWYoIXRhc2tMaXN0KSB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidGFza0xpc3RcIiwgSlNPTi5zdHJpbmdpZnkodGFza0xpc3QpKTtcbiAgICB9IFxuXG4gICAgLy9mdW5jdGlvbiB0byBydW4gb24gdGFza0Zvcm0gc3VibWl0XG4gICAgZnVuY3Rpb24gbmV3VGFzayAoKSB7XG4gICAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImlucHV0W25hbWU9J3Rhc2tUaXRsZSddXCIpLnZhbHVlO1xuICAgICAgICBjb25zdCBjYXRhZ29yeSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJzZWxlY3RbbmFtZT0ndGFza0NhdGFnb3J5J11cIikudmFsdWU7XG4gICAgXG4gICAgICAgIC8vIENyZWF0ZSBhIG5ldyB0YXNrIG9iamVjdFxuICAgICAgICBjb25zdCBuZXdBZGRpdGlvbiA9IG5ldyB0YXNrQ2xhc3ModGl0bGUsIGNhdGFnb3J5KTtcblxuICAgICAgICAvLyBhZGQgbmV3IHRhc2sgdG8gdGFza0xpc3QgYXJyYXkgYW5kIHNldCBpbiBsb2NhbFN0b3JhZ2VcbiAgICAgICAgdGFza0xpc3QucHVzaChuZXdBZGRpdGlvbik7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidGFza0xpc3RcIiwgSlNPTi5zdHJpbmdpZnkodGFza0xpc3QpKTtcbiAgICB9XG5cbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=