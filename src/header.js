export default (function header() {

    const header = document.createElement('header');
    header.classList.add('header');
    document.body.prepend(header);

    const headerContainer = document.createElement('div');
    headerContainer.classList.add('headerContainer');
    header.prepend(headerContainer);

    const siteTitleContainer = document.createElement('div');
    const siteTitle = document.createElement('h1');
    siteTitle.classList.add('siteTitle');
    siteTitle.innerText ="whatKnot"
    siteTitleContainer.appendChild(siteTitle);
    document.querySelector('.headerContainer').appendChild(siteTitle);


    let date = new Date();
    const todaysDate = document.createElement('h2');
    todaysDate.classList.add('todaysDate');
    todaysDate.innerText = date.toDateString();;
    document.querySelector('.headerContainer').appendChild(todaysDate);



})()

