$(document).ready(function(){
   
    for(var index = 1;index <= 4; index++){
        $('#nomor').append("<li></li>");
        $('li:nth-child('+index+')').hide(0).delay(500).fadeIn(index * 3000);
    }

})