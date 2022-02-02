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
/*!**********************!*\
  !*** ./src/print.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ printMe)
/* harmony export */ });
function printMe() {

    function deleteButton(num) {
        const deleteTask = document.createElement('button');
        deleteTask.value = num;
        deleteTask.classList.add('deleteTask');
        deleteTask.innerText = "Delete";
        document.querySelector('.taskItem').append(deleteTask);
        return;
    }

    // let clearTaskList = [];
    // localStorage.setItem("taskList", JSON.stringify(clearTaskList));

    // retrieve taskList array from localStorage
    const taskList = JSON.parse(localStorage.getItem("taskList"));

    // create array of tasks due today 
    const today = taskList.filter(task => task.DateDue === new Date().toISOString().slice(0,10));

    //create array of tasks due in future
    const future = taskList.filter(task => task.DateDue !== new Date().toISOString().slice(0,10));

    // Display Events/Tasks Due in the future
    function displayList() {

        const todoList = document.createElement('div');
        todoList.classList.add('todoList');
        document.getElementById("content").appendChild(todoList);

        
            
        future.forEach((item, index) => {

            const taskItem = document.createElement('ul');
            taskItem.classList.add('taskItem');
            document.querySelector('.todoList').prepend(taskItem);

            const taskIndex = document.createElement('li');
            taskIndex.innerText = `Object Index: ${index}`;
            document.querySelector('.taskItem').appendChild(taskIndex);

            for (let key in item) {
        
                const taskElement = document.createElement('li');
                taskElement.innerText = `${[key]} ${item[key]}`;
                document.querySelector('.taskItem').appendChild(taskElement);

            }

            // create modify task button for each task
            const modifyTask = document.createElement('button');
            modifyTask.classList.add('modifyTask');
            modifyTask.innerText = "Modify";
            document.querySelector('.taskItem').append(modifyTask);
            
            // create delete button for each task
            // const deleteTask = document.createElement('button');
            // deleteTask.value = `${index}`;
            // deleteTask.classList.add('deleteTask');
            // deleteTask.innerText = "Delete";
            // document.querySelector('.taskItem').append(deleteTask);
            deleteButton(`${index}`);
        
        });

        const todoListHeadline = document.createElement('h3');
        todoListHeadline.innerText = "Tasks due in future";
        document.querySelector('.todoList').prepend(todoListHeadline);

    }



    // Display Events/Tasks due today
    function todaysList() {

        const todaysEvents = document.createElement('div');
        todaysEvents.classList.add('todaysEvents');
        document.getElementById("content").appendChild(todaysEvents);
            
        today.forEach((item, index) => {

            const taskItemToday = document.createElement('ul');
            taskItemToday.classList.add('taskItemToday');
            taskItemToday.classList.add('today');
            document.querySelector('.todaysEvents').prepend(taskItemToday);

            for (let key in item) {
        
                const taskElement = document.createElement('li');
                taskElement.innerText = `${[key]} ${item[key]}`;
                document.querySelector('.taskItemToday').appendChild(taskElement);

            }

            // create modify task button for each task
            const modifyTask = document.createElement('button');
            modifyTask.classList.add('modifyTask');
            modifyTask.innerText = "Modify";
            document.querySelector('.taskItemToday').append(modifyTask);
            
            // create delete button for each task
            const deleteTask = document.createElement('button');
            deleteTask.value = `${index}`;
            deleteTask.classList.add('deleteTask');
            deleteTask.innerText = "Delete";
            document.querySelector('.taskItemToday').append(deleteTask);
        //    deleteButton(`${index}`);
        
        });

        const futureHeadline = document.createElement('h3');
        futureHeadline.innerText = "Today's Tasks";
        document.querySelector('.todaysEvents').prepend(futureHeadline);

    }

    
    todaysList();
    displayList();


        // Delete book object from array
        document.querySelectorAll(".deleteTask").forEach(function(item, value) {
            item.addEventListener("click", () => {
                console.log(value)
                taskList.splice(value, 1);
                localStorage.setItem("taskList", JSON.stringify(taskList));
            });
        });
    

    
}


