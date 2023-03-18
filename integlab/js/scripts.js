$(document).ready(function() {
    $('.footer-mobile-option__header').each(function(i) {
        $(this).on('click', function() {
            $('.footer-mobile-option__list').eq(i).slideToggle(500);
            $('.footer-mobile-option__arrow').eq(i).toggleClass('footer-mobile-option__arrow--up');
        });
    });
});
var popupAjax = (function() {
    init = function() {
      $(".popup").magnificPopup({
        type: "inline",
        fixedContentPos: true,
        fixedBgPos: true,
        overflowY: "scroll",
        showCloseBtn: false,
        preloader: false,
        midClick: true,
        removalDelay: 300,
        mainClass: "my-mfp-zoom-in"
      });
      $(".popup__close").on( "click", function() {
        $.magnificPopup.close();
      });
    };
  
    return {
      init: init
    }
})();

popupAjax.init();
$(document).ready(function() {
    $('.platform-info-advantages__header').each(function(i) {
        $(this).on('click', function() {
            $('.platform-info-advantages__list').eq(i).slideToggle(500);
            $('.platform-info-advantages__arrow').eq(i).toggleClass('platform-info-advantages__arrow--down');
            $('.platform-info-advantages__header').eq(i).toggleClass('platform-info-advantages__header--active');
        });
    });

    $('.tariffs-comparison-categories__header').each(function(i) {
        $(this).on('click', function() {
            $('.tariffs-comparison-categories-list').eq(i).fadeToggle(700);
            $('.tariffs-comparison-categories__arrow').eq(i).toggleClass('tariffs-comparison-categories__arrow--up');
        });
    });
});

/* begin tabs */
$(document).ready(function() {
    $('.platform__tab').each(function(i) {
        $(this).on('click', function() {
            $('.platform__tab').removeClass('platform__tab--active');
            $('.platform__tab').eq(i).addClass('platform__tab--active');
            $('.platform-info').fadeOut(100);
            $('.platform-info').eq(i).fadeIn(700);
        });
    });
});
/* end tabs */
const orderInputs = document.querySelectorAll('.payment-form-products__input');
if (orderInputs) {
    orderInputs.forEach(item => {
        item.style.width = `${item.value.length * 8 + 16}px`;
    });
}

// валидация для инпутов
const orderFormInputs = document.querySelectorAll('.order-form__input');

if (orderFormInputs) {
    orderFormInputs.forEach(item => {
        item.addEventListener('blur', () => {
            if (item.validity.valueMissing) {
                item.classList.add('order-form__input--error');
            } else if (!item.checkValidity()) {
                item.classList.add('order-form__input--invalid');
            }
        });
        item.addEventListener('focus', () => {
            if (item.classList.contains('order-form__input--error')) {
                item.classList.remove('order-form__input--error');
            }
            if (item.classList.contains('order-form__input--invalid')) {
                item.classList.remove('order-form__input--invalid');
            }
        });
    });
}
// end
const listItems = document.querySelectorAll('.marketplace-catalog-list--mobile__item');
const detailedLists = document.querySelectorAll('.marketplace-catalog-list-details--mobile');

listItems.forEach((item, i) => {
    item.addEventListener('click', () => {
        detailedLists[i].classList.add('marketplace-catalog-list-details--show');
    });
});

$(document).ready(function() {
    $('.marketplace-catalog-list-details--mobile__item').each(function(i) {
        $(this).on('click', function() {
            $('.marketplace-catalog-list-details-products').eq(i).slideToggle(500);
            $('.marketplace-catalog-list-details--mobile__text').eq(i).toggleClass('marketplace-catalog-list-details--mobile__text--active');
        });
    });
});


/* begin tabs */
$(document).ready(function() {
    $('.product-card-descr__tab').each(function(i) {
        $(this).on('click', function() {
            $('.product-card-descr__tab').removeClass('product-card-descr__tab--active');
            $('.product-card-descr__tab').eq(i).addClass('product-card-descr__tab--active');
            $('.product-card-descr-block').fadeOut(100);
            $('.product-card-descr-block').eq(i).fadeIn(700);
        });
    });
});
/* end tabs */

$(document).ready(function() {
    $('.catalog-mobile-filters__popular').each(function(i) {
        $(this).on('click', function() {
            $('.catalog-mobile-filters-list').eq(i).slideToggle(500);
            $('.catalog-mobile-filters__popular').eq(i).toggleClass('catalog-mobile-filters__popular--active');
        });
    });
    $('.catalog-mobile-filters-list').each(function(i) {
        $(this).on('click', function() {
            $('.catalog-mobile-filters-list').eq(i).slideUp(500);
            $('.catalog-mobile-filters__popular').eq(i).removeClass('catalog-mobile-filters__popular--active');
        });
    });
});

const filterList = document.querySelector('.catalog-mobile-filters-list');
const filterInput = document.querySelector('.catalog-mobile-filters__input');

