let createList = () => {
  let elem = "<ul>";
  myLibrary.forEach( (item, index) => {

    for (let key in item) {
      if (key != "read") {
        elem += `<li>${item[key]}</li>`; 
      }
    }

    let bookState = "";
    if (myLibrary[index].read == "Unread") {
      bookState = "unread"; 
    } else { 
      bookState = "read";
    }
    
    elem += "<button class='updateRead " + bookState + "' value='" + index + "'>" + myLibrary[index].read + "</button>";
    elem += "<button class='delete' value='" + index + "'>Delete</button></ul><ul>";
  })
  const page = document.querySelector(".bookList");
  page.innerHTML = elem;
}