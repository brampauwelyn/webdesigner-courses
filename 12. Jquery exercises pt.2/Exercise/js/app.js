var tvStatus = false;


function toggleOnOffTv(){
  $('.onButton').on('click', function(){
      tvStatus = !tvStatus;
      if(tvStatus){
        $(this).css('background-image', 'none');
        $('.screen').html('<img src="images/team.jpg">');
      }else{
        $(this).css('background-image', 'url("images/knop.jpg")');
        $('.screen').html('');
      }
  });
}

function youtube(){
  $('.button1').on('click', function(){
    if(tvStatus === true){
      $('.screen').html('<iframe width="490" height="272" src="https://www.youtube.com/embed/zhVgbZdMdb0" frameborder="0" allowfullscreen></iframe>');
    }
  });
}

toggleOnOffTv();
youtube();
