(function($){
  $(function() {
    $('.menu__icon').on('click', function() {
      $(this).closest('.menu').toggleClass('menu_state_open');
    });
    $('.slider').slick({   
      slidesToShow: 1.5,
      arrows:false,
      dots: true,
  });
  });
})(jQuery);

