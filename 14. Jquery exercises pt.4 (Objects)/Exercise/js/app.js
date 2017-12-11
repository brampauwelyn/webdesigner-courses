var data = [
  {
    "year": "1976",
    "title": "Apple 1",
    "text": "It all started with three men - Steve Jobs, Steve Wozniak and Mike Markkula - who together in the late 1970's designed and marketed the Apple II series of computers.",
    "image": "images/apple1.jpg"
  },
  {
    "year": "1984",
    "title": "Apple Macintosh",
    "text": "Steve Jobs introduced the original Macintosh computer on January 24, 1984. This was the company's first mass-market personal computer featuring an integral graphical user interface and mouse",
    "image": "images/apple-macintosh.jpg"
  },
  {
    "year": "1986",
    "title": "Pixar",
    "text": "Jobs establishes pixar after purchasing LucasFilm's computer graphics group for $10 milion",
    "image": "images/pixar.jpg"
  },
  {
    "year": "1998",
    "title": "iMac",
    "text": "iMac makes computers cool!",
    "image": "images/imac.jpg"
  },
  {
    "year": "2001",
    "title": "Say hello to the iPod",
    "text": "Apple launches it's first iPod",
    "image": "images/ipod.jpg"
  },
  {
    "year": "2003",
    "title": "iTunes music store opens",
    "text": "Apple opens it's music store",
    "image": "images/itunes.jpg"
  }
];


  for (var i = 0; i < data.length; i++) {
    var $card = $('<div class="card"></div>');
    var $image = $('<div class="image-holder"><img src="'+ data[i].image +'"</div>');
    var $text = $('<div class="content"><h2>'+ data[i].year +': ' + data[i].title +'</h2><p class="text">'+ data[i].text +'</p></div>');
    $card.append($image, $text);
    $('.container').append($card);
  }
