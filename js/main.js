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
  //   $(this).removeClass('invisible');
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

	// STCIKY HEADER$
	$(function(){
	  if($(this).scrollTop() >= 40) {
		  $('.header_wrapper_big').addClass('stickytop');
		  $('.header_cart_bye-text').addClass('invisible');
		  $('.header_cart_call').removeClass('invisible');
		  $('.header_cart_buy').css('padding','0 0 0 20px');
	  }
	  else{
		  $('.header_wrapper_big').removeClass('stickytop');
		  $('.header_cart_bye-text').removeClass('invisible');
		  $('.header_cart_call').addClass('invisible');
	  }
	});
	// END OF STCIKY HEADER
 
	// LightGallery call and settings
	$("#lightgallery").lightGallery({
		escKeyescKey: true,
		mousewheel: false
	}); 
	
	
	// $(window).resize(function () {
	// 	var width = $('body').outerWidth()
	// 	if ($(window).width() < 620){
	// 		$('.main_benefits_container').attr('id', 'lightSlider');
	// 	}
	// 	else {
	// 		$('.main_benefits_container').removeAttr('id', 'lightSlider');
	// 	}
	// });
	// }); 

// ANCHOR SCROLL


$(document).ready(function() {
	$(".main_page_video-scroll").click(function () {
		var elementClick = $(this).attr("href");
		var destination = $(elementClick).offset().top - $('.header_wrapper_big').height() - 100;
		$("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 800);
		return false;
		});
	});

//Sertificates Carousel
	

	// LightSlider call and settings
	$("#lightSlider").lightSlider({
		gallery: false,
		// item: 1,
		loop: true,
		slideMargin: 0,
		controls: true,
		adaptiveHeight: true,
		pager: false,
		autoWidth: true
	});

$('#lightSlider_certificates').lightSlider({
	item:6,
	loop:true,
	slideMove:1,
	easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
	speed:600,
	controls: false,
	prevHtml: '',
	nextHtml: '',
	pager: false,
	slideMargin: 0
});

});

// $(document).ready(function() {
// 		var sld = function() {
// 		var slider = $('#lightSlider').lightSlider();
// 		if ($(window).width() < 620) {
// 					slider.lightSlider({
// 					gallery: false,
// 					item: 1,
// 					loop: true,
// 					slideMargin: 0,
// 					controls: true,
// 					adaptiveHeight: true,
// 					pager: false,
// 					autoWidth: true
// 				});
// 		} else {
// 		slider.destroy();
// 		}
// 		};
// 	sld();
// 	$(window).resize(sld);
// });
