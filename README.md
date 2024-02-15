# Debounce Throttle -  

![hero](https://raw.githubusercontent.com/andresclua/debounce-throttle/main/public/debounce-cover.png)

debounce-throttle is a lightweight, no-dependency JavaScript utility library for rate-limiting function executions. It offers both debounce and throttle functions that are essential for optimizing performance for events that fire frequently, such as window resizing, scrolling, or keypresses in web applications.



## Setup for with in your favourite bundler(vite,webpack)
``` js
npm i @andresculua/debounce-throttle
```
``` js
import  {debounce,thorttle} from '@andresculua/debounce-throttle';

var input = document.querySelector('input');
var defaultState = document.getElementById('default');
var debounceState = document.getElementById('debounce');
var throttleState = document.getElementById('throttle');


const debouncedInputHandler = debounce((e) => {
  debounceState.innerHTML = e.target.value;
}, 500);

const throttledInputHandler = throttle((e) => {
  throttleState.innerHTML = e.target.value;
}, 500);


input.addEventListener('input', e =>{
  defaultState.innerHTML = e.target.value; 
})
input.addEventListener('input', debouncedInputHandler);
input.addEventListener('input', throttledInputHandler);
```

## Setup with CDN

### `Codepen Example`
[Check out the CodePen!](https://codepen.io/andresclua/pen/LYaMgJN)

### `Debounce`

Debounce allows you to delay a function's execution until a specified time has elapsed since the last time it was invoked. This is particularly useful for handling events that occur in rapid succession, ensuring that the function is only called once after the last invocation.

### `Throttle`

Throttle ensures that a function is not executed more than once in a specified period. This is useful for controlling the rate of function execution.

### `Key Differences`

Execution Timing: Debounce postpones the function execution until a certain amount of time has passed since the last event trigger. Throttle, on the other hand, guarantees the execution of the function at regular intervals during the event.

Use Cases: Use debounce for events that you only want to handle after some idle time (like user input). Use throttle for events that happen continuously (like scrolling) but you only want to handle at a controlled rate.

In summary, debounce is best when you want to limit the execution of a function to after an event has stopped occurring, ensuring it only runs once after a pause. Throttle is best when you want to ensure a function is executed periodically and at a controlled rate during continuous event firing.
