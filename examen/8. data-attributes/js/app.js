$('a').on('click', function(e){
  e.preventDefault();
  var text = $(this).attr('data-hello');
  alert(text);
});
