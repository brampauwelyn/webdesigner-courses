var imageCount = $('.slider ul li').length;
var imageWidth = $('.slider ul li').width();
var currentImage = 1;
var circleElement = '<div class="circle"></div>';



  setInterval(function(){
    autoSlide();
  }, 3000);


for (var i = 0; i < imageCount; i++) {
  console.log(i);
  $('.circle-container').append(circleElement);
}

$('.circle').eq(0).addClass('active');

// setInterval(function(){
//   _autoMove();
// }, 1000);
//
// function _autoMove(){
//   if(currentImage === imageCount){
//     currentImage = 0;
//   }
//   var pxValue = -(currentImage * imageWidth);
//   currentImage++;
//   $('.slider ul').css('left', pxValue);
//   $('.circle').removeClass('active');
//   $('.circle:eq('+ (currentImage-1) +')').addClass('active');
// }

function autoSlide(){
  if(currentImage === imageCount){
    currentImage = 0;
  }
  var pxValue = -(currentImage * imageWidth);
  currentImage++;
  $('.slider ul').css('left', pxValue);
  $('.circle').removeClass('active');
  console.log(currentImage);
  $('.circle:eq('+ (currentImage-1) +')').addClass('active');
}

$('.js-toggle').on('click', function(event){
  event.preventDefault();
  var toggleType = $(this).data('nav');
  if(toggleType === 'next'){
    // Doe hier logica voor next
    if(currentImage === imageCount){
      currentImage = 0;
    }
    var pxValue = -(currentImage * imageWidth);
    currentImage++;
  }else if (toggleType === 'prev') {
    currentImage--;
    if(currentImage === 0){
      currentImage = imageCount ;
    }
    var pxValue = -(currentImage-1) * imageWidth;
  }
    $('.slider ul').css('left', pxValue);
    $('.circle').removeClass('active');
    console.log(currentImage);
    $('.circle:eq('+ (currentImage-1) +')').addClass('active');
});
