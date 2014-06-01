$(document).ready(function(){
    $('.navbar').removeClass('open');
    $('.menu-button').on('click', function(){
        $('.navbar').toggleClass('open');
    });
})