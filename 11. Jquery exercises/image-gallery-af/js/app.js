var $overlay = $('<div class="overlay"></div>');
var $image = $('<img>');
var $text = $('<p></p>');


$('.gallery a').on('click', function(event){
  console.log(event);
  console.log($(this));
  event.preventDefault();
  $('body').append($overlay);
  var $imagePath = $(this).find('img').attr('src');
  console.log($imagePath);
  $image.attr('src', $imagePath);
  console.log($image);
  $overlay.append($image);
  var $imageText = $(this).attr('alt');
  console.log($imageText);
  $text.text($imageText);
  $overlay.append($text);
  $overlay.on('click', function(){
    $(this).remove();
  });
});
