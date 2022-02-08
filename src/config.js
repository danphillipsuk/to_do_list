export default {
  example: "hello",
  taskList: function () {
    return JSON.parse(localStorage.getItem('taskList'));
  },
  content: function () {
    return document.getElementById('content');
  }
}