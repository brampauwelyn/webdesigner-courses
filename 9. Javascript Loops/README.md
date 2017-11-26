# Javascript Loops

## 1. While Loop

https://developer.mozilla.org/nl/docs/Web/JavaScript/Reference/Statements/while

Een while loop wordt uitgevoerd zolang de condition waar is.

```JavaScript
while (condition){
    statement
}
```

Bv.

```JavaScript
var count = 0;

while(count <= 25){
    console.log('hello');
    count++;
}

```

## 2. Do While Loops

https://developer.mozilla.org/nl/docs/Web/JavaScript/Reference/Statements/do...while

Zelfde principe als een gewone "While" loop. Met 1 uitzondering na. Een "Do While" voert de functie minstens 1 keer uit ook al is de conditie niet waar.

```JavaScript
do{
  statement
}while (condition);
```

bv.

```JavaScript
var count = 28

do{
  console.log('hello');
}while(count < 26);

```

## 3. For loops

For loops zijn iets anders dan de "while" of "do while" loop. Maar worden vaak gebruikt om iets een aantal keer te doen.

Wordt vooral gebruikt om door data (array) te itereren.

https://developer.mozilla.org/nl/docs/Web/JavaScript/Reference/Statements/for

```JavaScript

for ([initialization]; [condition]; [final-expression]){
   statement
}

```

bv.

```JavaScript
for (var count = 0; count < 26; count++) {
  count++
}
```

Concreet voorbeeld om bv. door array te itereren.

```JavaScript
var students = ['Danny', 'Flavia', 'Selim', 'Jonathan'];

for(var i = 0; i < students.length ; i++){
  console.log(students[i]);
}
```

## Oefeningen

1. Change image on click
2. While do loop: (Number guessing game)
3. For Loop: To Do lijst op basis van bestaande array
4. Image search (via unsplash);
