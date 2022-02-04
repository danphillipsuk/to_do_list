export default (function header() {

    const header = document.createElement('header');
    header.classList.add('header');
    document.body.prepend(header);

    const siteTitle = document.createElement('div');
    siteTitle.classList.add('siteTitle');
    siteTitle.innerText ="To Do Stuff"
    document.querySelector('.header').appendChild(siteTitle);


    let date = new Date();
    const todaysDate = document.createElement('h2');
    todaysDate.classList.add('todaysDate');
    todaysDate.innerText = date.toDateString();;
    document.querySelector('.header').appendChild(todaysDate);



})()