if (filterList) {
    Array.from(filterList.children).forEach(item => {
        item.addEventListener('click', () => {
            filterInput.value = item.innerHTML;
            Array.from(filterList.children).forEach(elem => {
                if (elem.classList.contains('catalog-mobile-filters-list__item--active')) {
                    elem.classList.remove('catalog-mobile-filters-list__item--active');
                }
            });
            item.classList.add('catalog-mobile-filters-list__item--active');
        });
    });
}
// клик на кнопку в нижнем меню
const mheaderButtons = document.querySelectorAll('.mheader__btn');

if (mheaderButtons) {
    mheaderButtons.forEach(item => {
        item.addEventListener('click', () => {
            mheaderButtons.forEach(elem => {
                if (elem.classList.contains('mheader__btn--active')) {
                    elem.classList.remove('mheader__btn--active');
                }
            });
            item.classList.add('mheader__btn--active');
        });
    });
}
// end

// делаем активной иконку каталога в нижнем меню при открытии каталога
const mobileCatalog = document.querySelector('.marketplace-catalog--mobile');
const catalogIcon = document.getElementById('catalog');

if (mobileCatalog) {
    mobileCatalog.addEventListener('click', () => {
        mheaderButtons.forEach(elem => {
            if (elem.classList.contains('mheader__btn--active')) {
                elem.classList.remove('mheader__btn--active');
            }
        });
        catalogIcon.classList.add('mheader__btn--active');
    });
}
// end
// раскрытие выпадающего списка
$(document).ready(function() {
    $('.response-inputs-wrapper').each(function(i) {
        $(this).on('click', function() {
            $('.response-inputs-list').eq(i).slideToggle(500);
            $('.response__input--dropdown').eq(i).toggleClass('response__input--focus');
            $('.response__arrow').eq(i).toggleClass('response__arrow--up');
            if ($('.response__input--dropdown').eq(i).hasClass('response__input--focus')) {
                $('.response__input--dropdown').eq(i).removeClass('response__input--error');
            } else if ($('.response__input--dropdown').eq(i).val().length == 0) {
                $('.response__input--dropdown').eq(i).addClass('response__input--error');
            }
        });
    });
    $('.response-inputs-list').each(function(i) {
        $(this).on('click', function() {
            $('.response-inputs-list').eq(i).slideUp(500);
            $('.response__input--dropdown').eq(i).removeClass('response__input--focus');
            $('.response__arrow').eq(i).removeClass('response__arrow--up');
        });
    });
});
// end

// заполнение инпута вариантом из выпадающего списка
const inputLists = document.querySelectorAll('.response-inputs-list');
const inputSelects = document.querySelectorAll('.response-inputs-select');
const dropdownInputs = document.querySelectorAll('.response__input--dropdown');

if (inputLists) {
    inputLists.forEach((item, i) => {
        Array.from(item.children).forEach((elem, el) => {
            elem.addEventListener('click', () => {
                dropdownInputs[i].value = Array.from(inputSelects[i].children)[el].value;
                dropdownInputs[i].classList.add('response__input--valid');
                dropdownInputs[i].style.paddingTop = '17px';
                dropdownInputs[i].style.paddingBottom = '17px';
            });
        });
    });
}
// end

// валидация для инпутов без выпадающего списка
const responseInputs = document.querySelectorAll('.response__input--static');

if (responseInputs) {
    responseInputs.forEach(item => {
        item.addEventListener('blur', () => {
            if (item.validity.valueMissing) {
                item.classList.add('response__input--error');
            } else {
                if (item.checkValidity()) {
                    item.classList.add('response__input--valid');
                }
                else {
                    item.classList.add('response__input--invalid');
                }
            }
            if (item.value.length == 0 && item.classList.contains('response__input--valid')) {
                item.classList.remove('response__input--valid');
            }
        });
        item.addEventListener('focus', () => {
            if (item.classList.contains('response__input--error')) {
                item.classList.remove('response__input--error');
            }
            if (item.classList.contains('response__input--invalid')) {
                item.classList.remove('response__input--invalid');
            }
            if (item.classList.contains('response__input--valid')) {
                item.classList.remove('response__input--valid');
            }
        });
    });
}
// end
// валидация для инпутов
const calculatorInputs = document.querySelectorAll('.calculator-form__input');

if (calculatorInputs) {
    calculatorInputs.forEach(item => {
        item.addEventListener('blur', () => {
            if (item.validity.valueMissing) {
                item.classList.add('calculator-form__input--error');
            } else if (!item.checkValidity()) {
                item.classList.add('calculator-form__input--invalid');
            }
        });
        item.addEventListener('focus', () => {
            if (item.classList.contains('calculator-form__input--error')) {
                item.classList.remove('calculator-form__input--error');
            }
            if (item.classList.contains('calculator-form__input--invalid')) {
                item.classList.remove('calculator-form__input--invalid');
            }
        });
    });
}
// end
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
            if (counterInputs[i].value < 999) {
                counterInputs[i].value++;
            }
        });
    });
}
// end