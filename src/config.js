export default {
  example: "hello",
  taskList: function () {
    return JSON.parse(localStorage.getItem('taskList'));
  },
  mainContent: function () {
    return document.getElementById('mainContent');
  }
}