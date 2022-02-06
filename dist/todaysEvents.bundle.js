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
/*!*****************************!*\
  !*** ./src/todaysEvents.js ***!
  \*****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ todaysEvents)
/* harmony export */ });
function todaysEvents(test) {

    // retrieve taskList array from localStorage
    let taskList= JSON.parse(localStorage.getItem('taskList'));

    let displayTasks;
    let pageTitle;
    if (test === 'seven') {
        displayTasks = taskList.filter(task => task.DateDue > new Date().toISOString().slice(0,10));
        const currentTab = document.querySelector('.sevenDayTab');
        currentTab.style.pointerEvents = "none";
        currentTab.classList.add("active");  

        const todayTab = document.querySelector('.todayTab');
        todayTab.style.pointerEvents = "auto";
        todayTab.classList.remove("active");

        pageTitle = "Next Seven Days";
        

    } else {
        if (test === 'today')
        displayTasks = taskList.filter(task => task.DateDue === new Date().toISOString().slice(0,10));
        const currentTab = document.querySelector('.todayTab');
        currentTab.style.pointerEvents = "none";
        currentTab.classList.add("active");  

        const todayTab = document.querySelector('.sevenDayTab');
        todayTab.style.pointerEvents = "auto";
        todayTab.classList.remove("active");

        pageTitle = "Today's Tasks";

    }


    // Display Events/Tasks due today
    function display() {

        const todaysEvents = document.createElement('div');
        todaysEvents.id ='todaysEvents';
        document.getElementById("mainContent").append(todaysEvents);
    
        displayTasks.forEach((item, index) => {

            const taskItem = document.createElement('ul');
            taskItem.classList.add('taskItem');
            document.getElementById('todaysEvents').prepend(taskItem);


            const taskTitle = document.createElement('li');
            taskTitle.classList.add('taskTitle');
            taskTitle.innerText = `${item.Title}`;

            const taskTitleCatagory = document.createElement('span');
            taskTitleCatagory.innerText = `${item.Catagory}`;
            taskTitle.prepend(taskTitleCatagory);

            document.querySelector('.taskItem').appendChild(taskTitle);


            // create modify task button for each task
            const modifyTask = document.createElement('button');
            modifyTask.value = `${item['id']}`;
            modifyTask.classList.add('modifyTask');
            modifyTask.innerText = "EDIT";
            document.querySelector('.taskItem').append(modifyTask);
            
            // create delete button for each task
            const deleteTask = document.createElement('button');
            deleteTask.value = `${item['id']}`;
            deleteTask.classList.add('deleteTask');
            deleteTask.innerText = "X";
            document.querySelector('.taskItem').append(deleteTask);
        
        });

        const futureHeadline = document.createElement('h3');
        futureHeadline.innerText = pageTitle;
        document.getElementById('todaysEvents').prepend(futureHeadline);

    };

    display();


    // Delete task from taskList array
    document.querySelectorAll(".deleteTask").forEach(function(item) {

        item.addEventListener("click", (item) => {
            console.log(item)
    
            const rmv = item.value;

            const fuck = taskList.findIndex((obj) => {
                if(obj.id == rmv) {
                    return true
                }
                return false;
            })

            taskList.splice(fuck, 1);
            localStorage.setItem("taskList", JSON.stringify(taskList));
            const refresh = document.getElementById("mainContent");
            refresh.removeChild(refresh.childNodes[2]);
            display();
            
        })
        

    })
    
    
}


