$(function(){
    $('#header-nav-toggle').on('click', function(){
        // $('body').css('background-color', 'red');
        $('.header-nav-touchscreen').addClass('active');
    });

    $('#header-nav-toggle-close').on('click', function(){
        $('.header-nav-touchscreen').removeClass('active');
    });
});