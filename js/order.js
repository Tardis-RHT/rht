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
        $('.order_payment-list').hide('400');
        $('.order_pay').css('color', 'rgb(221,221,221)');
        $('.order_done').css('color', 'rgb(17,24,32)');        
    });
});
// CHOOSING DELIVERY METHOD - POST-OFFICE - COURIER
function deliveryChoose(){
    if($('#order_office').is(':checked')){
        $('#oder_post-office_number').show('400');
        $('.oder_deliver-courier').hide('100');       
    }else{
        $('#oder_post-office_number').hide('100');
        $('.oder_deliver-courier').show('400');
    }
};

