// $(document).ready(function(){
//     $('.carousel__inner').slick({
//         speed: 1200,
//         // adaptiveHeight: true,
//         prevArrow: '<button type="button" class="slick-prev"><img src="../icons/left.svg"></button>',
//         nextArrow: '<button type="button" class="slick-next"><img src="../icons/right.svg"></button>',
//         responsive: [
//             {
//                 breakpoint: 992,
//                 settings: {
//                     dots: true,
//                     arrows: false
//                 }
//             }
//         ]
//     });
// });

const slider = tns({
    container: '.carousel__inner',
    items: 1,
    slideBy: 'page',
    autoplay: true,
    controls: false,
    nav: false,
    speed: 1200
});

document.querySelector('.prev').addEventListener('click', function () {
    slider.goTo('prev');
});

document.querySelector('.next').addEventListener('click', function () {
    slider.goTo('next');
});

$(document).ready(function() {

    $('.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
        $(this)
          .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
          .closest('.container').find('.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    });

    function toggleSlide(item) {
        $(item).each(function(i) {
            $(this).on('click', function(e) {
                e.preventDefault();
                $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
                $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
            });
        });
    }

    toggleSlide('.catalog-item__link');
    toggleSlide('.catalog-item__back');


    function widthDocument() {
        if($(window).width() == 320) {
            active320();
        }  
    }
    function catalogItemWidthMargin(className, marginLeft, width) {
        $(className).each(function(i) {
            $(this).on('click', function(e) {
                e.preventDefault();
                $('.catalog-item__content').eq(i).css({
                    'margin-left':marginLeft,
                    'width':width
                });
            });
        });
    }
    function active320() {
        catalogItemWidthMargin('.catalog-item__link', 0, 50 + '%');
        catalogItemWidthMargin('.catalog-item__back', 20, 'auto');
    }
    widthDocument();

    linkRead();
    
    function linkRead() {
        $('.reviews-client__link').each(function(i) {
            $(this).on('click', function(e) {
                e.preventDefault();
                $('.reviews-client__comment').eq(i).css({
                    'max-height':'500px'
                });
                $('.reviews-client__comment').eq(i).toggleClass('reviews-client__comment_active');

                if(!$('.reviews-client__comment').eq(i).hasClass('reviews-client__comment_active')) {
                    $('.reviews-client__link').eq(i).text("скрыть");
                } else {
                    setTimeout(function() {
                        $('.reviews-client__link').text("раскрыть");
                    }, 50);
                }
            });
        });
    }

});