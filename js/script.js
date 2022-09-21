const list = document.querySelectorAll('.list');
function activeLink() {
    list.forEach(item => {
        item.classList.remove('active');
    });
    this.classList.add('active');
}
list.forEach(item => {
    item.addEventListener('click', activeLink);
});

const toggle = document.querySelectorAll('.about__item-toggle');
toggle.forEach(item => {
    item.addEventListener('click', () => {
        item.parentElement.classList.toggle('about__active');
    });
});

window.addEventListener('scroll', () => {
    let scrollDistance = window.scrollY;
    document.querySelectorAll('section').forEach((item, i) => {
        if (item.offsetTop - document.querySelector('header').clientHeight <= scrollDistance) {
            list.forEach(item => {
                item.classList.remove('active');
            });
            list[i].classList.add('active');
        }
    });
});