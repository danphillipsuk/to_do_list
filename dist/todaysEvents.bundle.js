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
            deleteTask.value = `${item['id']}`;
            deleteTask.classList.add('deleteTask');
            deleteTask.innerText = "Delete";
            document.querySelector('.taskItemToday').append(deleteTask);
        
        });

        const futureHeadline = document.createElement('h3');
        futureHeadline.innerText = "Today's Tasks";
        document.querySelector('.todaysEvents').prepend(futureHeadline);

    };

    display();

    document.querySelectorAll(".deleteTask").forEach(function(item) {

        item.addEventListener("click", () => {
    
            const rmv = item.value;

            taskList.forEach((items, index) => {

                if (items.id === rmv) {
                    console.log(index)
                    taskList.splice(index, 1);
                    localStorage.setItem("taskList", JSON.stringify(taskList));
                }
                
            })
        })
    })
    
}


/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9kYXlzRXZlbnRzLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOztVQUFBO1VBQ0E7Ozs7O1dDREE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ05lOztBQUVmO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSwyQ0FBMkMsT0FBTyxFQUFFLFVBQVU7QUFDOUQ7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyxXQUFXO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b19kb19saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvX2RvX2xpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvX2RvX2xpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b19kb19saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC8uL3NyYy90b2RheXNFdmVudHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b2RheXNFdmVudHMoKSB7XG5cbiAgICAvLyByZXRyaWV2ZSB0YXNrTGlzdCBhcnJheSBmcm9tIGxvY2FsU3RvcmFnZVxuICAgIGxldCB0YXNrTGlzdD0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGFza0xpc3QnKSk7XG5cbiAgICAvLyBEaXNwbGF5IEV2ZW50cy9UYXNrcyBkdWUgdG9kYXlcbiAgICBmdW5jdGlvbiBkaXNwbGF5KCkge1xuXG4gICAgICAgIC8vIGNyZWF0ZSBhcnJheSBvZiB0YXNrcyBkdWUgdG9kYXkgXG4gICAgICAgIGNvbnN0IHRvZGF5ID0gdGFza0xpc3QuZmlsdGVyKHRhc2sgPT4gdGFzay5EYXRlRHVlID09PSBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCkuc2xpY2UoMCwxMCkpO1xuXG4gICAgICAgIGNvbnN0IHRvZGF5c0V2ZW50cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0b2RheXNFdmVudHMuY2xhc3NMaXN0LmFkZCgndG9kYXlzRXZlbnRzJyk7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpbkNvbnRlbnRcIikuYXBwZW5kQ2hpbGQodG9kYXlzRXZlbnRzKTtcbiAgICAgICAgICAgIFxuICAgICAgICB0b2RheS5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xuXG4gICAgICAgICAgICBjb25zdCB0YXNrSXRlbVRvZGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICAgICAgICAgIHRhc2tJdGVtVG9kYXkuY2xhc3NMaXN0LmFkZCgndGFza0l0ZW1Ub2RheScpO1xuICAgICAgICAgICAgdGFza0l0ZW1Ub2RheS5jbGFzc0xpc3QuYWRkKCd0b2RheScpO1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZGF5c0V2ZW50cycpLnByZXBlbmQodGFza0l0ZW1Ub2RheSk7XG5cbiAgICAgICAgICAgIGZvciAobGV0IGtleSBpbiBpdGVtKSB7XG5cbiAgICAgICAgICAgICAgICBjb25zdCB0YXNrRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgICAgICAgICAgdGFza0VsZW1lbnQuaW5uZXJUZXh0ID0gYCR7W2tleV19ICR7aXRlbVtrZXldfWA7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tJdGVtVG9kYXknKS5hcHBlbmRDaGlsZCh0YXNrRWxlbWVudCk7XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gY3JlYXRlIG1vZGlmeSB0YXNrIGJ1dHRvbiBmb3IgZWFjaCB0YXNrXG4gICAgICAgICAgICBjb25zdCBtb2RpZnlUYXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICBtb2RpZnlUYXNrLmNsYXNzTGlzdC5hZGQoJ21vZGlmeVRhc2snKTtcbiAgICAgICAgICAgIG1vZGlmeVRhc2suaW5uZXJUZXh0ID0gXCJNb2RpZnlcIjtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrSXRlbVRvZGF5JykuYXBwZW5kKG1vZGlmeVRhc2spO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyBjcmVhdGUgZGVsZXRlIGJ1dHRvbiBmb3IgZWFjaCB0YXNrXG4gICAgICAgICAgICBjb25zdCBkZWxldGVUYXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICBkZWxldGVUYXNrLnZhbHVlID0gYCR7aXRlbVsnaWQnXX1gO1xuICAgICAgICAgICAgZGVsZXRlVGFzay5jbGFzc0xpc3QuYWRkKCdkZWxldGVUYXNrJyk7XG4gICAgICAgICAgICBkZWxldGVUYXNrLmlubmVyVGV4dCA9IFwiRGVsZXRlXCI7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza0l0ZW1Ub2RheScpLmFwcGVuZChkZWxldGVUYXNrKTtcbiAgICAgICAgXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IGZ1dHVyZUhlYWRsaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICAgICAgZnV0dXJlSGVhZGxpbmUuaW5uZXJUZXh0ID0gXCJUb2RheSdzIFRhc2tzXCI7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RheXNFdmVudHMnKS5wcmVwZW5kKGZ1dHVyZUhlYWRsaW5lKTtcblxuICAgIH07XG5cbiAgICBkaXNwbGF5KCk7XG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmRlbGV0ZVRhc2tcIikuZm9yRWFjaChmdW5jdGlvbihpdGVtKSB7XG5cbiAgICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIFxuICAgICAgICAgICAgY29uc3Qgcm12ID0gaXRlbS52YWx1ZTtcblxuICAgICAgICAgICAgdGFza0xpc3QuZm9yRWFjaCgoaXRlbXMsIGluZGV4KSA9PiB7XG5cbiAgICAgICAgICAgICAgICBpZiAoaXRlbXMuaWQgPT09IHJtdikge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhpbmRleClcbiAgICAgICAgICAgICAgICAgICAgdGFza0xpc3Quc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0YXNrTGlzdFwiLCBKU09OLnN0cmluZ2lmeSh0YXNrTGlzdCkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgfSlcbiAgICBcbn1cblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9