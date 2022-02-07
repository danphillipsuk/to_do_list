/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/config.js":
/*!***********************!*\
  !*** ./src/config.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  example: "hello",
  taskList: function () {
    return JSON.parse(localStorage.getItem('taskList'));
  },
  mainContent: function () {
    return document.getElementById('mainContent');
  }
});

/***/ }),

/***/ "./src/modifyTasklist.js":
/*!*******************************!*\
  !*** ./src/modifyTasklist.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "deleteTask": () => (/* binding */ deleteTask),
/* harmony export */   "editTask": () => (/* binding */ editTask)
/* harmony export */ });
/* harmony import */ var _todaysEvents_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todaysEvents.js */ "./src/todaysEvents.js");
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config.js */ "./src/config.js");



// Delete task from main taskList array
const deleteTask = (unique_id, taskList) => {
  // get global variabels from config.js
  const mainContent = _config_js__WEBPACK_IMPORTED_MODULE_1__["default"].mainContent();

  // find index of item to delete in master array (taskList)
  const taskListIndex = taskList.findIndex((obj) => {
    if(obj.id == unique_id) {
      return true;
    };
    return false;
  });

  // remove item from master array
  taskList.splice(taskListIndex, 1);

  // upload new array to local storage
  localStorage.setItem("taskList", JSON.stringify(taskList));

  // remove expired array from display and refresh
  mainContent.removeChild(mainContent.childNodes[3]);

  (0,_todaysEvents_js__WEBPACK_IMPORTED_MODULE_0__["default"])('today');

};

// Modify task in main taskList array
const editTask = (unique_id, taskList) => {
  console.log(`Edit ${unique_id}`);
};




/***/ }),

/***/ "./src/todaysEvents.js":
/*!*****************************!*\
  !*** ./src/todaysEvents.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ todaysEvents)
/* harmony export */ });
/* harmony import */ var _modifyTasklist_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modifyTasklist.js */ "./src/modifyTasklist.js");

