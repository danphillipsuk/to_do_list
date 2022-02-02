export default (function header() {
    console.log('I am header');

    const header = document.createElement('header');
    header.classList.add('header');
    document.body.appendChild(header);
})()

