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
        $('#order_post-office_number').show('400');
        $('#order_post-office_label').show('400');
        $('.order_deliver-courier').hide('100');       
    }else{
        $('#order_post-office_number').hide('100');
        $('#order_post-office_label').hide('100');        
        $('.order_deliver-courier').show('400');
    }
};


// ENABLE DESABLE BUTTON
// $('#Button').prop('disabled', true);
// $('#Button').prop('disabled', false);

$(document).ready(function(){
    $(".order_input").focusin(function(){
      $("label[for='" + $(this).attr("id") + "']").css('opacity','1'); //show label of clicked item 
    });
    $(".order_input").focusout(function(){
      $("label[for='" + $(this).attr("id") + "']").css('opacity','0');
    });
  }); 
// $(document).ready(function(){
//     $(".show_label").focusin(function(){
//       $("label[for='" + $(this).attr("id") + "']").hide(); //hide label of clicked item 
//     });
//     $(".show_label").focusout(function(){
//       $("label[for='" + $(this).attr("id") + "']").show();
//     });
//   }); 