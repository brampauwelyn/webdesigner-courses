# Week 3

### Handige websites om code te leren:
https://teamtreehouse.com/home
https://www.codeschool.com/
https://www.codecademy.com/
https://www.freecodecamp.org

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
