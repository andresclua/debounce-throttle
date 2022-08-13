
Throttle and debounce functions - 
[Demo](https://andresclua.github.io/debounce-throttle/dist/index.html)

1 - Install package
```
npm install @andresclua/debounce-throttle
```
2 -  use it
```
import {tf_debounce,tf_throttle} from '@andresclua/debounce-throttle';

element.addEventListener('input',tf_debounce((e)=>{
    this.debounceState.innerHTML = e.target.value; 
},1000));

```

