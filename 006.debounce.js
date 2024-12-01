function debounce(execFunc, wait) {
    let timeout

    return function(...args) {
        if (timeout) {
            cleanTimeout(timeout)
        }

        timeout = setTimeout(function() {
            timeout = null 
            execFunc(...args)
        }, wait)
    }
}