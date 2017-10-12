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


```html

<div class="container clearfix">
  <!-- Deze elementen gaan Left Floaten -->
  <div class="square">
  <div class="square">
</div>

```


### Introductie Bootstrap
