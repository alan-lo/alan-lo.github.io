$(document).ready(function(){
    $(`a[href="#projects"]:nth-child(1) > div.down-arrow`).on('mouseenter', function( event){
        $(this).addClass('down-arrow-circle-hover')
        $('a[href="#projects"]:nth-child(1) i.fa.fa-angle-down.fa-3x').addClass('down-arrow-hover')
    });
    $(`a[href="#projects"]:nth-child(1) > div.down-arrow`).on('mouseleave', function( event){
        $(this).removeClass('down-arrow-circle-hover')
        $('a[href="#projects"]:nth-child(1) i.fa.fa-angle-down.fa-3x').removeClass('down-arrow-hover')
    });

    $(window).scroll(function () {
    if ($(window).scrollTop() > 51) {
      $('#sticky-nav').addClass('navbar-fixed');
    }
    if ($(window).scrollTop() < 51) {
      $('#sticky-nav').removeClass('navbar-fixed');
    }
  });
});
