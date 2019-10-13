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

    $('.owl-carousel').owlCarousel({
        responsive:{
            0:{
                items:1
            }
        }
    })



    var location = ["繁体中文(HK)","繁体中文(TW)","Singapore","Malaysia","Philippines","India","Indonesia","GlobalHome","MENA","Poland","Ukraine","Russia","Vietnam","Mexico","Korea","Egypt","Thalland","Spain","UnitedStates","ltaly","France","Bangladesh","UnitedKingdom","Chile","Nepal","Sril anka","Turkey","Netherlands","Brazil","中文站"];
    var locationArr = [];
    locationArr.push('<div class="location">');
    locationArr.push('<div class="location-mask"></div>');
    locationArr.push('<div class="location-main bg-white">');
    locationArr.push('<div class="flex flex-item-center location-main__hd">');
    locationArr.push('<div class="location-main__name flex-item">Select location</div>');
    locationArr.push('<div class="location-main__close"></div>');
    locationArr.push('</div>');
    locationArr.push('<div class="pd30 text-center">');
    locationArr.push('<div class="location-main__title">Welcome to Emperor Tech.com</div>');
    locationArr.push('<div class="location-main__intro">Please select location</div>');
    locationArr.push('<div class="location-main__box">');
    for(var i = 0 ;i<location.length;i++){
        locationArr.push('<div class="location-item"><div class="location-item__name">'+location[i]+'</div></div>');
    }
    locationArr.push('</div>');
    locationArr.push('</div>');
    locationArr.push('</div>');
    locationArr.push('</div>');
    
    $('body').on('click', '.location-main__close', function(){
        $('.location').remove();
    });

    var $location = $('#location');
    $location.on('click', function(e){
        $('body').append(locationArr.join(''));
    });

    new WOW({
        mobile: false
    }).init();

})