/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJpbnQuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7O1VBQUE7VUFDQTs7Ozs7V0NEQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTmU7O0FBRWY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxtREFBbUQsTUFBTTtBQUN6RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsT0FBTyxFQUFFLFVBQVU7QUFDOUQ7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxNQUFNO0FBQzNDO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixNQUFNO0FBQ2xDO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7O0FBRUE7Ozs7QUFJQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLE9BQU8sRUFBRSxVQUFVO0FBQzlEOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0MsTUFBTTtBQUN4QztBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsTUFBTTtBQUNwQztBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDs7QUFFQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b19kb19saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b19kb19saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvX2RvX2xpc3QvLi9zcmMvcHJpbnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwcmludE1lKCkge1xuXG4gICAgZnVuY3Rpb24gZGVsZXRlQnV0dG9uKG51bSkge1xuICAgICAgICBjb25zdCBkZWxldGVUYXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGRlbGV0ZVRhc2sudmFsdWUgPSBudW07XG4gICAgICAgIGRlbGV0ZVRhc2suY2xhc3NMaXN0LmFkZCgnZGVsZXRlVGFzaycpO1xuICAgICAgICBkZWxldGVUYXNrLmlubmVyVGV4dCA9IFwiRGVsZXRlXCI7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrSXRlbScpLmFwcGVuZChkZWxldGVUYXNrKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIGxldCBjbGVhclRhc2tMaXN0ID0gW107XG4gICAgLy8gbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0YXNrTGlzdFwiLCBKU09OLnN0cmluZ2lmeShjbGVhclRhc2tMaXN0KSk7XG5cbiAgICAvLyByZXRyaWV2ZSB0YXNrTGlzdCBhcnJheSBmcm9tIGxvY2FsU3RvcmFnZVxuICAgIGNvbnN0IHRhc2tMaXN0ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRhc2tMaXN0XCIpKTtcblxuICAgIC8vIGNyZWF0ZSBhcnJheSBvZiB0YXNrcyBkdWUgdG9kYXkgXG4gICAgY29uc3QgdG9kYXkgPSB0YXNrTGlzdC5maWx0ZXIodGFzayA9PiB0YXNrLkRhdGVEdWUgPT09IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKS5zbGljZSgwLDEwKSk7XG5cbiAgICAvL2NyZWF0ZSBhcnJheSBvZiB0YXNrcyBkdWUgaW4gZnV0dXJlXG4gICAgY29uc3QgZnV0dXJlID0gdGFza0xpc3QuZmlsdGVyKHRhc2sgPT4gdGFzay5EYXRlRHVlICE9PSBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCkuc2xpY2UoMCwxMCkpO1xuXG4gICAgLy8gRGlzcGxheSBFdmVudHMvVGFza3MgRHVlIGluIHRoZSBmdXR1cmVcbiAgICBmdW5jdGlvbiBkaXNwbGF5TGlzdCgpIHtcblxuICAgICAgICBjb25zdCB0b2RvTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0b2RvTGlzdC5jbGFzc0xpc3QuYWRkKCd0b2RvTGlzdCcpO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIikuYXBwZW5kQ2hpbGQodG9kb0xpc3QpO1xuXG4gICAgICAgIFxuICAgICAgICAgICAgXG4gICAgICAgIGZ1dHVyZS5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xuXG4gICAgICAgICAgICBjb25zdCB0YXNrSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgICAgICAgICB0YXNrSXRlbS5jbGFzc0xpc3QuYWRkKCd0YXNrSXRlbScpO1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG9MaXN0JykucHJlcGVuZCh0YXNrSXRlbSk7XG5cbiAgICAgICAgICAgIGNvbnN0IHRhc2tJbmRleCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgICAgICB0YXNrSW5kZXguaW5uZXJUZXh0ID0gYE9iamVjdCBJbmRleDogJHtpbmRleH1gO1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tJdGVtJykuYXBwZW5kQ2hpbGQodGFza0luZGV4KTtcblxuICAgICAgICAgICAgZm9yIChsZXQga2V5IGluIGl0ZW0pIHtcbiAgICAgICAgXG4gICAgICAgICAgICAgICAgY29uc3QgdGFza0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICAgICAgICAgIHRhc2tFbGVtZW50LmlubmVyVGV4dCA9IGAke1trZXldfSAke2l0ZW1ba2V5XX1gO1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrSXRlbScpLmFwcGVuZENoaWxkKHRhc2tFbGVtZW50KTtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBjcmVhdGUgbW9kaWZ5IHRhc2sgYnV0dG9uIGZvciBlYWNoIHRhc2tcbiAgICAgICAgICAgIGNvbnN0IG1vZGlmeVRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgIG1vZGlmeVRhc2suY2xhc3NMaXN0LmFkZCgnbW9kaWZ5VGFzaycpO1xuICAgICAgICAgICAgbW9kaWZ5VGFzay5pbm5lclRleHQgPSBcIk1vZGlmeVwiO1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tJdGVtJykuYXBwZW5kKG1vZGlmeVRhc2spO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyBjcmVhdGUgZGVsZXRlIGJ1dHRvbiBmb3IgZWFjaCB0YXNrXG4gICAgICAgICAgICAvLyBjb25zdCBkZWxldGVUYXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICAvLyBkZWxldGVUYXNrLnZhbHVlID0gYCR7aW5kZXh9YDtcbiAgICAgICAgICAgIC8vIGRlbGV0ZVRhc2suY2xhc3NMaXN0LmFkZCgnZGVsZXRlVGFzaycpO1xuICAgICAgICAgICAgLy8gZGVsZXRlVGFzay5pbm5lclRleHQgPSBcIkRlbGV0ZVwiO1xuICAgICAgICAgICAgLy8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tJdGVtJykuYXBwZW5kKGRlbGV0ZVRhc2spO1xuICAgICAgICAgICAgZGVsZXRlQnV0dG9uKGAke2luZGV4fWApO1xuICAgICAgICBcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgdG9kb0xpc3RIZWFkbGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgICAgIHRvZG9MaXN0SGVhZGxpbmUuaW5uZXJUZXh0ID0gXCJUYXNrcyBkdWUgaW4gZnV0dXJlXCI7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvTGlzdCcpLnByZXBlbmQodG9kb0xpc3RIZWFkbGluZSk7XG5cbiAgICB9XG5cblxuXG4gICAgLy8gRGlzcGxheSBFdmVudHMvVGFza3MgZHVlIHRvZGF5XG4gICAgZnVuY3Rpb24gdG9kYXlzTGlzdCgpIHtcblxuICAgICAgICBjb25zdCB0b2RheXNFdmVudHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdG9kYXlzRXZlbnRzLmNsYXNzTGlzdC5hZGQoJ3RvZGF5c0V2ZW50cycpO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIikuYXBwZW5kQ2hpbGQodG9kYXlzRXZlbnRzKTtcbiAgICAgICAgICAgIFxuICAgICAgICB0b2RheS5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xuXG4gICAgICAgICAgICBjb25zdCB0YXNrSXRlbVRvZGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICAgICAgICAgIHRhc2tJdGVtVG9kYXkuY2xhc3NMaXN0LmFkZCgndGFza0l0ZW1Ub2RheScpO1xuICAgICAgICAgICAgdGFza0l0ZW1Ub2RheS5jbGFzc0xpc3QuYWRkKCd0b2RheScpO1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZGF5c0V2ZW50cycpLnByZXBlbmQodGFza0l0ZW1Ub2RheSk7XG5cbiAgICAgICAgICAgIGZvciAobGV0IGtleSBpbiBpdGVtKSB7XG4gICAgICAgIFxuICAgICAgICAgICAgICAgIGNvbnN0IHRhc2tFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgICAgICAgICB0YXNrRWxlbWVudC5pbm5lclRleHQgPSBgJHtba2V5XX0gJHtpdGVtW2tleV19YDtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza0l0ZW1Ub2RheScpLmFwcGVuZENoaWxkKHRhc2tFbGVtZW50KTtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBjcmVhdGUgbW9kaWZ5IHRhc2sgYnV0dG9uIGZvciBlYWNoIHRhc2tcbiAgICAgICAgICAgIGNvbnN0IG1vZGlmeVRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgIG1vZGlmeVRhc2suY2xhc3NMaXN0LmFkZCgnbW9kaWZ5VGFzaycpO1xuICAgICAgICAgICAgbW9kaWZ5VGFzay5pbm5lclRleHQgPSBcIk1vZGlmeVwiO1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tJdGVtVG9kYXknKS5hcHBlbmQobW9kaWZ5VGFzayk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIGNyZWF0ZSBkZWxldGUgYnV0dG9uIGZvciBlYWNoIHRhc2tcbiAgICAgICAgICAgIGNvbnN0IGRlbGV0ZVRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgIGRlbGV0ZVRhc2sudmFsdWUgPSBgJHtpbmRleH1gO1xuICAgICAgICAgICAgZGVsZXRlVGFzay5jbGFzc0xpc3QuYWRkKCdkZWxldGVUYXNrJyk7XG4gICAgICAgICAgICBkZWxldGVUYXNrLmlubmVyVGV4dCA9IFwiRGVsZXRlXCI7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza0l0ZW1Ub2RheScpLmFwcGVuZChkZWxldGVUYXNrKTtcbiAgICAgICAgLy8gICAgZGVsZXRlQnV0dG9uKGAke2luZGV4fWApO1xuICAgICAgICBcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgZnV0dXJlSGVhZGxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgICAgICBmdXR1cmVIZWFkbGluZS5pbm5lclRleHQgPSBcIlRvZGF5J3MgVGFza3NcIjtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZGF5c0V2ZW50cycpLnByZXBlbmQoZnV0dXJlSGVhZGxpbmUpO1xuXG4gICAgfVxuXG4gICAgXG4gICAgdG9kYXlzTGlzdCgpO1xuICAgIGRpc3BsYXlMaXN0KCk7XG5cblxuICAgICAgICAvLyBEZWxldGUgYm9vayBvYmplY3QgZnJvbSBhcnJheVxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmRlbGV0ZVRhc2tcIikuZm9yRWFjaChmdW5jdGlvbihpdGVtLCB2YWx1ZSkge1xuICAgICAgICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHZhbHVlKVxuICAgICAgICAgICAgICAgIHRhc2tMaXN0LnNwbGljZSh2YWx1ZSwgMSk7XG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0YXNrTGlzdFwiLCBKU09OLnN0cmluZ2lmeSh0YXNrTGlzdCkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIFxuXG4gICAgXG59XG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==