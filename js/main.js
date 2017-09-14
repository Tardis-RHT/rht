$(function(){

// MOBILE MENU
$('#burger').click(function() {
		$('.mobile_menu').toggle();
		$(this).toggleClass('zmdi-menu').toggleClass('zmdi-close');
});
// MOBILE MENU END


// CHANGE LANGUAGE MENU START
	$('.header_lang_main').click(function() {
	// 	$('.header_lang_content').toggle(function(){
  //     $(this).removeClass('invisible');
  //   });
		$('.header_lang_content').removeClass('invisible'); //Not needed if using Toggle
		$('#header_shevron').removeClass('zmdi-chevron-down');
		$('#header_shevron').addClass('zmdi-chevron-up');
		$('.header_lang').mouseleave(function(){
			$('.header_lang_content').addClass('invisible');
			// $('.header_lang_content').css('display', 'none'); //Use it with Toggle
			$('#header_shevron').addClass('zmdi-chevron-down');
			$('#header_shevron').removeClass('zmdi-chevron-up');
		});
	});
// CHANGE LANGUAGE MENU END


	$(window).scroll(function() {
	  if($(this).scrollTop() >= 40) {
		  $('.header_wrapper_big').addClass('stickytop');
		  $('.header_cart_bye-text').addClass('invisible');
		  $('.header_cart_call').removeClass('invisible');
	  }
	  else{
		  $('.header_wrapper_big').removeClass('stickytop');
		  $('.header_cart_bye-text').removeClass('invisible');
		  $('.header_cart_call').addClass('invisible');
	  }
  });

 
	$("#lightgallery").lightGallery({
		escKeyescKey: true,
		mousewheel: false,
	}); 


  $('#lightSlider').lightSlider({
    gallery: false,
    item: 1,
    loop:true,
    slideMargin: 0,
	controls: true,
	adaptiveHeight: false,
	pager: false
});

// ANCHOR SCROLL


$(document).ready(function() {
	$(".main_page_video-scroll").click(function () {
	var elementClick = $(this).attr("href")
	var destination = $(elementClick).offset().top - $('.header_wrapper_big').height() - 100;
	jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 800);
	return false;
	});
	});

//Sertificates Carausel

$('#lightSlider_certificates').lightSlider({
	item:7,
	loop:true,
	slideMove:1,
	easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
	speed:600,
	controls: false,
	prevHtml: '',
	nextHtml: '',
	pager: false
});

});
