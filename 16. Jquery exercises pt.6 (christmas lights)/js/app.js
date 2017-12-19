var red = 0;
var green = 0;
var blue = 0;

// Longversion
function changeColor(){
  $('.color-slider').on('input change', function(){
    if($(this).hasClass('red')){
      red = $(this).val();
    }else if($(this).hasClass('green')){
      green  = $(this).val();
    }else if($(this).hasClass('blue')){
      blue  = $(this).val();
    }
    $('.title').css('color','rgb('+ red + ',' + green + ',' + blue + ')');
  });
}

// Shortversion
function changeColorShort(){
  $('.color-slider').on('input change', function(){
    $('.title').css('color','rgb('+ $('.red').val() + ',' + $('.green').val() + ',' + $('.blue').val() + ')');
  });
}

changeColor();
