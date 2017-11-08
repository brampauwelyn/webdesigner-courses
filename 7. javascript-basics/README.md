# JavaScript Basics
- JavaScript is not Java!
- JavaScript is een programmeertaal die o.a. gebruikt wordt om interactiviteit toe te voegen aan een website

## JavaScript schrijven
Net zoals css kunnen we scripts (Javascript) toevoegen aan een website. 

1) We kunnen dit doen in de html file zelf 

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

2) Of we kunnen dit doen in een externe file (zelfde principe als external stylesheet).  Deze file geven we de extensie .js (JavaScript). In deze file moet je de <script> tag niet meer gebruiken!

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
Kan je het best vergelijken met een doos waarin je gegevens (data) kan steken. Die je op een later moment terug kan opvragen.

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


## Prompts
Vragen naar user input.

```
prompt("What's your name");
```

Je kan dit ook in een variabele steken

```
var name = prompt("What's your name");
```









