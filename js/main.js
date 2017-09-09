$(function(){
  $(window).scroll(function() {
      if($(this).scrollTop() >= 40) {
          $('.header_wrapper_sub').addClass('stickytop');
          $('.header_cart').addClass('invisible');
          $('.header_call-us').removeClass('invisible');
      }
      else{
          $('.header_wrapper_sub').removeClass('stickytop');
          $('.header_cart').removeClass('invisible');
          $('.header_call-us').addClass('invisible');
      }
  });
});