$('.map-item').on('click', function(){
    var type = $(this).data('type')
    console.log(type);
    $('.map-image').attr('src', '../../images/'+type+'.jpg');
})
var mySwiper = new Swiper ('.swiper-container', {
    effect : 'fade',
    loop: true, // 循环模式选项
    
    // 如果需要分页器
    pagination: {
        el: '.swiper-pagination',
    },
    
    // 如果需要前进后退按钮
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
}) 