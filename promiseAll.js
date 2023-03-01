function promiseAll(promises){

    return new Promise((resolve, reject)=>{
        const res = []
        let resolvePromises = 0 
        if(!promises.length){
            resolve(res)
            return
        }

        function handleRes(index,result){
            res[index] = result
            resolvePromises++
            if(resolvePromises === promises.length){
                resolve(res)
            }
        }
        for (let i = 0;i<promises.length;i++){
            if (promises[i] instanceof Promise) {
                promises[i]
                .then(result => handleRes(i, result))      
              } else {
                console.log(`element ${promises[i]} is not a promise`)
            }
        }

    })
}

const promise1 = Promise.resolve(3);
const promise2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'foo');
});

promiseAll([promise1, promise2]).then((results) => {
  console.log(results);
});