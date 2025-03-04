$(document).ready(function(){
    /* Carousel */
        var swiper = new Swiper(".mySwiper", {
            loop: true,
            autoplay : true,
            effect: 'fadeOut',
            fadeEffect: {
                crossFade: true
            },
            pagination: {
                el: ".swiper-pagination",                
                dynamicBullets: true,
            },
        });
    /* End Carousel */

    /* matchHeight */
        $('.realImg section__img--item').matchHeight();
        $('.section__ttl ').matchHeight();
        // $('.seller .section__title p').matchHeight();
    /* End matchHeight */
        $('.navbar-nav>li>a').on('click', function(){
            $('.navbar-collapse').collapse('hide');
        });     
        $('.navbar-nav li a.nav-item').click(function(e) {
            $('.navbar-nav li.active').removeClass('active');

            var $parent = $(this).parent();
            $parent.addClass('active');
            e.preventDefault();
        });   
        $("a.nav-link").on('click', function(e) {
            e.preventDefault();
            var target = $(this).attr('href');
            var pos = 0;
            var headerHeight = Math.ceil($("header").height());
            pos = $(target).offset().top - headerHeight;
            $('html,body').stop().animate({
                'scrollTop': pos
            }, {
                'duration': 500,
                'easing': 'swing'
            });
            return false;
        });
        if ($('#backTop').length) {
            var scrollTrigger = 500, // px
                backToTop = function () {
                var scrollTop = $(window).scrollTop();
                    if (scrollTop > scrollTrigger) {
                        $('#backTop').addClass('showed');
                    } else {
                        $('#backTop').removeClass('showed');
                    }
                };
                backToTop();
                $(window).on('scroll', function () {
                    backToTop();
                });
        }  
        var sticky = $('header').outerHeight()
        scroll = $(window).scrollTop()
        if ( $(window).scrollTop() > sticky) {
            $('.sticky').addClass('bg-black')
            $('ul.navbar-nav.mr-auto li a').addClass('text-white')
        } else {
            $('.sticky').removeClass('bg-black')
            $('ul.navbar-nav.mr-auto li a').removeClass('text-white')
        }  
        if ( $(window).width() < 768) {
            $('header').removeClass('sticky')
        }   
});
$(window).scroll(function() {
    var sticky = $('header').outerHeight()
    scroll = $(window).scrollTop()
    if ( $(window).scrollTop() > sticky) {
        $('.sticky').addClass('bg-black')
        $('ul.navbar-nav.mr-auto li a').addClass('text-white')
    } else {
        $('.sticky').removeClass('bg-black')
        $('ul.navbar-nav.mr-auto li a').removeClass('text-white')
    }
});