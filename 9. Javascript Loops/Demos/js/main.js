$('button').on('click', function(){
  $('img').toggle();
});


// var quiz = [
//   {
//     question: 'What is the capital of Belgium',
//     answer: 'brussels'
//   },
//   {
//     question: "Who's the king of Belgium",
//     answer: 'philippe'
//   },
//   {
//     question: "Who's the queen of Belgium",
//     answer: 'mathilde'
//   },
//   {
//     question: "Who's the prime minister of Belgium",
//     answer: 'charles Michel'
//   },
//   {
//     question: "Since when does Belgium exist",
//     answer: '1830'
//   }
// ];
//
// var score = 0;
//
// for(var i = 0; i < quiz.length; i++){
//   var answer = prompt(quiz[i].question);
//   if(answer.toLowerCase() === quiz[i].answer){
//     score++;
//   }
//   $('h1').text('Uw score: ' + score);
// }
