
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

	// STCIKY HEADER
	$(window).scroll(function() {
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

	
	// FURNITURA VIDEO
	$('#videoFurnitura').lightGallery({
		videoMaxWidth: '100%',
		autoPlay: true,
		controls: false,
		counter: false,
		download: false,
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
			var destination = $(elementClick).offset().top - $('.header_wrapper_big').height() + 1;
			$("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 800);
			return false;
			});
		});


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

	//Sertificates Carousel
	$('#lightSlider_certificates').lightSlider({
		item:6,
		loop:false,
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

	$("#lightSlider_filenka").lightSlider({
		gallery: false,
		item: 1,
		loop: false,
		slideMargin: 0,
		controls: true,
		// adaptiveHeight: true,
		pager: true,
		// autoWidth: true
	});
	$('#video_panels').lightGallery({
		videoMaxWidth: '100%',
		autoPlay: true,
		controls: false,
		counter: false,
		download: false,
	}); 

});


// DROPDOWN MENU IN FURNITURA
/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}
// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
// END OF DROPDOWN MENU IN FURNITURA


// RANGE SLIDER IN FURNITURA
var rangeSlider = function(){
	var slider = $('.range-slider'),
		range = $('.range-slider__range'),
		value = $('.range-slider__value');
	slider.each(function(){
	  value.each(function(){
		var value = $(this).prev().attr('value');
		$(this).html(value);
	  });
	  range.on('input', function(){
		$(this).next(value).html(this.value);
	  });
	});
  };
rangeSlider();
//END OF RANGE SLIDER

$(function($){
	if(document.getElementById('tel')){
		// console.log('exist');
		$("#tel").mask("+380 (99) 999 - 99 - 99", {completed:function(){checkTelValidity()}});
	}
 });
 function checkTelValidity(){
	var tel = document.getElementById('tel');
	var telBtn = document.getElementById('tel-btn');
	// telBtn.setAttribute('disabled', 'disabled');
	
	tel.checkValidity();
	// console.log(tel.checkValidity());
	// console.log(tel.value);
	// if(tel.value == '+380 (__) ___ - __ - __'){
	// 	console.log('empty');
	// }
	
	if (tel.checkValidity() === false || tel.value == ""){
		// console.log('invalid');
		telBtn.setAttribute('disabled', 'disabled');
	   }
	else if (tel.checkValidity() === true){
		// console.log('valid');
		telBtn.removeAttribute('disabled', 'disabled');
	   }
	//    telBtn.setAttribute('disabled', 'disabled');
	
 }
 $(".form_callback").trigger('reset');



// SHOW HIDE THE adjusting-plate BLOCK BY CLICKIN CHECKBOX
function toggle() {
	var div = document.getElementById('adjusting-plate');
	if(this.checked)
	  div.style.display = 'block';
	else
	  div.style.display = 'none'
}

if(document.getElementById('adjusting-plate_checkbox')){
	document.getElementById('adjusting-plate_checkbox').onchange = toggle;
}

// END OF SHOW HIDE THE adjusting-plate BLOCK BY CLICKIN CHECKBOX


// SLIDER ON FURNITURA-SET PAGE
$(document).ready(function() {
		var sliderFur = $('#fur_ben').lightSlider({
		loop:true,
		item: 1,
		slideMove: 1,
		keyPress: true,
		controls: false,
		pager: false,
		onSliderLoad: function() {
				$('#fur_ben').removeClass('cS-hidden');
		},
		onBeforeSlide: function (el) {
			$('div.fur_pager').removeClass('fur_pager_active');
			$('#fur_pager'+el.getCurrentSlideCount()).addClass('fur_pager_active');
		},
		}); 
		$('#goToPrevSlide').on('click', function () {
			sliderFur.goToPrevSlide();
		});
		$('#goToNextSlide').on('click', function () {
			sliderFur.goToNextSlide();
		});
		$('#fur_pager1').on('click', function () {
			sliderFur.goToSlide(1);
		});
		$('#fur_pager2').on('click', function () {
			sliderFur.goToSlide(2);
		});	
		$('#fur_pager3').on('click', function () {
			sliderFur.goToSlide(3);
		});
});
// END OF SLIDER ON FURNITURA-SET PAGE


// SLIDER AND GALLERY FOR FEEDBACK SECTION
$(document).ready(function() {
	var sliderFeedback = $('#feedbacksl').lightSlider({
	loop:true,
	item: 1,
	slideMove: 1,
	keyPress: true,
	controls: false,
	pager: false,
	responsive : [
		{
			breakpoint: 768,
			settings:{
				pager: true,					
			}
		},
	],
	onBeforeSlide: function (el) {
		$('#current').text(el.getCurrentSlideCount());
	},
	onSliderLoad: function() {
			$('#feedbacksl').removeClass('cS-hidden');
			$('#total').text(sliderFeedback.getTotalSlideCount());
	},
	});
	$('#goToPrevSlideFeedback').on('click', function () {
		sliderFeedback.goToPrevSlide();
	});
	$('#goToNextSlideFeedback').on('click', function () {
		sliderFeedback.goToNextSlide();
	});
	$('.feedbacklg').lightGallery({
		escKeyescKey: true,
		mousewheel: false,
		download: false,
	});
});
// END OF SLIDER AND GALLERY FOR FEEDBACK SECTION

//TOOGLE BUTTONS MINI-MAXI ON PAGE AUTOMATICA-CARD

function maximize(){
	
		if($('#maxi').is(':checked')){
			$('.maxi').css('visibility', 'visible');
		}else{
			$('.maxi').css('visibility', 'hidden');
		}
};

