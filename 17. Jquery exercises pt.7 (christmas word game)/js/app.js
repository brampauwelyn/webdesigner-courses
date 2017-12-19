var wordList = ["rendier"];
var splittedWord = wordList[0].split('');

for(var i = 0; i < splittedWord.length; i++){
  $('.word-placeholder').append('<div class="character"></div>');
  $('.word-placeholder').css('width', splittedWord.length * 64 + 'px');
}

$('button').on('click', function(){
  var userInput = $('input').val();
  for (var i = 0; i < splittedWord.length; i++) {
    if(userInput === splittedWord[i]){
      console.log('true');
    }
  }
});
