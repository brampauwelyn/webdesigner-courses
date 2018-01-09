var imageCount = $('.slider ul li').length;
var imageWidth = $('.slider ul li').width();
var currentImage = 1;

$('.js-toggle').on('click', function(event){
  event.preventDefault();
  var toggleType = $(this).data('nav');
  if(toggleType === 'next'){
    // Doe hier logica voor next
    if(currentImage === imageCount){
      currentImage = 0;
    }
    var pxValue = -(currentImage * imageWidth);
    $('.slider ul').css('left', pxValue);
    currentImage++;
  }else if (toggleType === 'prev') {
    currentImage--;
    if(currentImage === 0){
      currentImage = imageCount ;
    }
    var pxValue = -(currentImage-1) * imageWidth;
    $('.slider ul').css('left', pxValue);
  }
});
