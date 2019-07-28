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
})