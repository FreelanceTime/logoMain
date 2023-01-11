
//1 для меню бургера в шапке
    $('.header__burger').click(function (event) {
        $('.header__burger,.menu__body' ).toggleClass('active');
    });

    $('.menu-page__burger').click(function (event) {
        $('.menu-page__burger').toggleClass('active');//крестик для бургера в боковом меню
        $('.menu-page__body').slideToggle("slow");//боковое меню выезжает вниз 
    });
    

    if (document.documentElement.clientWidth < 992) {
        let menuParents = document.querySelectorAll('.menu-page__parent a');
        for (index = 0; index < menuParents.length; index++) {
            const menuParent = menuParents[index];
            menuParent.addEventListener("click", function (e) {
                menuParent.parentElement.classList.toggle('active');
                e.preventDefault();
            });
        }
    } else {
        let menuParents = document.querySelectorAll('.menu-page__parent');
        for (index = 0; index < menuParents.length; index++) {
            const menuParent = menuParents[index];
            menuParent.addEventListener("mouseenter", function (e) {
                menuParent.classList.add('active');
            });
            menuParent.addEventListener("mouseleave", function (e) {
                menuParent.classList.remove('active');
            });
        }
    }
/*let menuPageBurger = document.querySelectorAll('.menu-page__burger');
let menuPageBody = document.querySelectorAll('.menu-page__body');
menuPageBurger.addEventListener("click", function(e) {
    menuPageBurger.classList.toggle('active');

});*/
//ниже простой способ повернуть стрелку в строке "везде"

$('.search-page__title').click(function (event) {
    $('.search-page__select').toggleClass('active');//переворачивается стрелка
    $('.categories-search').slideToggle("slow");//меню для поиска выезжает вниз 
}); 

//ниже для выбора товаров из выпадающего меню под "Везде"

let searchSelect = document.querySelector('.search-page__title');
let checkboxCategories = document.querySelectorAll('.categories-search__checkbox');
for (let index = 0; index < checkboxCategories.length; index++) {
    const checkboxCategory = checkboxCategories[index];
    checkboxCategory.addEventListener("change", function (e) {
        checkboxCategory.classList.toggle('active');
        let checkboxActiveCategories = document.querySelectorAll('.categories-search__checkbox.active');
        if (checkboxActiveCategories.length > 0) {
            searchSelect.classList.add('categories');
            let searchQuantity = searchSelect.querySelector('.search-page__quantity');
            searchQuantity.innerHTML = searchQuantity.getAttribute('data-text') + ' ' + checkboxActiveCategories.length;
        } else {
            searchSelect.classList.remove('categories');
        }
    });
}

const swiper = new Swiper('.products-slider__items', {
    // Optional parameters
    //direction: 'vertical',
    loop: true,
  
    // If we need pagination
    pagination: {
        //el: '.swiper-pagination',
        el: '.products-slider__info',
        type: 'fraction'
        
    },
  
    // Navigation arrows
    /*navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },*/
    navigation: { //Я ПРОПИСАЛА ТЕ КЛАССЫ, КОТОРЫЕ В МОЕМ КОДЕ ДЛЯ СТРЕЛОК
        nextEl: '.products-slider__arrow-next',
        prevEl: '.products-slider__arrow-prev',
      },
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
});
new Swiper('.brands-slider__swiper', {
    slidesPerView: 5,
    slidesPerView: 1,
  spaceBetween: 10,
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      //spaceBetween: 10
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 4,
      spaceBetween: 40
      },
      992: {
        slidesPerView: 5,
        spaceBetween: 50
      }
  },
        navigation: { //Я ПРОПИСАЛА ТЕ КЛАССЫ, КОТОРЫЕ В МОЕМ КОДЕ ДЛЯ СТРЕЛОК
        nextEl: '.brands-slider__arrow-prev',
        prevEl: '.brands-slider__arrow-next',
    },
   
});   
