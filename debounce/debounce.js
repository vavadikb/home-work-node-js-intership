function hello(){
    console.log('Hello world')
}

const debounce = (fn, wait) =>{
    let timeout
    return function (){
        const fnCall = () => {fn.apply(this, arguments)}
        clearTimeout(timeout)
        timeout = setTimeout(fnCall, wait)
    }
}


hello = debounce(hello,1000)

hello()

