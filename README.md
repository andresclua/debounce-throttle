
Throttle and debounce functions.

```
### JS Setup
2 - Import the package
```sh
npm install @andresclua/debounce-throttle
```
3 -  the package
```sh
import {tf_debounce,tf_throttle} from '@andresclua/debounce-throttle';
```
4 - Your Html should look like this

```sh
element.addEventListener('input',tf_debounce((e)=>{
    this.debounceState.innerHTML = e.target.value; 
},1000));
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