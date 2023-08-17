document.addEventListener("DOMContentLoaded", () => {

    // телефонная маска
    const inputTel = document.querySelectorAll('input[type="tel"]')

    if (inputTel) {
        inputTel.forEach(input => {
            Inputmask("+7 (999) 999-99-99", {showMaskOnHover: false}).mask(input);
        })
    }

    // меню в мобильной версии
    const mobileHamburger = document.querySelector('.header-bottom-buttons__menu');
    const mobileNav = document.querySelector('.header-nav');
    const overlay = document.getElementById('overlay');

    if (mobileHamburger) {
        mobileHamburger.addEventListener('click', () => {
            mobileNav.classList.add('header-nav--active');
            overlay.style.display = 'block';
        });
    }

    const closeButton = document.querySelector('.header-nav__close');

    if (closeButton) {
        closeButton.addEventListener('click', () => {
            mobileNav.classList.remove('header-nav--active');
            overlay.style.display = 'none';
        });
    }

    // табы
    const mediaTabs = document.querySelectorAll('.tab-slide');
    const mediaContent = document.querySelectorAll('.tab-content');
    if (mediaTabs) {
        mediaTabs.forEach(item => {
            item.addEventListener('click', () => {
                mediaTabs.forEach(elem => {
                    elem.classList.remove('active');
                });
                item.classList.add('active');
                const elementAttribute = item.getAttribute('data-id');
                mediaContent.forEach(elem => {
                    if (!elem.classList.contains('hide')) {
                        elem.classList.add('hide');
                    }
                });
                document.getElementById(elementAttribute).classList.remove('hide');
            });
        });
    }

    // выбор категории в мобильной версии
    const selectButton = document.querySelector('.category-select__btn');
    const categoryList = document.querySelector('.category-list');

    if (selectButton) {
        selectButton.addEventListener('click', () => {
            categoryList.classList.add('category-list--active');
            overlay.style.display = 'block';
        });
    }

    const categoriesCloseButton = document.querySelector('.category-list__close');

    if (categoriesCloseButton) {
        categoriesCloseButton.addEventListener('click', () => {
            categoryList.classList.remove('category-list--active');
            overlay.style.display = 'none';
        });
    }

    if (overlay) {
        overlay.addEventListener('click', () => {
            mobileNav.classList.remove('header-nav--active');
            categoryList.classList.remove('category-list--active');
            overlay.style.display = 'none';
        });
    }

    // раскрытие выпадающего списка
    const categories = document.querySelectorAll('.category-list-blocks__item');

    if (categories) {
        categories.forEach((item, i) => {
            const itemHeader = item.querySelector('.category-list-blocks__header');
            const dropdown = item.querySelector('.category-list-blocks-text');
            itemHeader.addEventListener('click', () => {
                if (item.classList.contains('category-list-blocks__item--active')) {
                    dropdown.style.maxHeight = 0;
                } else {
                    dropdown.style.maxHeight = dropdown.scrollHeight + 'px';
                }
                item.classList.toggle('category-list-blocks__item--active');
            });
        });
    }

    // слайдеры
    var mainSlider = new Swiper('.main-slider', {
        slidesPerView: 1,
        spaceBetween: 10,
        speed: 800,
        pagination: {
            el: ".main-pagination",
            type: "bullets",
            clickable: true
        }
    });

    var productSlider = new Swiper('.product-slider', {
        direction: 'horizontal',
        slidesPerView: 1,
        spaceBetween: 10,
        speed: 800,
        navigation: {
            nextEl: '.product-button-next',
            prevEl: '.product-button-prev',
        },
        thumbs: {
            autoScrollOffset: 1,
            swiper: {
                el: '.product-slider--thumbs',
                slidesPerView: 4,
                spaceBetween: 20,
                breakpoints: {
                    500: {
                        slidesPerView: 5,
                        spaceBetween: 8
                    },
                    744: {
                        slidesPerView: 4,
                        spaceBetween: 20
                    }
                }
            }
        }
    });

    var tabSlider = new Swiper('.tab-slider', {
        direction: 'horizontal',
        slidesPerView: 'auto'
    });
});