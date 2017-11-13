# JavaScript Basics
Javascript is een programmeertaal die heel vaak wordt gebruikt op het web. Bijna elke website maakt gebruikt van javascript. 

Bv. Google Maps, Dropbox, Facebook etc.

Vaak wordt het gebruikt om interactiviteit toe te voegen aan een pagina.
Bv. de gebruiker klikt op een foto en de foto gaat open in een pop-up en wordt uitvergroot. 

- JavaScript is not Java!
- JavaScript is een programmeertaal die o.a. gebruikt wordt om interactiviteit toe te voegen aan een website

## JavaScript schrijven
Net zoals css kunnen we scripts (Javascript) toevoegen aan een website. 

1) We kunnen dit doen **in de html file** zelf 

```markup
<html>
	<body>
		<h1></h1>
		
		<script> 
			console.log('Hello World');
		</script>
	</body>
</html>
```

2) Of we kunnen dit doen **in een externe file** (zelfde principe als external stylesheet).  Deze file geven we de extensie .js (JavaScript). In deze file moet je de <script> tag niet meer gebruiken!

Vergeet deze file niet te link in je document.

index.html
```markup
<html>
	<body>
		
		<script src="js/script.js"></script>
	</body>
</html>
```

script.js

```javascript
console.log('Hello World');
```


## Javascript openen?
Als we onze webpagina (index.html) in de browser dan werkt onze javascript ook meteen. 

We kunnen de “console.log” zien via de developer tools van de browser > console.

[Screen Recording 2017-11-05 at 10.07 PM.gif](https://cl.ly/3Y472V0S3k3r)


## Alerts
```javascript
alert("Hello World");
```

## Variables
Variables zijn een van de belangrijkste concepten binnen programmeren.

Kan je het best vergelijken met een **doos** waarin je gegevens (data) kan steken. Die je op een later moment terug kan opvragen.

Bv. Bij een computerspel kan je zo de score van de speler bijhouden.

Om een variabele te maken begin je altijd met het woord var
(var is de afkorting voor variable).

```
// String
var name = "Bram";

// Number
var age = 26

// Boolean
var married = false 

// Array 
var students = ["Bram", "Selim", "Lindsay", "David", "Flavia", "Jonathan", "Atanaska", "Celine"]

// Object 
var person = {name: "Bram", age: 26, married: false}

// Array met objecten
var students = [
	{
		name: "Bram",
		age: 26
		married: false
	},
	{
		name: "Selim",
		age: 34
		married: true
	}
];
```

## Naamgeving van variables
Omdat je in een programma (script) meestal gebruikt maakt van heel variabelen is het belangrijk om deze een **goede naam** te geven zodanig dat je deze op een later moment makkelijk terug kan oproepen. 

### Regels wat betreft naamgeving

Natuurlijk bestaan er in javascript een aantal regels op het vlak van naamgeving:

- Names can contain letters, digits, underscores, and dollar signs.
- Names must begin with a letter
- Names can also begin with $ and _ (but we will not use it in this tutorial)
- Names are case sensitive (y and Y are different variables)
- Reserved words (like JavaScript keywords) cannot be used as names
 [JavaScript Reserved Words](https://www.w3schools.com/js/js_reserved.asp)

### Voorbeelden van namen die niet mogen

Namen moeten een beginnen met een letter. Mogen dus niet beginnen met een cijfer. 

```
var 9lives = 9;
```

Namen mogen geen rare tekens bevatten (enkel _ en $)

```
var %test = 10;
var test# = 10;
var @home = "bla"
```

### Variables zijn case sensitive (hoofdlettergevoelig).

Deze 2 variables zijn dus 2 verschillende variables:

```
var x = 9;
var X = 10;
```

### Lange Variable Namen

Soms heb je een lange variable naam nodig bv. gemiddelde leeftijd
Uiteraard kunnen we in een **variable naam geen spatie**  gebruiken.
Maar we kunnen het leesbaar maken door het gebruik van een ‘underscore’.

Bv. 
```
var gemiddelde_leeftijd = 34;
```

Een andere manier om deze woorden te combineren en het toch leesbaar te maken is via “camelCasing”. Dit is een techniek waarbij elk woord begint met een hoofdletter behalve het eerste woord.

Bv.

```
var gemiddeldeLeeftijd = 34;
```

### Tips & Tricks bij het benoemen van variables

1) Maak gebruik van beschrijvende namen. Wat betekent deze variable?

Bv. slechte naam
```
var x = "Bram"
```

Bv. goede naam 
```
var firstName = "Bram"
```

2) Verkies camel casing boven het gebruik van underscores

3) Gebruik engels 


## Prompts
Vragen naar user input.

```
prompt("What's your name");
```

Je kan dit ook in een variabele steken

```
var name = prompt("What's your name");
```


## Strings Combineren (concatenate)
Je kan makkelijk strings combineren.

Deze  techniek heet concatenate:
http://www.mijnwoordenboek.nl/vertaal/EN/NL/concatenate

Stel nu dat je een variable “firstName” en een variable “lastName”.
En jij zou graag de volledige naam uitprinten. 
Dit kan je doen op de volgende manier:

```
var firstName = "Bram"
var lastName = "Pauwelyn"

console.log(firstName + lastName);

```

