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
function todaysEvents() {

    // retrieve taskList array from localStorage
    let taskList= JSON.parse(localStorage.getItem('taskList'));

    // Display Events/Tasks due today
    function display() {

        // create array of tasks due today 
        const today = taskList.filter(task => task.DateDue === new Date().toISOString().slice(0,10));

        const todaysEvents = document.createElement('div');
        todaysEvents.classList.add('todaysEvents');
        document.getElementById("mainContent").appendChild(todaysEvents);
            
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
        
        });

        const futureHeadline = document.createElement('h3');
        futureHeadline.innerText = "Today's Tasks";
        document.querySelector('.todaysEvents').prepend(futureHeadline);

    };

    display();

        // Delete book object from array
        document.querySelectorAll(".deleteTask").forEach(function(item, value) {
            item.addEventListener("click", () => {
                console.log("HEllo",value)
                taskList.splice(value, 1);
                localStorage.setItem("taskList", JSON.stringify(taskList));
            })
        })
    
}


/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9kYXlzRXZlbnRzLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOztVQUFBO1VBQ0E7Ozs7O1dDREE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ05lOztBQUVmO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSwyQ0FBMkMsT0FBTyxFQUFFLFVBQVU7QUFDOUQ7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyxNQUFNO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b19kb19saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b19kb19saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvX2RvX2xpc3QvLi9zcmMvdG9kYXlzRXZlbnRzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9kYXlzRXZlbnRzKCkge1xuXG4gICAgLy8gcmV0cmlldmUgdGFza0xpc3QgYXJyYXkgZnJvbSBsb2NhbFN0b3JhZ2VcbiAgICBsZXQgdGFza0xpc3Q9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rhc2tMaXN0JykpO1xuXG4gICAgLy8gRGlzcGxheSBFdmVudHMvVGFza3MgZHVlIHRvZGF5XG4gICAgZnVuY3Rpb24gZGlzcGxheSgpIHtcblxuICAgICAgICAvLyBjcmVhdGUgYXJyYXkgb2YgdGFza3MgZHVlIHRvZGF5IFxuICAgICAgICBjb25zdCB0b2RheSA9IHRhc2tMaXN0LmZpbHRlcih0YXNrID0+IHRhc2suRGF0ZUR1ZSA9PT0gbmV3IERhdGUoKS50b0lTT1N0cmluZygpLnNsaWNlKDAsMTApKTtcblxuICAgICAgICBjb25zdCB0b2RheXNFdmVudHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdG9kYXlzRXZlbnRzLmNsYXNzTGlzdC5hZGQoJ3RvZGF5c0V2ZW50cycpO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5Db250ZW50XCIpLmFwcGVuZENoaWxkKHRvZGF5c0V2ZW50cyk7XG4gICAgICAgICAgICBcbiAgICAgICAgdG9kYXkuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcblxuICAgICAgICAgICAgY29uc3QgdGFza0l0ZW1Ub2RheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgICAgICAgICB0YXNrSXRlbVRvZGF5LmNsYXNzTGlzdC5hZGQoJ3Rhc2tJdGVtVG9kYXknKTtcbiAgICAgICAgICAgIHRhc2tJdGVtVG9kYXkuY2xhc3NMaXN0LmFkZCgndG9kYXknKTtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RheXNFdmVudHMnKS5wcmVwZW5kKHRhc2tJdGVtVG9kYXkpO1xuXG4gICAgICAgICAgICBmb3IgKGxldCBrZXkgaW4gaXRlbSkge1xuXG4gICAgICAgICAgICAgICAgY29uc3QgdGFza0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICAgICAgICAgIHRhc2tFbGVtZW50LmlubmVyVGV4dCA9IGAke1trZXldfSAke2l0ZW1ba2V5XX1gO1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrSXRlbVRvZGF5JykuYXBwZW5kQ2hpbGQodGFza0VsZW1lbnQpO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIGNyZWF0ZSBtb2RpZnkgdGFzayBidXR0b24gZm9yIGVhY2ggdGFza1xuICAgICAgICAgICAgY29uc3QgbW9kaWZ5VGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgbW9kaWZ5VGFzay5jbGFzc0xpc3QuYWRkKCdtb2RpZnlUYXNrJyk7XG4gICAgICAgICAgICBtb2RpZnlUYXNrLmlubmVyVGV4dCA9IFwiTW9kaWZ5XCI7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza0l0ZW1Ub2RheScpLmFwcGVuZChtb2RpZnlUYXNrKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gY3JlYXRlIGRlbGV0ZSBidXR0b24gZm9yIGVhY2ggdGFza1xuICAgICAgICAgICAgY29uc3QgZGVsZXRlVGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgZGVsZXRlVGFzay52YWx1ZSA9IGAke2luZGV4fWA7XG4gICAgICAgICAgICBkZWxldGVUYXNrLmNsYXNzTGlzdC5hZGQoJ2RlbGV0ZVRhc2snKTtcbiAgICAgICAgICAgIGRlbGV0ZVRhc2suaW5uZXJUZXh0ID0gXCJEZWxldGVcIjtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrSXRlbVRvZGF5JykuYXBwZW5kKGRlbGV0ZVRhc2spO1xuICAgICAgICBcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgZnV0dXJlSGVhZGxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgICAgICBmdXR1cmVIZWFkbGluZS5pbm5lclRleHQgPSBcIlRvZGF5J3MgVGFza3NcIjtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZGF5c0V2ZW50cycpLnByZXBlbmQoZnV0dXJlSGVhZGxpbmUpO1xuXG4gICAgfTtcblxuICAgIGRpc3BsYXkoKTtcblxuICAgICAgICAvLyBEZWxldGUgYm9vayBvYmplY3QgZnJvbSBhcnJheVxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmRlbGV0ZVRhc2tcIikuZm9yRWFjaChmdW5jdGlvbihpdGVtLCB2YWx1ZSkge1xuICAgICAgICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiSEVsbG9cIix2YWx1ZSlcbiAgICAgICAgICAgICAgICB0YXNrTGlzdC5zcGxpY2UodmFsdWUsIDEpO1xuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidGFza0xpc3RcIiwgSlNPTi5zdHJpbmdpZnkodGFza0xpc3QpKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgXG59XG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==