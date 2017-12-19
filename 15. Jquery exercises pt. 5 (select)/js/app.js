$('#repeat-password').on('blur', function(){
  var passValue = $('#password').val();
  console.log(passValue);
  var repeatPassValue = $('#repeat-password').val();
  console.log(repeatPassValue);
  if(passValue !== repeatPassValue){
    // Geef dan error
    console.log('geef error');
    $('#repeat-password, #password').css('border', '1px solid red');
    $('body').append('<p class="error">Beide wachtwoorden moeten identiek zijn</p>');
  }
});
