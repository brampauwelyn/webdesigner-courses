# CSS Transitions & Transforms
#development/css

## Waarom CSS transitions?
![](README/README/hover.png)

Bv. bij **hover** op button verander je het achtergrondkleur van de button. Als je dan hovered over deze button dan zie je dat achtergrondkleur onmiddellijk verandert. 

We kunnen deze overgang gaan animeren via CSS transitions

```css
.button{
display: block;
background-color: red;
transition-property: background-color;
transition-duration: .5s;
transition-timing-function: linear;
}

.button:hover{
background-color: yellow;
}
```

## Hoe CSS transitions maken?

Om CSS transitions te maken hebben we volgende CSS properties ter beschikking zie ([CSS3 Transitions](https://www.w3schools.com/css/css3_transitions.asp))

- **transition-property** (welke css property wil je gaan animeren? bv. background-color)
- **transition-duration** (hoe lang moet de transition duren?)
- **transition-timing-function** (op welke manier gebeurt de transition?)
- **transition-delay** (na hoeveel tijd begint de transition?)

**Shorthand** 
Je kan natuurlijk ook gebruik maken van de shorthand notatie

```css
.button{
transition: background-color .5s linear;
}
```


## Welke CSS properties zijn animeerbaar? 
We hebben dus al gezien dat we o.a. background-color kunnen gaan animeren. Natuurlijk zijn **niet** alle css-properties animeerbaar.

Hier vind je de lijst met alle animeerbare CSS properties:
[CSS Transitions](https://www.w3.org/TR/css3-transitions/#animatable-properties)

Of hier een interactieve demo van alle animeerbare css properties:
[Animatable: One property, two values, endless possibilities](http://leaverou.github.io/animatable/)

**Opmerking:** je ziet bijvoorbeeld dat de CSS property “display” niet op deze lijst staat. 


## Meerdere CSS properties animeren?
Dit kan!

```css
.button{
	background: tomato;
	color: #fff;
	transition-property: background, color;
	transition-duration: .5s;
}

.button:hover{
	background: red;
	color: black;
}
```






