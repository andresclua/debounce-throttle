
Throttle and debounce functions.


```
### JS Setup
2 - Import the package
```sh
npm install @andresclua/collapse
```
3 -  the package
```sh
import Collapse from '@andresclua/collapse';
new Collapse()  
```
4 - Your Html should look like this

```sh
<a href="#" class="b--btn-a" data-ds-element="collapse" data-collapse-id="collapse-x" data-target-class="b--collapse-a--is-active" data-self-class="b--btn-a--is-active">Trigger Element</a>
<div class="b--collapse-a" id="collapse-x">
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero obcaecati incidunt quod labore illum sint odit! Saepe eligendi laboriosam earum a molestias, totam praesentium vero! Provident ad iure facilis veniam.</p>
</div>
```

### For Nuxt
1 - Create a file Collapse.js inside plugins folder & add this.
```sh
import Collapse from '@andresclua/collapse';
export default ({ app },inject) => {
    inject('Collapse', () => new Collapse() );
};
```
2 - Reference in your nuxt.config.js
```sh
plugins: [
    { src: '~/plugins/collapse.js', ssr: false }
  ]
```
![awesome](https://media.giphy.com/media/LeikbswJKXOMM/giphy.gif)

[Github Profile](https://github.com/andresclua/)