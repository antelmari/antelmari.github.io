document.addEventListener("DOMContentLoaded", () => {
    
    // меню в мобильной версии

    const mobileHamburger = document.querySelector('.header__menu');
    const mobileNav = document.querySelector('.header-nav');

    if (mobileHamburger) {
        mobileHamburger.addEventListener('click', () => {
            mobileNav.classList.toggle('header-nav--active');
            mobileHamburger.classList.toggle('header__menu--close');
        });
    }

    const headerLinks = document.querySelectorAll('.navigation ul li a');

    headerLinks.forEach(item => {
        item.addEventListener('click', () => {
            if (mobileNav.classList.contains('header-nav--active')) {
                mobileNav.classList.remove('header-nav--active');
                mobileHamburger.classList.remove('header__menu--close');
            }
        });
    });

    // закрытие попапа по клику

    const popupBtn = document.querySelector('.popup-favorites-products-buttons__order');

    popupBtn.addEventListener('click', () => {
        document.querySelector('.is-close').dispatchEvent(new Event('click'));
    });

    // фото на главной следует за курсором
    
    const mainSection = document.querySelector('.main-section');
    const mainImg = document.querySelector('.main__img');

    if (mainImg) {
        mainSection.onmousemove = function(e) {
            mainImg.style.bottom = mainSection.clientHeight - e.pageY - (mainImg.clientHeight * 0.5) + 'px';
            if ((e.pageX > mainImg.clientWidth * 0.5) && (mainSection.clientWidth - e.pageX - (mainImg.clientWidth * 0.5) > 0)) {
                mainImg.style.right = mainSection.clientWidth - e.pageX - (mainImg.clientWidth * 0.5) + 'px';
            }
        }
    }

    // уменьшение или увеличение значений в инпутах (кол-во товаров в корзине)

    const decrementButtons = document.querySelectorAll('.decrement');
    const incrementButtons = document.querySelectorAll('.increment');
    const counterInputs = document.querySelectorAll('.value');

    if (decrementButtons) {
        decrementButtons.forEach((item, i) => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                if (counterInputs[i].value > 0) {
                    counterInputs[i].value--;
                }
            });
        });
    }

    if (incrementButtons) {
        incrementButtons.forEach((item, i) => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                if (counterInputs[i].value < 99) {
                    counterInputs[i].value++;
                }
            });
        });
    }
});