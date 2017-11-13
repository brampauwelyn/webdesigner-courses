# Javascript and the DOM

### Select an element by ID

```
document.getElementById('button');
```

### Add EventListener 

[JavaScript DOM EventListener](https://www.w3schools.com/js/js_htmldom_eventlistener.asp)

```
var button = document.getElementById('button');
button.addEventListener('click', function(){
	alert('button clicked');
});
```

Lijst van verschillende event listeners:
[HTML DOM Event Object](https://www.w3schools.com/jsref/dom_obj_event.asp)

### Change CSS

[HTML DOM Style object](https://www.w3schools.com/jsref/dom_obj_style.asp)

```
var title = document.getElementById('title');
title.css.color = 'red';
```

### Get Input Value 

```
var button3 = document.getElementById('button3');
var inputfield = document.getElementById('inputfield');

button3.addEventListener('click', function(){
  alert(inputfield.value);
});

```


### Select Elements by Tagname

[Element.getElementsByTagName() - Web APIs | MDN](https://developer.mozilla.org/en-US/docs/Web/API/Element/getElementsByTagName)

Returns an HTML collection

```
var titles = document.getElementsByTagName('h1');
console.log(titles[0].innerText);
```


### Select Elements by Classname

Returns an HTML collection

```
var articles = document.getElementsByClassName('article');
console.log(articles);
```

### Select Elements with querySelectorAll

```
var titles = document.querySelectorAll('h2');
titles.style.color = 'blue';
```

### Text opvragen (textContent)

```
var heading = document.getElementById('heading');
heading.textContent;
```

### Text veranderen (textContent)

```
var heading = document.getElementById('heading');
heading.textContent = "Nieuwe titel";
```

### Make new elements

```
var div = document.createElement('div');
```

Deze zal nog niet in de HTML zichtbaar zijn

### Elements toevoegen aan de DOM

Nadat we het element hebben gemaakt kunnen we het toevoegen aan onze html

```
var li = document.createElement('li');
li.textContent = "hello";
var ul = document.querySelector('ul');
ul.appendChild(li);
```






