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
  	//  $(this).removeClass('invisible');
  	//  });
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
		easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
		speed:600,
		controls: false,
		pager: false,
		slideMargin: 0,
		responsive: [
			{
				breakpoint:620,
				settings: {
					item:4
					}
			},
			{
				breakpoint:470,
				settings: {
					item:3
					}
			}
		]
	});
});




// VIDEO POPUP
var toHide = document.getElementsByClassName("toHide");
var toShow = document.getElementsByClassName("toShow");
var control_btn = document.getElementById("video-play");

document.cancelFullScreen = document.cancelFullScreen || document.webkitCancelFullScreen || document.mozCancelFullScreen;
function onFullScreenEnter() {
// console.log("Enter fullscreen initiated from iframe");

	for (var i = 0; i < toHide.length; i++){
		toHide[i].style.display="none";
	};

	for (var i = 0; i < toShow.length; i++){
		toShow[i].style.display="block";
	};
};

function onFullScreenExit() {
	// console.log("Exit fullscreen initiated from iframe");

	for (var i = 0; i < toHide.length; i++){
		toHide[i].style.display="block";
	};

	for (var i = 0; i < toShow.length; i++){
		toShow[i].style.display="none";
		toShow[i].style.visibility="hidden";
	};	
};

// Note: FF nightly needs about:config full-screen-api.enabled set to true.
function enterFullscreen(id) {
	onFullScreenEnter(id);
	var el =  document.getElementById(id);
	var onfullscreenchange =  function(e){
	var fullscreenElement = document.fullscreenElement || document.mozFullscreenElement || document.webkitFullscreenElement;
	var fullscreenEnabled = document.fullscreenEnabled || document.mozFullscreenEnabled || document.webkitFullscreenEnabled;
	console.log( 'fullscreenEnabled = ' + fullscreenEnabled, ',  fullscreenElement = ', fullscreenElement, ',  e = ', e);
	}
	el.addEventListener("webkitfullscreenchange", onfullscreenchange);
	el.addEventListener("mozfullscreenchange",     onfullscreenchange);
	el.addEventListener("fullscreenchange",             onfullscreenchange);
	if (el.webkitRequestFullScreen) {
	el.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
	} else {
	el.mozRequestFullScreen();
	}
	document.querySelector('#'+id + ' button').onclick = function(){
	exitFullscreen(id);
	}
}

function exitFullscreen(id) {
	onFullScreenExit(id);
	document.cancelFullScreen();
	document.querySelector('#'+id + ' button').onclick = function(){
	enterFullscreen(id);
	}
}

function _fullscreenEnabled() {
	// FF provides nice flag, maybe others will add support for this later on?
	if(window['fullScreen'] !== undefined) {
		console.log('1');
		return window.fullScreen;
	}
	// 5px height margin, just in case (needed by e.g. IE)
	var heightMargin = 5;
	if($.browser.webkit && /Apple Computer/.test(navigator.vendor)) {
		// Safari in full screen mode shows the navigation bar, 
		// which is 40px  
		heightMargin = 42;
		console.log('2');
	}
	return screen.width == window.innerWidth &&
		Math.abs(screen.height - window.innerHeight) < heightMargin;
}

//VIDEO CONTROLS	
	
function vidplay() {
	var video = document.getElementById("main_video-video");
	var button = document.getElementById("video-play");
	if (video.paused) {
		video.play();
		button.textContent = "| |";
	} else {
		video.pause();
		button.textContent = ">";
	}
}

$('#main_video-video').mousemove(function(){
	$('#video-play').css('visibility', 'visible');
	$('#video-play').delay(2000).fadeOut();
	$('#main_video-video').mousemove(function(){
		$('#video-play').fadeIn();	
		$('#video-play').delay(1500).fadeOut();
	});		
});
