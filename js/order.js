$(document).ready(function(){

    $('#orderGo').click(function(){
        $('.order_payment-list').show('400');
        $('.order_make_comment').hide('400');
        $('.order_delivery_form').hide('400');
        $('#orderGo').hide('400');
        $('.order_delivery').css('color', 'rgb(221,221,221)');
        $('.order_pay').css('color', 'rgb(17,24,32)');
        
    });

    $('.order_payment_method').click(function(){
        $('.order_done_message').show('400');
        $('.order_payment-list').hide('300');
        $('.order_pay').css('color', 'rgb(221,221,221)');
        $('.order_done').css('color', 'rgb(17,24,32)');        
    });











//TOOGLE BUTTONS MINI-MAXI ON PAGE AUTOMATICA-CARD

// function maximize(){
	
// 		if($('#maxi').is(':checked')){
// 			$('.maxi').css('visibility', 'visible');
// 		}else{
// 			$('.maxi').css('visibility', 'hidden');
// 		}
// };




});