function todaysEvents(taskArray) {

    // retrieve taskList array from localStorage
    let taskList= JSON.parse(localStorage.getItem('taskList'));

    let displayTasks;
    let pageTitle;

    if (taskArray === 'seven') {
      displayTasks = taskList.filter(task => task.DateDue > new Date().toISOString().slice(0,10));
      const currentTab = document.querySelector('.sevenDayTab');
      currentTab.style.pointerEvents = "none";
      currentTab.classList.add("active");  

      const todayTab = document.querySelector('.todayTab');
      todayTab.style.pointerEvents = "auto";
      todayTab.classList.remove("active");

      pageTitle = "Next Seven Days";
        
    } else if (taskArray === 'today') {

      displayTasks = taskList.filter(task => task.DateDue === new Date().toISOString().slice(0,10));
      const currentTab = document.querySelector('.todayTab');
      currentTab.style.pointerEvents = "none";
      currentTab.classList.add("active");  

      const todayTab = document.querySelector('.sevenDayTab');
      todayTab.style.pointerEvents = "auto";
      todayTab.classList.remove("active");

      pageTitle = "Today's Tasks";

    }  else {

      displayTasks = taskList.filter(task => task.Catagory === taskArray);
      const currentTab = document.querySelector(`[data-name = '${taskArray}']`);
      currentTab.style.pointerEvents = "none";
      currentTab.classList.add("active");  

      document.querySelectorAll(".projectTitle").forEach(function(item) {
        if (item.dataset.name !== taskArray) {
          item.style.pointerEvents = "auto";
          item.classList.remove("active");
        };
      });


      pageTitle = taskArray;

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
      item.addEventListener("click", () => {
        (0,_modifyTasklist_js__WEBPACK_IMPORTED_MODULE_0__.deleteTask)(item.value, taskList);
      });
    });

      // Modify task from taskList array
      document.querySelectorAll(".modifyTask").forEach(function(item) {
        item.addEventListener("click", () => {
          (0,_modifyTasklist_js__WEBPACK_IMPORTED_MODULE_0__.editTask)(item.value, taskList);
        });
      });
    
    
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
    taskForm.innerHTML = '<h2>CREATE A NEW TASK</h2><div class="formElement taskTitle"><label for="taskTitle">Task</label><input name ="taskTitle" type="text"></div><div class="formElement"><label for="taskCatagory">Project</label><input name="taskCatagory" type="text"></div><div class="formElement"><label for="dueDate">Due Date</label><input type="date" name="dueDate"></div><div class="formElement"><label for="taskTime">Time</label><input type="time" name="time"></div><button id="submit">Add Task</button>';

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
      const catagory = document.querySelector("input[name='taskCatagory']").value;
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

        const test = document.getElementById("mainContent");
        test.removeChild(test.childNodes[3]);
        (0,_todaysEvents__WEBPACK_IMPORTED_MODULE_0__["default"])('today'); 
      }
    }
  
};

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSxpRUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNSNkM7QUFDWjs7QUFFakM7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLDhEQUFrQjs7QUFFeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxFQUFFLDREQUFZOztBQUVkOztBQUVBO0FBQ0E7QUFDQSxzQkFBc0IsVUFBVTtBQUNoQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEMyRDtBQUM1Qzs7QUFFZjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU07O0FBRU47QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBLE9BQU87O0FBRVA7QUFDQSxpRUFBaUUsVUFBVTtBQUMzRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOzs7QUFHUDs7QUFFQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBLHFDQUFxQyxXQUFXOztBQUVoRDtBQUNBLDZDQUE2QyxjQUFjO0FBQzNEOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0Esa0NBQWtDLFdBQVc7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLFdBQVc7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSw4REFBVTtBQUNsQixPQUFPO0FBQ1AsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxVQUFVLDREQUFRO0FBQ2xCLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQTtBQUNBOzs7Ozs7OztVQ3ZIQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7O0FDTjBDOztBQUUzQjs7QUFFZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxRQUFRLHlEQUFZO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC8uL3NyYy9jb25maWcuanMiLCJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC8uL3NyYy9tb2RpZnlUYXNrbGlzdC5qcyIsIndlYnBhY2s6Ly90b19kb19saXN0Ly4vc3JjL3RvZGF5c0V2ZW50cy5qcyIsIndlYnBhY2s6Ly90b19kb19saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvX2RvX2xpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvX2RvX2xpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b19kb19saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC8uL3NyYy9jcmVhdGVUYXNrLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IHtcbiAgZXhhbXBsZTogXCJoZWxsb1wiLFxuICB0YXNrTGlzdDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0YXNrTGlzdCcpKTtcbiAgfSxcbiAgbWFpbkNvbnRlbnQ6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW5Db250ZW50Jyk7XG4gIH1cbn0iLCJpbXBvcnQgdG9kYXlzRXZlbnRzIGZyb20gXCIuL3RvZGF5c0V2ZW50cy5qc1wiO1xuaW1wb3J0IGNvbmZpZyBmcm9tICcuL2NvbmZpZy5qcyc7XG5cbi8vIERlbGV0ZSB0YXNrIGZyb20gbWFpbiB0YXNrTGlzdCBhcnJheVxuY29uc3QgZGVsZXRlVGFzayA9ICh1bmlxdWVfaWQsIHRhc2tMaXN0KSA9PiB7XG4gIC8vIGdldCBnbG9iYWwgdmFyaWFiZWxzIGZyb20gY29uZmlnLmpzXG4gIGNvbnN0IG1haW5Db250ZW50ID0gY29uZmlnLm1haW5Db250ZW50KCk7XG5cbiAgLy8gZmluZCBpbmRleCBvZiBpdGVtIHRvIGRlbGV0ZSBpbiBtYXN0ZXIgYXJyYXkgKHRhc2tMaXN0KVxuICBjb25zdCB0YXNrTGlzdEluZGV4ID0gdGFza0xpc3QuZmluZEluZGV4KChvYmopID0+IHtcbiAgICBpZihvYmouaWQgPT0gdW5pcXVlX2lkKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9O1xuICAgIHJldHVybiBmYWxzZTtcbiAgfSk7XG5cbiAgLy8gcmVtb3ZlIGl0ZW0gZnJvbSBtYXN0ZXIgYXJyYXlcbiAgdGFza0xpc3Quc3BsaWNlKHRhc2tMaXN0SW5kZXgsIDEpO1xuXG4gIC8vIHVwbG9hZCBuZXcgYXJyYXkgdG8gbG9jYWwgc3RvcmFnZVxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRhc2tMaXN0XCIsIEpTT04uc3RyaW5naWZ5KHRhc2tMaXN0KSk7XG5cbiAgLy8gcmVtb3ZlIGV4cGlyZWQgYXJyYXkgZnJvbSBkaXNwbGF5IGFuZCByZWZyZXNoXG4gIG1haW5Db250ZW50LnJlbW92ZUNoaWxkKG1haW5Db250ZW50LmNoaWxkTm9kZXNbM10pO1xuXG4gIHRvZGF5c0V2ZW50cygndG9kYXknKTtcblxufTtcblxuLy8gTW9kaWZ5IHRhc2sgaW4gbWFpbiB0YXNrTGlzdCBhcnJheVxuY29uc3QgZWRpdFRhc2sgPSAodW5pcXVlX2lkLCB0YXNrTGlzdCkgPT4ge1xuICBjb25zb2xlLmxvZyhgRWRpdCAke3VuaXF1ZV9pZH1gKTtcbn07XG5cblxuZXhwb3J0IHsgZGVsZXRlVGFzaywgZWRpdFRhc2sgfTsiLCJpbXBvcnQgeyBkZWxldGVUYXNrLCBlZGl0VGFzayB9IGZyb20gJy4vbW9kaWZ5VGFza2xpc3QuanMnO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9kYXlzRXZlbnRzKHRhc2tBcnJheSkge1xuXG4gICAgLy8gcmV0cmlldmUgdGFza0xpc3QgYXJyYXkgZnJvbSBsb2NhbFN0b3JhZ2VcbiAgICBsZXQgdGFza0xpc3Q9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rhc2tMaXN0JykpO1xuXG4gICAgbGV0IGRpc3BsYXlUYXNrcztcbiAgICBsZXQgcGFnZVRpdGxlO1xuXG4gICAgaWYgKHRhc2tBcnJheSA9PT0gJ3NldmVuJykge1xuICAgICAgZGlzcGxheVRhc2tzID0gdGFza0xpc3QuZmlsdGVyKHRhc2sgPT4gdGFzay5EYXRlRHVlID4gbmV3IERhdGUoKS50b0lTT1N0cmluZygpLnNsaWNlKDAsMTApKTtcbiAgICAgIGNvbnN0IGN1cnJlbnRUYWIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2V2ZW5EYXlUYWInKTtcbiAgICAgIGN1cnJlbnRUYWIuc3R5bGUucG9pbnRlckV2ZW50cyA9IFwibm9uZVwiO1xuICAgICAgY3VycmVudFRhYi5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpOyAgXG5cbiAgICAgIGNvbnN0IHRvZGF5VGFiID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZGF5VGFiJyk7XG4gICAgICB0b2RheVRhYi5zdHlsZS5wb2ludGVyRXZlbnRzID0gXCJhdXRvXCI7XG4gICAgICB0b2RheVRhYi5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuXG4gICAgICBwYWdlVGl0bGUgPSBcIk5leHQgU2V2ZW4gRGF5c1wiO1xuICAgICAgICBcbiAgICB9IGVsc2UgaWYgKHRhc2tBcnJheSA9PT0gJ3RvZGF5Jykge1xuXG4gICAgICBkaXNwbGF5VGFza3MgPSB0YXNrTGlzdC5maWx0ZXIodGFzayA9PiB0YXNrLkRhdGVEdWUgPT09IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKS5zbGljZSgwLDEwKSk7XG4gICAgICBjb25zdCBjdXJyZW50VGFiID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZGF5VGFiJyk7XG4gICAgICBjdXJyZW50VGFiLnN0eWxlLnBvaW50ZXJFdmVudHMgPSBcIm5vbmVcIjtcbiAgICAgIGN1cnJlbnRUYWIuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTsgIFxuXG4gICAgICBjb25zdCB0b2RheVRhYiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZXZlbkRheVRhYicpO1xuICAgICAgdG9kYXlUYWIuc3R5bGUucG9pbnRlckV2ZW50cyA9IFwiYXV0b1wiO1xuICAgICAgdG9kYXlUYWIuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcblxuICAgICAgcGFnZVRpdGxlID0gXCJUb2RheSdzIFRhc2tzXCI7XG5cbiAgICB9ICBlbHNlIHtcblxuICAgICAgZGlzcGxheVRhc2tzID0gdGFza0xpc3QuZmlsdGVyKHRhc2sgPT4gdGFzay5DYXRhZ29yeSA9PT0gdGFza0FycmF5KTtcbiAgICAgIGNvbnN0IGN1cnJlbnRUYWIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1uYW1lID0gJyR7dGFza0FycmF5fSddYCk7XG4gICAgICBjdXJyZW50VGFiLnN0eWxlLnBvaW50ZXJFdmVudHMgPSBcIm5vbmVcIjtcbiAgICAgIGN1cnJlbnRUYWIuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTsgIFxuXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnByb2plY3RUaXRsZVwiKS5mb3JFYWNoKGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgICAgaWYgKGl0ZW0uZGF0YXNldC5uYW1lICE9PSB0YXNrQXJyYXkpIHtcbiAgICAgICAgICBpdGVtLnN0eWxlLnBvaW50ZXJFdmVudHMgPSBcImF1dG9cIjtcbiAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgICAgIH07XG4gICAgICB9KTtcblxuXG4gICAgICBwYWdlVGl0bGUgPSB0YXNrQXJyYXk7XG5cbiAgICB9XG5cblxuICAgIC8vIERpc3BsYXkgRXZlbnRzL1Rhc2tzIGR1ZSB0b2RheVxuICAgIGZ1bmN0aW9uIGRpc3BsYXkoKSB7XG5cbiAgICAgICAgY29uc3QgdG9kYXlzRXZlbnRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRvZGF5c0V2ZW50cy5pZCA9J3RvZGF5c0V2ZW50cyc7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpbkNvbnRlbnRcIikuYXBwZW5kKHRvZGF5c0V2ZW50cyk7XG4gICAgXG4gICAgICAgIGRpc3BsYXlUYXNrcy5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xuXG4gICAgICAgICAgICBjb25zdCB0YXNrSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgICAgICAgICB0YXNrSXRlbS5jbGFzc0xpc3QuYWRkKCd0YXNrSXRlbScpO1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZGF5c0V2ZW50cycpLnByZXBlbmQodGFza0l0ZW0pO1xuXG5cbiAgICAgICAgICAgIGNvbnN0IHRhc2tUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgICAgICB0YXNrVGl0bGUuY2xhc3NMaXN0LmFkZCgndGFza1RpdGxlJyk7XG4gICAgICAgICAgICB0YXNrVGl0bGUuaW5uZXJUZXh0ID0gYCR7aXRlbS5UaXRsZX1gO1xuXG4gICAgICAgICAgICBjb25zdCB0YXNrVGl0bGVDYXRhZ29yeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgICAgIHRhc2tUaXRsZUNhdGFnb3J5LmlubmVyVGV4dCA9IGAke2l0ZW0uQ2F0YWdvcnl9YDtcbiAgICAgICAgICAgIHRhc2tUaXRsZS5wcmVwZW5kKHRhc2tUaXRsZUNhdGFnb3J5KTtcblxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tJdGVtJykuYXBwZW5kQ2hpbGQodGFza1RpdGxlKTtcblxuXG4gICAgICAgICAgICAvLyBjcmVhdGUgbW9kaWZ5IHRhc2sgYnV0dG9uIGZvciBlYWNoIHRhc2tcbiAgICAgICAgICAgIGNvbnN0IG1vZGlmeVRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgIG1vZGlmeVRhc2sudmFsdWUgPSBgJHtpdGVtWydpZCddfWA7XG4gICAgICAgICAgICBtb2RpZnlUYXNrLmNsYXNzTGlzdC5hZGQoJ21vZGlmeVRhc2snKTtcbiAgICAgICAgICAgIG1vZGlmeVRhc2suaW5uZXJUZXh0ID0gXCJFRElUXCI7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza0l0ZW0nKS5hcHBlbmQobW9kaWZ5VGFzayk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIGNyZWF0ZSBkZWxldGUgYnV0dG9uIGZvciBlYWNoIHRhc2tcbiAgICAgICAgICAgIGNvbnN0IGRlbGV0ZVRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgIGRlbGV0ZVRhc2sudmFsdWUgPSBgJHtpdGVtWydpZCddfWA7XG4gICAgICAgICAgICBkZWxldGVUYXNrLmNsYXNzTGlzdC5hZGQoJ2RlbGV0ZVRhc2snKTtcbiAgICAgICAgICAgIGRlbGV0ZVRhc2suaW5uZXJUZXh0ID0gXCJYXCI7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza0l0ZW0nKS5hcHBlbmQoZGVsZXRlVGFzayk7XG4gICAgICAgIFxuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCBmdXR1cmVIZWFkbGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgICAgIGZ1dHVyZUhlYWRsaW5lLmlubmVyVGV4dCA9IHBhZ2VUaXRsZTtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZGF5c0V2ZW50cycpLnByZXBlbmQoZnV0dXJlSGVhZGxpbmUpO1xuXG4gICAgfTtcblxuICAgIGRpc3BsYXkoKTtcblxuXG4gICAgLy8gRGVsZXRlIHRhc2sgZnJvbSB0YXNrTGlzdCBhcnJheVxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZGVsZXRlVGFza1wiKS5mb3JFYWNoKGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgZGVsZXRlVGFzayhpdGVtLnZhbHVlLCB0YXNrTGlzdCk7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgICAgLy8gTW9kaWZ5IHRhc2sgZnJvbSB0YXNrTGlzdCBhcnJheVxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5tb2RpZnlUYXNrXCIpLmZvckVhY2goZnVuY3Rpb24oaXRlbSkge1xuICAgICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgZWRpdFRhc2soaXRlbS52YWx1ZSwgdGFza0xpc3QpO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIFxuICAgIFxufVxuXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB0b2RheXNFdmVudHMgZnJvbSBcIi4vdG9kYXlzRXZlbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZVRhc2soKSB7XG5cbiAgICAvLyBjcmVhdGUgbmV3IHRhc2sgZm9ybSBcbiAgICBjb25zdCB0YXNrRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRhc2tGb3JtLmNsYXNzTGlzdC5hZGQoJ3Rhc2tGb3JtJyk7XG4gICAgdGFza0Zvcm0uaW5uZXJIVE1MID0gJzxoMj5DUkVBVEUgQSBORVcgVEFTSzwvaDI+PGRpdiBjbGFzcz1cImZvcm1FbGVtZW50IHRhc2tUaXRsZVwiPjxsYWJlbCBmb3I9XCJ0YXNrVGl0bGVcIj5UYXNrPC9sYWJlbD48aW5wdXQgbmFtZSA9XCJ0YXNrVGl0bGVcIiB0eXBlPVwidGV4dFwiPjwvZGl2PjxkaXYgY2xhc3M9XCJmb3JtRWxlbWVudFwiPjxsYWJlbCBmb3I9XCJ0YXNrQ2F0YWdvcnlcIj5Qcm9qZWN0PC9sYWJlbD48aW5wdXQgbmFtZT1cInRhc2tDYXRhZ29yeVwiIHR5cGU9XCJ0ZXh0XCI+PC9kaXY+PGRpdiBjbGFzcz1cImZvcm1FbGVtZW50XCI+PGxhYmVsIGZvcj1cImR1ZURhdGVcIj5EdWUgRGF0ZTwvbGFiZWw+PGlucHV0IHR5cGU9XCJkYXRlXCIgbmFtZT1cImR1ZURhdGVcIj48L2Rpdj48ZGl2IGNsYXNzPVwiZm9ybUVsZW1lbnRcIj48bGFiZWwgZm9yPVwidGFza1RpbWVcIj5UaW1lPC9sYWJlbD48aW5wdXQgdHlwZT1cInRpbWVcIiBuYW1lPVwidGltZVwiPjwvZGl2PjxidXR0b24gaWQ9XCJzdWJtaXRcIj5BZGQgVGFzazwvYnV0dG9uPic7XG5cbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIikucHJlcGVuZCh0YXNrRm9ybSk7XG5cbiAgICAvL2xpc3RlbiBmb3IgdGFzayBmb3JtIHN1Ym1pdFxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3VibWl0XCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBuZXdUYXNrKTtcblxuXG4gICAgY2xhc3MgdGFza0NsYXNzIHtcbiAgICAgIGNvbnN0cnVjdG9yKGlkLCB0aXRsZSwgY2F0YWdvcnksIGRhdGVEdWUsIHRpbWUpIHtcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xuICAgICAgICB0aGlzLlRpdGxlID0gdGl0bGU7XG4gICAgICAgIHRoaXMuQ2F0YWdvcnkgPSBjYXRhZ29yeTtcbiAgICAgICAgdGhpcy5EYXRlRHVlID0gZGF0ZUR1ZTtcbiAgICAgICAgdGhpcy5UaW1lID0gdGltZTtcbiAgICAgIH1cbiAgICB9IFxuXG4gICAgLy9mdW5jdGlvbiB0byBydW4gb24gdGFza0Zvcm0gc3VibWl0XG4gICAgZnVuY3Rpb24gbmV3VGFzayAoKSB7XG4gICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFtuYW1lPSd0YXNrVGl0bGUnXVwiKS52YWx1ZTtcbiAgICAgIGNvbnN0IGNhdGFnb3J5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImlucHV0W25hbWU9J3Rhc2tDYXRhZ29yeSddXCIpLnZhbHVlO1xuICAgICAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFtuYW1lPSdkdWVEYXRlJ11cIikudmFsdWU7XG4gICAgICBjb25zdCB0aW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImlucHV0W25hbWU9J3RpbWUnXVwiKS52YWx1ZTtcbiAgICAgICAgXG4gICAgICBpZiAodGl0bGUgIT09ICcnICYmIGR1ZURhdGUgIT09ICcnKSB7XG4gICAgICAgIGNvbnN0IGlkID0gTWF0aC5yYW5kb20oKTtcbiAgICAgICAgXG4gICAgICAgIC8vIENyZWF0ZSBhIG5ldyB0YXNrIG9iamVjdFxuICAgICAgICBjb25zdCBuZXdBZGRpdGlvbiA9IG5ldyB0YXNrQ2xhc3MoaWQsIHRpdGxlLCBjYXRhZ29yeSwgZHVlRGF0ZSwgdGltZSk7XG5cbiAgICAgICAgLy8gYWRkIG5ldyB0YXNrIHRvIHRhc2tMaXN0IGFycmF5IGFuZCBzZXQgaW4gbG9jYWxTdG9yYWdlXG4gICAgICAgIGNvbnN0IHRhc2tMaXN0ID0gSlNPTi5wYXJzZSh3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0YXNrTGlzdFwiKSk7XG4gICAgICAgIHRhc2tMaXN0LnB1c2gobmV3QWRkaXRpb24pO1xuICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0YXNrTGlzdFwiLCBKU09OLnN0cmluZ2lmeSh0YXNrTGlzdCkpO1xuXG4gICAgICAgIGNvbnN0IHRlc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5Db250ZW50XCIpO1xuICAgICAgICB0ZXN0LnJlbW92ZUNoaWxkKHRlc3QuY2hpbGROb2Rlc1szXSk7XG4gICAgICAgIHRvZGF5c0V2ZW50cygndG9kYXknKTsgXG4gICAgICB9XG4gICAgfVxuICBcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=