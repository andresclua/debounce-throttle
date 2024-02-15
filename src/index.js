import {debounce,throttle} from './debounce-trottle.js';


var input = document.querySelector('input');
var defaultState = document.getElementById('default');
var debounceState = document.getElementById('debounce');
var throttleState = document.getElementById('throttle');


const debouncedInputHandler = debounce((e) => {
  debounceState.innerHTML = e.target.value;
}, 1000);

const throttledInputHandler = throttle((e) => {
  throttleState.innerHTML = e.target.value;
}, 1000);


input.addEventListener('input', e =>{
  defaultState.innerHTML = e.target.value; 
})
input.addEventListener('input', debouncedInputHandler);
input.addEventListener('input', throttledInputHandler);



setTimeout(() => {
  // To cancel the debounce effect
debouncedInputHandler.cancel();

// To cancel the throttle effect
throttledInputHandler.cancel();

},3000)




