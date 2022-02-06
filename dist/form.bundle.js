/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/todaysEvents.js":
/*!*****************************!*\
  !*** ./src/todaysEvents.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!***************************!*\
  !*** ./src/createTask.js ***!
  \***************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createTask)
/* harmony export */ });
/* harmony import */ var _todaysEvents__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todaysEvents */ "./src/todaysEvents.js");


function createTask() {

    // create new task form 
    const taskForm = document.createElement('div');
    taskForm.classList.add('taskForm');
    taskForm.innerHTML = '<h2>CREATE A NEW TASK</h2><div class="formElement taskTitle"><label for="taskTitle">Task</label><input name ="taskTitle" type="text"></div><div class="formElement"><label for="taskCatagory">Catagory</label><select name="taskCatagory"><option value="Home">Home</option><option value="work">Work</option></select></div><div class="formElement"><label for="dueDate">Due Date</label><input type="date" name="dueDate"></div><div class="formElement"><label for="taskTime">Time</label><input type="time" name="time"></div><button id="submit">Add Task</button>';

    document.getElementById("content").prepend(taskForm);

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
            const id = Math.random();
        
            // Create a new task object
            const newAddition = new taskClass(id, title, catagory, dueDate, time);

            // add new task to taskList array and set in localStorage
            const taskList = JSON.parse(window.localStorage.getItem("taskList"));
            taskList.push(newAddition);
            window.localStorage.setItem("taskList", JSON.stringify(taskList));

            // const test = document.getElementById("mainContent");
            // if (test.childNodes[1] !== undefined) {
            //     test.removeChild(test.childNodes[1]);
            //     todaysEvents("hello from create task");
            // };
        }


    }
    

};

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBZTs7QUFFZjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBLHFDQUFxQyxXQUFXOztBQUVoRDtBQUNBLDZDQUE2QyxjQUFjO0FBQzNEOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0Esa0NBQWtDLFdBQVc7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLFdBQVc7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTs7Ozs7Ozs7VUNqSEE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7OztBQ04wQzs7QUFFM0I7O0FBRWY7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b19kb19saXN0Ly4vc3JjL3RvZGF5c0V2ZW50cy5qcyIsIndlYnBhY2s6Ly90b19kb19saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvX2RvX2xpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvX2RvX2xpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b19kb19saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC8uL3NyYy9jcmVhdGVUYXNrLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvZGF5c0V2ZW50cyh0ZXN0KSB7XG5cbiAgICAvLyByZXRyaWV2ZSB0YXNrTGlzdCBhcnJheSBmcm9tIGxvY2FsU3RvcmFnZVxuICAgIGxldCB0YXNrTGlzdD0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGFza0xpc3QnKSk7XG5cbiAgICBsZXQgZGlzcGxheVRhc2tzO1xuICAgIGxldCBwYWdlVGl0bGU7XG4gICAgaWYgKHRlc3QgPT09ICdzZXZlbicpIHtcbiAgICAgICAgZGlzcGxheVRhc2tzID0gdGFza0xpc3QuZmlsdGVyKHRhc2sgPT4gdGFzay5EYXRlRHVlID4gbmV3IERhdGUoKS50b0lTT1N0cmluZygpLnNsaWNlKDAsMTApKTtcbiAgICAgICAgY29uc3QgY3VycmVudFRhYiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZXZlbkRheVRhYicpO1xuICAgICAgICBjdXJyZW50VGFiLnN0eWxlLnBvaW50ZXJFdmVudHMgPSBcIm5vbmVcIjtcbiAgICAgICAgY3VycmVudFRhYi5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpOyAgXG5cbiAgICAgICAgY29uc3QgdG9kYXlUYWIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kYXlUYWInKTtcbiAgICAgICAgdG9kYXlUYWIuc3R5bGUucG9pbnRlckV2ZW50cyA9IFwiYXV0b1wiO1xuICAgICAgICB0b2RheVRhYi5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuXG4gICAgICAgIHBhZ2VUaXRsZSA9IFwiTmV4dCBTZXZlbiBEYXlzXCI7XG4gICAgICAgIFxuXG4gICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKHRlc3QgPT09ICd0b2RheScpXG4gICAgICAgIGRpc3BsYXlUYXNrcyA9IHRhc2tMaXN0LmZpbHRlcih0YXNrID0+IHRhc2suRGF0ZUR1ZSA9PT0gbmV3IERhdGUoKS50b0lTT1N0cmluZygpLnNsaWNlKDAsMTApKTtcbiAgICAgICAgY29uc3QgY3VycmVudFRhYiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RheVRhYicpO1xuICAgICAgICBjdXJyZW50VGFiLnN0eWxlLnBvaW50ZXJFdmVudHMgPSBcIm5vbmVcIjtcbiAgICAgICAgY3VycmVudFRhYi5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpOyAgXG5cbiAgICAgICAgY29uc3QgdG9kYXlUYWIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2V2ZW5EYXlUYWInKTtcbiAgICAgICAgdG9kYXlUYWIuc3R5bGUucG9pbnRlckV2ZW50cyA9IFwiYXV0b1wiO1xuICAgICAgICB0b2RheVRhYi5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuXG4gICAgICAgIHBhZ2VUaXRsZSA9IFwiVG9kYXkncyBUYXNrc1wiO1xuXG4gICAgfVxuXG5cbiAgICAvLyBEaXNwbGF5IEV2ZW50cy9UYXNrcyBkdWUgdG9kYXlcbiAgICBmdW5jdGlvbiBkaXNwbGF5KCkge1xuXG4gICAgICAgIGNvbnN0IHRvZGF5c0V2ZW50cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0b2RheXNFdmVudHMuaWQgPSd0b2RheXNFdmVudHMnO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5Db250ZW50XCIpLmFwcGVuZCh0b2RheXNFdmVudHMpO1xuICAgIFxuICAgICAgICBkaXNwbGF5VGFza3MuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcblxuICAgICAgICAgICAgY29uc3QgdGFza0l0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgICAgICAgICAgdGFza0l0ZW0uY2xhc3NMaXN0LmFkZCgndGFza0l0ZW0nKTtcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RheXNFdmVudHMnKS5wcmVwZW5kKHRhc2tJdGVtKTtcblxuXG4gICAgICAgICAgICBjb25zdCB0YXNrVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICAgICAgdGFza1RpdGxlLmNsYXNzTGlzdC5hZGQoJ3Rhc2tUaXRsZScpO1xuICAgICAgICAgICAgdGFza1RpdGxlLmlubmVyVGV4dCA9IGAke2l0ZW0uVGl0bGV9YDtcblxuICAgICAgICAgICAgY29uc3QgdGFza1RpdGxlQ2F0YWdvcnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgICAgICB0YXNrVGl0bGVDYXRhZ29yeS5pbm5lclRleHQgPSBgJHtpdGVtLkNhdGFnb3J5fWA7XG4gICAgICAgICAgICB0YXNrVGl0bGUucHJlcGVuZCh0YXNrVGl0bGVDYXRhZ29yeSk7XG5cbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrSXRlbScpLmFwcGVuZENoaWxkKHRhc2tUaXRsZSk7XG5cblxuICAgICAgICAgICAgLy8gY3JlYXRlIG1vZGlmeSB0YXNrIGJ1dHRvbiBmb3IgZWFjaCB0YXNrXG4gICAgICAgICAgICBjb25zdCBtb2RpZnlUYXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICBtb2RpZnlUYXNrLnZhbHVlID0gYCR7aXRlbVsnaWQnXX1gO1xuICAgICAgICAgICAgbW9kaWZ5VGFzay5jbGFzc0xpc3QuYWRkKCdtb2RpZnlUYXNrJyk7XG4gICAgICAgICAgICBtb2RpZnlUYXNrLmlubmVyVGV4dCA9IFwiRURJVFwiO1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tJdGVtJykuYXBwZW5kKG1vZGlmeVRhc2spO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyBjcmVhdGUgZGVsZXRlIGJ1dHRvbiBmb3IgZWFjaCB0YXNrXG4gICAgICAgICAgICBjb25zdCBkZWxldGVUYXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICBkZWxldGVUYXNrLnZhbHVlID0gYCR7aXRlbVsnaWQnXX1gO1xuICAgICAgICAgICAgZGVsZXRlVGFzay5jbGFzc0xpc3QuYWRkKCdkZWxldGVUYXNrJyk7XG4gICAgICAgICAgICBkZWxldGVUYXNrLmlubmVyVGV4dCA9IFwiWFwiO1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tJdGVtJykuYXBwZW5kKGRlbGV0ZVRhc2spO1xuICAgICAgICBcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgZnV0dXJlSGVhZGxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgICAgICBmdXR1cmVIZWFkbGluZS5pbm5lclRleHQgPSBwYWdlVGl0bGU7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RheXNFdmVudHMnKS5wcmVwZW5kKGZ1dHVyZUhlYWRsaW5lKTtcblxuICAgIH07XG5cbiAgICBkaXNwbGF5KCk7XG5cblxuICAgIC8vIERlbGV0ZSB0YXNrIGZyb20gdGFza0xpc3QgYXJyYXlcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmRlbGV0ZVRhc2tcIikuZm9yRWFjaChmdW5jdGlvbihpdGVtKSB7XG5cbiAgICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGl0ZW0pID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGl0ZW0pXG4gICAgXG4gICAgICAgICAgICBjb25zdCBybXYgPSBpdGVtLnZhbHVlO1xuXG4gICAgICAgICAgICBjb25zdCBmdWNrID0gdGFza0xpc3QuZmluZEluZGV4KChvYmopID0+IHtcbiAgICAgICAgICAgICAgICBpZihvYmouaWQgPT0gcm12KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIHRhc2tMaXN0LnNwbGljZShmdWNrLCAxKTtcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidGFza0xpc3RcIiwgSlNPTi5zdHJpbmdpZnkodGFza0xpc3QpKTtcbiAgICAgICAgICAgIGNvbnN0IHJlZnJlc2ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5Db250ZW50XCIpO1xuICAgICAgICAgICAgcmVmcmVzaC5yZW1vdmVDaGlsZChyZWZyZXNoLmNoaWxkTm9kZXNbMl0pO1xuICAgICAgICAgICAgZGlzcGxheSgpO1xuICAgICAgICAgICAgXG4gICAgICAgIH0pXG4gICAgICAgIFxuXG4gICAgfSlcbiAgICBcbiAgICBcbn1cblxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgdG9kYXlzRXZlbnRzIGZyb20gXCIuL3RvZGF5c0V2ZW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVUYXNrKCkge1xuXG4gICAgLy8gY3JlYXRlIG5ldyB0YXNrIGZvcm0gXG4gICAgY29uc3QgdGFza0Zvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0YXNrRm9ybS5jbGFzc0xpc3QuYWRkKCd0YXNrRm9ybScpO1xuICAgIHRhc2tGb3JtLmlubmVySFRNTCA9ICc8aDI+Q1JFQVRFIEEgTkVXIFRBU0s8L2gyPjxkaXYgY2xhc3M9XCJmb3JtRWxlbWVudCB0YXNrVGl0bGVcIj48bGFiZWwgZm9yPVwidGFza1RpdGxlXCI+VGFzazwvbGFiZWw+PGlucHV0IG5hbWUgPVwidGFza1RpdGxlXCIgdHlwZT1cInRleHRcIj48L2Rpdj48ZGl2IGNsYXNzPVwiZm9ybUVsZW1lbnRcIj48bGFiZWwgZm9yPVwidGFza0NhdGFnb3J5XCI+Q2F0YWdvcnk8L2xhYmVsPjxzZWxlY3QgbmFtZT1cInRhc2tDYXRhZ29yeVwiPjxvcHRpb24gdmFsdWU9XCJIb21lXCI+SG9tZTwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCJ3b3JrXCI+V29yazwvb3B0aW9uPjwvc2VsZWN0PjwvZGl2PjxkaXYgY2xhc3M9XCJmb3JtRWxlbWVudFwiPjxsYWJlbCBmb3I9XCJkdWVEYXRlXCI+RHVlIERhdGU8L2xhYmVsPjxpbnB1dCB0eXBlPVwiZGF0ZVwiIG5hbWU9XCJkdWVEYXRlXCI+PC9kaXY+PGRpdiBjbGFzcz1cImZvcm1FbGVtZW50XCI+PGxhYmVsIGZvcj1cInRhc2tUaW1lXCI+VGltZTwvbGFiZWw+PGlucHV0IHR5cGU9XCJ0aW1lXCIgbmFtZT1cInRpbWVcIj48L2Rpdj48YnV0dG9uIGlkPVwic3VibWl0XCI+QWRkIFRhc2s8L2J1dHRvbj4nO1xuXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpLnByZXBlbmQodGFza0Zvcm0pO1xuXG4gICAgLy9saXN0ZW4gZm9yIHRhc2sgZm9ybSBzdWJtaXRcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN1Ym1pdFwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgbmV3VGFzayk7XG5cblxuICAgIGNsYXNzIHRhc2tDbGFzcyB7XG4gICAgICAgIGNvbnN0cnVjdG9yKGlkLCB0aXRsZSwgY2F0YWdvcnksIGRhdGVEdWUsIHRpbWUpIHtcbiAgICAgICAgICAgIHRoaXMuaWQgPSBpZDtcbiAgICAgICAgICAgIHRoaXMuVGl0bGUgPSB0aXRsZTtcbiAgICAgICAgICAgIHRoaXMuQ2F0YWdvcnkgPSBjYXRhZ29yeTtcbiAgICAgICAgICAgIHRoaXMuRGF0ZUR1ZSA9IGRhdGVEdWU7XG4gICAgICAgICAgICB0aGlzLlRpbWUgPSB0aW1lO1xuICAgICAgICB9XG4gICAgfSBcblxuICAgIC8vZnVuY3Rpb24gdG8gcnVuIG9uIHRhc2tGb3JtIHN1Ym1pdFxuICAgIGZ1bmN0aW9uIG5ld1Rhc2sgKCkge1xuICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFtuYW1lPSd0YXNrVGl0bGUnXVwiKS52YWx1ZTtcbiAgICAgICAgY29uc3QgY2F0YWdvcnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwic2VsZWN0W25hbWU9J3Rhc2tDYXRhZ29yeSddXCIpLnZhbHVlO1xuICAgICAgICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImlucHV0W25hbWU9J2R1ZURhdGUnXVwiKS52YWx1ZTtcbiAgICAgICAgY29uc3QgdGltZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFtuYW1lPSd0aW1lJ11cIikudmFsdWU7XG4gICAgICAgIFxuICAgICAgICBpZiAodGl0bGUgIT09ICcnICYmIGR1ZURhdGUgIT09ICcnKSB7XG4gICAgICAgICAgICBjb25zdCBpZCA9IE1hdGgucmFuZG9tKCk7XG4gICAgICAgIFxuICAgICAgICAgICAgLy8gQ3JlYXRlIGEgbmV3IHRhc2sgb2JqZWN0XG4gICAgICAgICAgICBjb25zdCBuZXdBZGRpdGlvbiA9IG5ldyB0YXNrQ2xhc3MoaWQsIHRpdGxlLCBjYXRhZ29yeSwgZHVlRGF0ZSwgdGltZSk7XG5cbiAgICAgICAgICAgIC8vIGFkZCBuZXcgdGFzayB0byB0YXNrTGlzdCBhcnJheSBhbmQgc2V0IGluIGxvY2FsU3RvcmFnZVxuICAgICAgICAgICAgY29uc3QgdGFza0xpc3QgPSBKU09OLnBhcnNlKHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRhc2tMaXN0XCIpKTtcbiAgICAgICAgICAgIHRhc2tMaXN0LnB1c2gobmV3QWRkaXRpb24pO1xuICAgICAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidGFza0xpc3RcIiwgSlNPTi5zdHJpbmdpZnkodGFza0xpc3QpKTtcblxuICAgICAgICAgICAgLy8gY29uc3QgdGVzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpbkNvbnRlbnRcIik7XG4gICAgICAgICAgICAvLyBpZiAodGVzdC5jaGlsZE5vZGVzWzFdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIC8vICAgICB0ZXN0LnJlbW92ZUNoaWxkKHRlc3QuY2hpbGROb2Rlc1sxXSk7XG4gICAgICAgICAgICAvLyAgICAgdG9kYXlzRXZlbnRzKFwiaGVsbG8gZnJvbSBjcmVhdGUgdGFza1wiKTtcbiAgICAgICAgICAgIC8vIH07XG4gICAgICAgIH1cblxuXG4gICAgfVxuICAgIFxuXG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9