import {debounce,throttle} from './debounce-trottle.js';


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







