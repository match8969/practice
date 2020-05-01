$(function(){
    $('.modal-open').on('click', function(){
        $('#modal-box, .overlay').addClass('on');
    });

    $('.modal-close').on('click', function(){
        $('#modal-box, .overlay').removeClass('on');
    });
});