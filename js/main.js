$(document).ready(function(){
    var $navBtn = $('.mobile-hd__btn');
    var $nav = $('.mobile-nav');
    var $childNavItem = $('.mobile-nav__item');
    $navBtn.on('click', function(){
        var $this = $(this);
        $this.toggleClass('mobile-hd__btn--active');
        $nav.stop().slideToggle();
    })
    $childNavItem.find('span').on('click', function(){
        var $this = $(this);
        var $parent = $this.parent().parent();
        $parent.toggleClass('active');
        $parent.children('.level2-nav').stop().slideToggle();
        return false;
    });

    var isPhone = (function(){
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    })()

    if(isPhone){
        var $footerNavItem = $('.footer-category__item');
        $footerNavItem.on('click', function(){
            var $this = $(this);
            $this.children('.footer-category__item--ul').slideToggle();
        });
    }
    

    var $headerNav = $('.header-nav');
    var $search = $('.search');
    var $searchBtn = $('.header-search');

    $searchBtn.on('click', function(){
        var $this = $(this);
        $this.removeClass('my-show').addClass('my-hide');
        $headerNav.removeClass('my-show').addClass('my-hide');
        $search.removeClass('my-hide').addClass('my-show');
    })

    $('.search-close').on('click', function(){
        $searchBtn.removeClass('my-hide').addClass('my-show');
        $headerNav.removeClass('my-hide').addClass('my-show');
        $search.removeClass('my-show').addClass('my-hide');
    });


})