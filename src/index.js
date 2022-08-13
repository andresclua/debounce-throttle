
import {tf_debounce,tf_throttle} from './help';


class Page{
    constructor(){
        this.input = document.querySelector('input');
        this.defaultState = document.getElementById('default');
        this.debounceState = document.getElementById('debounce');
        this.throttleState = document.getElementById('throttle');
        this.events()
    }
    events(){ 
 
        this.input.addEventListener('input', e =>{
            this.defaultState.innerHTML = e.target.value; 
        })
        this.input.addEventListener('input',tf_debounce((e)=>{
            this.debounceState.innerHTML = e.target.value; 
        },1000));

        this.input.addEventListener('input',tf_throttle((e)=>{
            this.throttleState.innerHTML = e.target.value; 
        },100));
    }
}
export default Page;

new Page()

