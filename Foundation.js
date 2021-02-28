const toggler = document.querySelector('.nav-toggle');
const menu = document.querySelector('.menu');

toggler.addEventListener('click', function() {
    // if (links.classList.contains('show-links')) {
    //     links.classList.remove('.show-links');
    // } else {
    //     links.classList.add('show-links');
    // }
    menu.classList.toggle('show-menu');
});