Nu plakken de voornaam en achternaam aan elkaar.
Op de volgende manier kan je een spatie toevoegen tussen de voornaam en achternaam.

Dit doe je op de volgende manier

```
var firstName = "Bram"
var lastName = "Pauwelyn"

console.log(firstName + ' ' + lastName);

```

Je kan bv. ook een nieuwe variable maken met daarin de volledige naam.

```
var fullName = firstName + ' ' + lastName
```


## String methods
Met strings kan je vanalles doen.
Je kan bv. de lengte van de string gaan opvragen (hoeveel karakters.
Of je kan bv. de volledige string in hoofdletters omzetten.

1) .length
```
var lastName = "pauwelyn"
console.log(lastName.length)
```


2) .toUpperCase()

```
var lastName = "pauwelyn"
console.log(lastName.toUpperCase());
```

3) .toLowerCase()
```
var lastName = "PAUWELYN"
console.log(lastName.toLowerCase());
```


## Numbers
Naast strings kan je ook numbers (getallen) in een variabele steken. 
Dit kan bv. handig zijn voor prijzen, leeftijd, etc. 

Het voordeel van “Numbers” is dat je er makkelijk berekeningen mee kan doen.

```
var priceVatExcluded = 100;
var totalPrice = priceVatExcluded * 1.21;
console.log(totalPrice);
```

### Wiskunde met Numbers

```
// Division
var division = 10 / 2;

// Multiplication
var multiplication = 10 * 2;

// Subtraction
var subtraction = 10 - 2;

// Addition
var addition = 10 + 2;

```

### De waarde van een variabele veranderen

```
// Iets vermeerderen met 1
var age = 26;
age++

// Iets verminderen met 1
var age = 26;
age--

// Addition
var age = 26;
age = age +1;
age += 1;

// Subtraction
var age = 26;
age = age - 2;
age -= 2;

// Multiplication
var age = 26;
age = age * 2;
age *= 2;

// Division
var age = 26;
age = age / 2;
age /= 2;
```

### Oefening bereken hoeveel seconden er in een jaar zitten.

```
var secondsPerMin = 60;
var minPerHour = 60;
var hoursPerDay = 24;
var daysInWeek = 7;
var weeksInYear = 52;

var secondsPerYear = secondsPerMin * minPerHour *hoursPerDay * daysInWeek * weeksInYear;
``` 


### Math object

De math object wordt gebruikt om alle soorten berekeningen te doen met een “number”.

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math

1. Math.round()  een getal afronden 
```
Math.round(7.6);
```

2. Math.random() —> een random getal tussen 0 & 1.
```
Math.random();
```


### Oefening maak een digitale dobbelsteen

```
Math.ceil(Math.random() * 6);
```


## Conditional Statements
1. If statements

```
var answer = prompt("What's the name of the programming language we're using?");
if( answer === 'javascript' ){
	alert('Correct');
}
```

2. If  else statements

```
var answer = prompt("What's the name of the programming language we're using?");
if( answer === 'javascript' ){
	alert('Correct');
}else {
	alert(answer + ' is not correct');
}
```

3. If else if statements

```
var answer = prompt("What's the name of the programming language we're using?");
if( answer === 'javascript' ){
	alert('Correct');
}else if() {
	alert('Correct');
} else{
	alert(answer + ' is not correct');
}
```


In een “if -statement” kunnen we veel meer dan enkel checken of iets gelijk is. 

https://www.w3schools.com/js/js_comparisons.asp


## Functions
### Intro

Maak herbruikbare code aan de hand van “Functions”.

```
function goToCoffeeShop(){
	// code die moet uitgevoerd worden
}
```

Net zoals bij variables kan zijn er een aantal regels bij het benoemen van een functie (exact zelfde regels als variables):

- Names can contain letters, digits, underscores, and dollar signs.
- Names must begin with a letter
- Names can also begin with $ and _ (but we will not use it in this tutorial)
- Names are case sensitive (y and Y are different variables)
- Reserved words (like JavaScript keywords) cannot be used as names
 [JavaScript Reserved Words](https://www.w3schools.com/js/js_reserved.asp)

### Functies uitvoeren

Wanneer de functie geschreven is wordt die niet uitgevoerd.

```
function goToCoffeeShop(){
	// code die moet uitgevoerd worden
	alert('coffee is on it's way');
}
```

Een functie laten uitvoeren doe je op de volgende manier

```
goToCoffeeShop();
```

### Informatie meegeven in een functie

Stel je voor dat ik niet altijd koffie wil.
Soms wil ik ook een ice-tea, thee, cola, etc.
Ik kan deze info meegeven in de functie (parameter).

```
function goToCoffeeShop(drink){
	alert(drink + ' is on it's way');
}

goToCoffeeShop('cola');
goToCoffeeShop('fruitsap');
```

Oefening bereken het aantal seconden je op aarde bent:

```
var secondsPerMin = 60;
var minPerHour = 60;
var hoursPerDay = 24;
var secondsInDay = secondsPerMin * minPerHour * hoursPerDay;
var daysInWeek = 7;
var weeksInYear = 52;
var secondsInYear = secondsInDay * daysInWeek * weeksInYear;

function secondsOnEarth(age){
	alert("You're" + age * secondsInYear + " seconds on earth");
};

secondsOnEarth(26);
```

















