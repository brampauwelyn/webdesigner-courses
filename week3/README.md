# Week 3

### Handige websites om code te leren:
- https://teamtreehouse.com/home
- https://www.codeschool.com/
- https://www.codecademy.com/
- https://www.freecodecamp.org

### Responsive Design

Tegenwoordig zijn er zoveel verschillende schermgroottes en resoluties denk maar aan alle verschillende laptops, tablets en smartphones. Deze verschillende schermgroottes vergen een andere designaanpak. Op een smartphone heb je veel minder ruimte t.o.v. desktopscherm.

Om ervoor te zorgen dat onze website er goed uit ziet op deze verschillende schermgroottes maken we gebruik van mediaqueries.


Voorbeeld mediaquerie:
```css

@media screen and (min-width: 480px){

  body{
    background-color: red;
  }

}

``


Zie documentatie MDN (Mozilla Developer Network) voor meer uitleg:
https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries


### De nieuwe manier om Floats te clearen:
http://nicolasgallagher.com/micro-clearfix-hack/
Je kan de klasse naam veranderen naar clearfix

```css
.clearfix:before,
.clearfix:after {
    content: " "; /* 1 */
    display: table; /* 2 */
}

.clearfix:after {
    clear: both;
}

/**
 * For IE 6/7 only
 * Include this rule to trigger hasLayout and contain floats.
 */
.cf {
    *zoom: 1;
}

```

In de HTML kan je nu de clearfix klasse gebruiken om floats te clearen.
Deze zal via het pseudo element ':after' de floats gaan clearen.

```html

<div class="container clearfix">
  <!-- Deze elementen gaan Left Floaten -->
  <div class="square">
  <div class="square">
</div>

```


### Introductie Front-end Frameworks

Er bestaan veel verschillende front-end frameworks (meestal gebaseerd op dezelfde principes).
De meest gebruikte zijn:

- http://getbootstrap.com/
- https://foundation.zurb.com/sites.html
- https://getuikit.com/

In deze les gaan we ons concentreren op het CSS framework *Bootstrap*

#### Bootstrap

Om bootstrap te gebruiken kan je de files van de bootstrap downloaden of je kan de nodige files (css + javascript).
Of je kan de files inladen via een CDN (content delivery network).

Op de website van Bootstrap kan je ook een 'HTML starter template' vinden om snel aan de slag te gaan.

In deze les gaan we de starter template gebruiken.
https://getbootstrap.com/docs/4.0/getting-started/introduction/

```HTML
<!DOCTYPE html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/css/bootstrap.min.css" integrity="sha384-/Y6pD6FV/Vv2HJnA6t+vslU6fwYXjCFtcEpHbNJ0lyAFsXTsjBbfaDjzALeQsN6M" crossorigin="anonymous">
  </head>
  <body>
    <h1>Hello, world!</h1>

    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.11.0/umd/popper.min.js" integrity="sha384-b/U6ypiBEHpOf/4+1nzFpr53nxSS+GLCkfwBdFNTxtclqqenISfwAzpKaMNFNmj4" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/js/bootstrap.min.js" integrity="sha384-h0AbiXch4ZDo7tp9hKZ4TsHbi047NrKGLO3SEJAg45jXxnGIfYzk4Si90RDIqNm1" crossorigin="anonymous"></script>
  </body>
</html>
``
