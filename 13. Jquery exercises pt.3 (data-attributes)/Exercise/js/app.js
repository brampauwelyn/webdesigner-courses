var tvStatus = false;
var channel = 1;


function toggleOnOffTv(){
  $('.onButton').on('click', function(){
      tvStatus = !tvStatus;
      if(tvStatus){
        $(this).css('background-image', 'none');
        $('.screen').html('<img src="images/'+ channel +'.jpg">');
      }else{
        $(this).css('background-image', 'url("images/knop.jpg")');
        $('.screen').html('');
        channel = 1;
      }
  });
}

function clickButtonsChannels(){
  $('.button').on('click', function(){
    if(tvStatus){
      channel = $(this).attr('data-image');
      $('.screen').html('<img src="images/'+ channel +'.jpg">');
    }
  });
}

function nextChannel(){
  $('.nextChannel').on('click', function(){
    if(tvStatus){
      channel++;
      $('.screen').html('<img src="images/'+ channel +'.jpg">');
    }
  });
}

function previousChannel(){
  $('.previousChannel').on('click', function(){
    if(tvStatus && channel > 1){
      channel--;
      $('.screen').html('<img src="images/'+ channel +'.jpg">');
    }
  });
}

toggleOnOffTv();
clickButtonsChannels();
nextChannel();
previousChannel();
