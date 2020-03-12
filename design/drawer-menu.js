$(function(){
    $('.menu-open').on('click', function(){
        $('#menu-box, .overlay').addClass('on');
    });

    $('.menu-close').on('click', function(){
        $('#menu-box, .overlay').removeClass('on');
    });
});