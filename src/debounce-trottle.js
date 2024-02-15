const debounce = (callback, delay) => {
    let timerId;
    const debouncedFunction = function() {
        const context = this;
        const args = arguments;
        clearTimeout(timerId);
        timerId = setTimeout(() => callback.apply(context, args), delay);
    };
    debouncedFunction.cancel = () => clearTimeout(timerId);
    return debouncedFunction;
};

const throttle = (callback, delay, immediate = false) => {
    let timeoutId = null;
    let isFirstCall = true;
    const throttledFunction = function() {
        const executeCallback = immediate && isFirstCall;
        const later = () => {
            callback.apply(this, arguments);
            timeoutId = null;
        };
        if (executeCallback) {
            isFirstCall = false;
            later();
        }
        if (!timeoutId) {
            timeoutId = setTimeout(later, delay);
        }
    };
    throttledFunction.cancel = () => {
        clearTimeout(timeoutId);
        timeoutId = null;
        isFirstCall = true; // Reset if you use the immediate flag
    };
    return throttledFunction;
};
