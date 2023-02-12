const num = 100 // count of fibbonachi numbers 
        let myMap = new Map() // creating new Map()
        let myWeakMap = new WeakMap() // creating new WeakMaP()

        function cacheWeakMap(number){
            let keys = [] // keys for getting values
            let n1 = 0, n2 = 1, nextTerm; // varibles to count fib numbers

            for (let i = 1; i <= number; i++) {
                let key = {id: i}
                nextTerm = n1 + n2;
                n1 = n2;
                n2 = nextTerm;
                keys.push(key)
                myWeakMap.set(keys[keys.length-1], n1) 
            }

            logWeakMap(keys, keys.length) // getter
        }

        function logWeakMap(keys, length){
            console.log('Fibonacci Series WeakMap:');
            for(let i = 0; i < length; i++){
                console.log(myWeakMap.get(keys[i]))
            }
        }

        function cacheMap(number){
            let n1 = 0, n2 = 1, nextTerm;
            for (let i = 1; i <= number; i++) {
                nextTerm = n1 + n2;
                n1 = n2;
                n2 = nextTerm;
                myMap.set(i, n1)
            }
            logMap() // getter
        }
     
        function logMap(){        
            console.log('Fibonacci Series Map:');
            for (const value of myMap.values()) {
                console.log(value);
            }
        }

        // call functions
        cacheWeakMap(num)
        cacheMap(num)
