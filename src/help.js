
export function tf_debounce(callback, wait) { 
    let timeout;
        return (...args) => {
            const context = this;
            clearTimeout(timeout);
            timeout = setTimeout(() => callback.apply(context, args), wait);
        };
}
































export function tf_throttle(callback, wait, immediate = false) {
    let timeout = null 
    let initialCall = true
    
    return function() {
      const callNow = immediate && initialCall
      const next = () => {
        callback.apply(this, arguments)
        timeout = null
      }
      
      if (callNow) { 
        initialCall = false
        next()
      }
  
      if (!timeout) {
        timeout = setTimeout(next, wait)
      }
    }
  }