var $overlay = $('<div class="overlay"></div>');
var $image = $('<img>');
var $imageText = $('<p></p>');

// 1. Klikken op image
$('.gallery a').on('click', function(event){
  event.preventDefault();
  // 2. Overlay komt te voorschijn
  $('body').append($overlay);
  // 3. Vraag source van huidige image
  var $imageSource = $(this).find('img').attr('src');
  // 4. Voeg nieuwe image toe en pas de src aan
  $image.attr("src", $imageSource);
  // 5. Voeg image toe aan overlay
  $overlay.append($image);
  // 6. Vraag tekst op van huidige link
  var $caption = $(this).attr('alt');
  // 7. Voeg die tekst toe aan p element
  $imageText.text($caption);
  // 8. Voeg image text toe aan overlay;
  $overlay.append($imageText);
  $('.overlay').on('click', function(){
    $(this).remove();
  });
});



// 5. Wanneer geopend en klik ergens random dan sluit de lightbox
