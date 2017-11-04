# CSS Transitions & Transforms
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

Shorthand?

```css
.button{
	transition: background .5s, color .5s;
}

.button:hover{
	background: red;
	color: black;
}
```


## De Transition-timing function?
Bepaalt de snelheidscurve van de animatie.
Dit zijn de mogelijkheden:

- ease - specifies an animation with a slow start, then fast, then end slowly (this is default)
- linear - specifies an animation with the same speed from start to end
- ease-in - specifies an animation with a slow start
- ease-out - specifies an animation with a slow end
- ease-in-out - specifies an animation with a slow start and end
cubic-bezier(n,n,n,n) - lets you define your own values in a cubic-bezier function

Bekijk de demos & documentatie op:
[Tryit Editor v3.5](https://www.w3schools.com/css/tryit.asp?filename=trycss3_animation_speed)
[cubic-bezier · WebPlatform Docs](https://webplatform.github.io/docs/css/functions/cubic-bezier/)
[CodePen - cubic-bezier](https://codepen.io/Guilh/full/ZQxoOX)

Zelf een Cubic Bezier curve maken?
[cubic-bezier.com](http://cubic-bezier.com)

![](README/README/Screen%20Shot%202017-11-04%20at%2021.44.31.png)



## CSS Transitions & Transforms
Met transforms kan je leuke effecten bekomen.

Je kan bv. een foto 45° laten draaien als je over de foto hovered.

```css
img{
	transform: rotate(0);
}

img:hover{
	transform: rotate(45deg);
}
```

Je kan dit dan gaan animeren via CSS transitions

```css
img{
	transform: rotate(0);
	transition: transfrom .5s;
}

img:hover{
	transform: rotate(45deg);
}
```

## De Transform origin veranderen?
De default transform-origin = center
Maar we kunnen dit inderdaad veranderen

[CSS3 transform-origin property](https://www.w3schools.com/cssref/css3_pr_transform-origin.asp)

## 3D Transforms
Een voorbeeld van 3D animatie in de browser:
[3D Book Showcase](https://tympanus.net/codrops/2013/01/08/3d-book-showcase/)

![](README/README/Screen%20Shot%202017-11-04%20at%2021.44.17.png)


Om 3D transforms toe te passen moet je eerst “perspectief “ gaan toevoegen aan de pagina. 

```css
.container{
	perspective: 700px;
}
```

Vervolgens kan je transforms gaan doen

```css
.space {
  transition: transform .5s;
}

.space:hover {
  transform: rotateY(180deg);
}

```







