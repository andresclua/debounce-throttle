
Throttle and debounce functions.

```
### JS Setup
1- Import the package
```sh
npm install @andresclua/debounce-throttle
```
2 -  the package
```sh
import {tf_debounce,tf_throttle} from '@andresclua/debounce-throttle';

element.addEventListener('input',tf_debounce((e)=>{
    this.debounceState.innerHTML = e.target.value; 
},1000));

```

