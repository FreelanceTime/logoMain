$(document).ready(function(){
    $('.slider-carousel').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        dots: false,
        navText: [],
        responsive:{
            0:{
                items:1,
                dots: true,
                nav: false
            },
            
            480:{
                items:1

            }
                        }
        
 });

 $('.carousel').owlCarousel({
    loop:true,
    margin: 30,
    nav:true,
    dots: false,
    navText: [],
    responsive:{
        0:{
            items:1
            
        },
        
        480:{
            items:2
           
        },
        680: {
            items: 3
        },
        1024: {
            items: 4
        }
     }
    
}); 

/*const iconSearch = document.querySelector('.icons_search');
const body = document.querySelector('body');

iconSearch.addEventListener('click', function (event){
    event.stopPropagation();
    this.classList.add('icons_search--active');
});
body.addEventListener('click', function (event){
    iconSearch.classList.remove('icons_search--active');
});*/
});

 