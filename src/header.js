export default (function header() {
    console.log('I am header');

    const header = document.createElement('header');
    header.classList.add('header');
    document.body.prepend(header);

    const date = new Date();
    const todaysDate = document.createElement('h2');
    todaysDate.classList.add('todaysDate');
    todaysDate.innerText = date;
    document.querySelector('.header').prepend(todaysDate);

})()

