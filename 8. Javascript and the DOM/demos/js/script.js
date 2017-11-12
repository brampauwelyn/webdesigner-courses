// Demo 1
var button1 = document.getElementById('button1');

button1.addEventListener('click', function(){
  alert('button clicked');
});

// Demo 2
var button2 = document.getElementById('button2');
var title = document.getElementById('title');

button2.addEventListener('click', function(){
  title.style.color = 'red';
});

// Demo 3

var button3 = document.getElementById('button3');
var inputfield = document.getElementById('inputfield');

button3.addEventListener('click', function(){
  alert(inputfield.value);
});

// Demo 4
// Verander kleur van alle titels

var titles = document.querySelectorAll('h2');
var button4 = document.getElementById('button4');

button4.addEventListener('click', function(){
  for (var i = 0; i < titles.length; i++) {
    titles[i].style.color = 'blue';
  }
});