/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9kYXlzRXZlbnRzLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOztVQUFBO1VBQ0E7Ozs7O1dDREE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ05lOztBQUVmO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0EscUNBQXFDLFdBQVc7O0FBRWhEO0FBQ0EsNkNBQTZDLGNBQWM7QUFDM0Q7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQSxrQ0FBa0MsV0FBVztBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0MsV0FBVztBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBOztBQUVBOztBQUVBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b19kb19saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b19kb19saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvX2RvX2xpc3QvLi9zcmMvdG9kYXlzRXZlbnRzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9kYXlzRXZlbnRzKHRlc3QpIHtcblxuICAgIC8vIHJldHJpZXZlIHRhc2tMaXN0IGFycmF5IGZyb20gbG9jYWxTdG9yYWdlXG4gICAgbGV0IHRhc2tMaXN0PSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0YXNrTGlzdCcpKTtcblxuICAgIGxldCBkaXNwbGF5VGFza3M7XG4gICAgbGV0IHBhZ2VUaXRsZTtcbiAgICBpZiAodGVzdCA9PT0gJ3NldmVuJykge1xuICAgICAgICBkaXNwbGF5VGFza3MgPSB0YXNrTGlzdC5maWx0ZXIodGFzayA9PiB0YXNrLkRhdGVEdWUgPiBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCkuc2xpY2UoMCwxMCkpO1xuICAgICAgICBjb25zdCBjdXJyZW50VGFiID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNldmVuRGF5VGFiJyk7XG4gICAgICAgIGN1cnJlbnRUYWIuc3R5bGUucG9pbnRlckV2ZW50cyA9IFwibm9uZVwiO1xuICAgICAgICBjdXJyZW50VGFiLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7ICBcblxuICAgICAgICBjb25zdCB0b2RheVRhYiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RheVRhYicpO1xuICAgICAgICB0b2RheVRhYi5zdHlsZS5wb2ludGVyRXZlbnRzID0gXCJhdXRvXCI7XG4gICAgICAgIHRvZGF5VGFiLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG5cbiAgICAgICAgcGFnZVRpdGxlID0gXCJOZXh0IFNldmVuIERheXNcIjtcbiAgICAgICAgXG5cbiAgICB9IGVsc2Uge1xuICAgICAgICBpZiAodGVzdCA9PT0gJ3RvZGF5JylcbiAgICAgICAgZGlzcGxheVRhc2tzID0gdGFza0xpc3QuZmlsdGVyKHRhc2sgPT4gdGFzay5EYXRlRHVlID09PSBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCkuc2xpY2UoMCwxMCkpO1xuICAgICAgICBjb25zdCBjdXJyZW50VGFiID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZGF5VGFiJyk7XG4gICAgICAgIGN1cnJlbnRUYWIuc3R5bGUucG9pbnRlckV2ZW50cyA9IFwibm9uZVwiO1xuICAgICAgICBjdXJyZW50VGFiLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7ICBcblxuICAgICAgICBjb25zdCB0b2RheVRhYiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZXZlbkRheVRhYicpO1xuICAgICAgICB0b2RheVRhYi5zdHlsZS5wb2ludGVyRXZlbnRzID0gXCJhdXRvXCI7XG4gICAgICAgIHRvZGF5VGFiLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG5cbiAgICAgICAgcGFnZVRpdGxlID0gXCJUb2RheSdzIFRhc2tzXCI7XG5cbiAgICB9XG5cblxuICAgIC8vIERpc3BsYXkgRXZlbnRzL1Rhc2tzIGR1ZSB0b2RheVxuICAgIGZ1bmN0aW9uIGRpc3BsYXkoKSB7XG5cbiAgICAgICAgY29uc3QgdG9kYXlzRXZlbnRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRvZGF5c0V2ZW50cy5pZCA9J3RvZGF5c0V2ZW50cyc7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpbkNvbnRlbnRcIikuYXBwZW5kKHRvZGF5c0V2ZW50cyk7XG4gICAgXG4gICAgICAgIGRpc3BsYXlUYXNrcy5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xuXG4gICAgICAgICAgICBjb25zdCB0YXNrSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgICAgICAgICB0YXNrSXRlbS5jbGFzc0xpc3QuYWRkKCd0YXNrSXRlbScpO1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZGF5c0V2ZW50cycpLnByZXBlbmQodGFza0l0ZW0pO1xuXG5cbiAgICAgICAgICAgIGNvbnN0IHRhc2tUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgICAgICB0YXNrVGl0bGUuY2xhc3NMaXN0LmFkZCgndGFza1RpdGxlJyk7XG4gICAgICAgICAgICB0YXNrVGl0bGUuaW5uZXJUZXh0ID0gYCR7aXRlbS5UaXRsZX1gO1xuXG4gICAgICAgICAgICBjb25zdCB0YXNrVGl0bGVDYXRhZ29yeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgICAgIHRhc2tUaXRsZUNhdGFnb3J5LmlubmVyVGV4dCA9IGAke2l0ZW0uQ2F0YWdvcnl9YDtcbiAgICAgICAgICAgIHRhc2tUaXRsZS5wcmVwZW5kKHRhc2tUaXRsZUNhdGFnb3J5KTtcblxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tJdGVtJykuYXBwZW5kQ2hpbGQodGFza1RpdGxlKTtcblxuXG4gICAgICAgICAgICAvLyBjcmVhdGUgbW9kaWZ5IHRhc2sgYnV0dG9uIGZvciBlYWNoIHRhc2tcbiAgICAgICAgICAgIGNvbnN0IG1vZGlmeVRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgIG1vZGlmeVRhc2sudmFsdWUgPSBgJHtpdGVtWydpZCddfWA7XG4gICAgICAgICAgICBtb2RpZnlUYXNrLmNsYXNzTGlzdC5hZGQoJ21vZGlmeVRhc2snKTtcbiAgICAgICAgICAgIG1vZGlmeVRhc2suaW5uZXJUZXh0ID0gXCJFRElUXCI7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza0l0ZW0nKS5hcHBlbmQobW9kaWZ5VGFzayk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIGNyZWF0ZSBkZWxldGUgYnV0dG9uIGZvciBlYWNoIHRhc2tcbiAgICAgICAgICAgIGNvbnN0IGRlbGV0ZVRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgIGRlbGV0ZVRhc2sudmFsdWUgPSBgJHtpdGVtWydpZCddfWA7XG4gICAgICAgICAgICBkZWxldGVUYXNrLmNsYXNzTGlzdC5hZGQoJ2RlbGV0ZVRhc2snKTtcbiAgICAgICAgICAgIGRlbGV0ZVRhc2suaW5uZXJUZXh0ID0gXCJYXCI7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza0l0ZW0nKS5hcHBlbmQoZGVsZXRlVGFzayk7XG4gICAgICAgIFxuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCBmdXR1cmVIZWFkbGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgICAgIGZ1dHVyZUhlYWRsaW5lLmlubmVyVGV4dCA9IHBhZ2VUaXRsZTtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZGF5c0V2ZW50cycpLnByZXBlbmQoZnV0dXJlSGVhZGxpbmUpO1xuXG4gICAgfTtcblxuICAgIGRpc3BsYXkoKTtcblxuXG4gICAgLy8gRGVsZXRlIHRhc2sgZnJvbSB0YXNrTGlzdCBhcnJheVxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZGVsZXRlVGFza1wiKS5mb3JFYWNoKGZ1bmN0aW9uKGl0ZW0pIHtcblxuICAgICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoaXRlbSkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coaXRlbSlcbiAgICBcbiAgICAgICAgICAgIGNvbnN0IHJtdiA9IGl0ZW0udmFsdWU7XG5cbiAgICAgICAgICAgIGNvbnN0IGZ1Y2sgPSB0YXNrTGlzdC5maW5kSW5kZXgoKG9iaikgPT4ge1xuICAgICAgICAgICAgICAgIGlmKG9iai5pZCA9PSBybXYpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgdGFza0xpc3Quc3BsaWNlKGZ1Y2ssIDEpO1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0YXNrTGlzdFwiLCBKU09OLnN0cmluZ2lmeSh0YXNrTGlzdCkpO1xuICAgICAgICAgICAgY29uc3QgcmVmcmVzaCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpbkNvbnRlbnRcIik7XG4gICAgICAgICAgICByZWZyZXNoLnJlbW92ZUNoaWxkKHJlZnJlc2guY2hpbGROb2Rlc1syXSk7XG4gICAgICAgICAgICBkaXNwbGF5KCk7XG4gICAgICAgICAgICBcbiAgICAgICAgfSlcbiAgICAgICAgXG5cbiAgICB9KVxuICAgIFxuICAgIFxufVxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=