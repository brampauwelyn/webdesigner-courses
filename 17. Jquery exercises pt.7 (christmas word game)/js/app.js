var wordList = ["rendier"];
var splittedWord = wordList[0].split('');
var score = 0;
var guessedCharacters = 0;

function startGame(){
  $('.word-placeholder').empty();
  for(var i = 0; i < splittedWord.length; i++){
    $('.word-placeholder').append('<div id="character'+i+'" class="character"></div>');
    $('.word-placeholder').css('width', splittedWord.length * 64 + 'px');
  }
}

function checkCharacter(){
  $('.submit-character').on('click', function(){
    var userInput = $('input').val();
    for (var i = 0; i < splittedWord.length; i++) {
      if(userInput.toLowerCase() === splittedWord[i]){
        $("#character"+i).html('<p>'+userInput+'</p>');
        score += 10;
        guessedCharacters++;
        $('.score').text(score);
      }
    }
    console.log(guessedCharacters);
    if(guessedCharacters === splittedWord.length){
      console.log('you won');
    }
  });
}



function resetGame(){
  $('.reset').on('click', function(){
    score = 0;
    guessedCharacters = 0;
    $('.score').text(score);
    $('.input-character').val('');
    startGame();
  });
}

startGame();
checkCharacter();
resetGame();
