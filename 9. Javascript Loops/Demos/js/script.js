// Numbers
var age = 26;

// Strings
var firstName = "Bram";

// Array
var students = ["Innes", "Danny", "Flavia", "Selim", "Atanaska", "Jonathan"];

console.log(students[2]);

// Boolean
var married = false;

// Object
var person = {
  firstName: "Bram",
  lastName: "Pauwelyn",
  age: 26,
  married: false
};

console.log(person.firstName);


function secondsOnEarth(){
  // doe berekening
  console.log('doe berekening seconds on earth');
}


// secondsOnEarth();

function secondsOnEarth(age, sex){
  // doe berekening
  console.log('doe berekening seconds on earth op basis van ' + age + ' jaar en ' + sex );
}

// Dom selectors

// Select element by id
document.getElementById('button');

// Select element based on html tag
document.getElementsByTagName('h1');

// Select elements based on classname
document.getElementsByClassName('btn');

// Selecteer elementen op basis van html tag,id's of klasse
document.querySelectorAll('h1');


var button = document.getElementById('btn');


// Start TO DO
// var button = document.getElementById('btn');

// button.addEventListener('click', function(){
//   var inputField = document.getElementById('inputField');
//   var inputValue = inputField.value;
//   var item = document.createElement('li');
//   var list = document.getElementById('list');
//   item.textContent = inputValue;
//   list.appendChild(item);
// });


// Start Search FOto oefening

var searchButton = document.getElementById('search');
var inputField = document.getElementById('inputField');
var body = document.getElementsByTagName('body');
console.log(body);

searchButton.addEventListener('click', function(){
  var url = "https://source.unsplash.com/1600x900/?" + inputField.value;
  body[0].style.backgroundImage = "url(" + url + ")";
  console.log(body[0]);
});
