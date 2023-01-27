// function for checking type and arithmetic logic 
    let checkType = function(value,cvalue, type, method){
        if (type == null || type == undefined){
            console.log('ReferenceError')
            return undefined
        }
        else{ 
        if(method === 'plus'){  
            if (type === 'number'|| type === 'float'){
                result = (value += cvalue)
            }
            if(type === 'string'){
                //convert string to number
                result = (value += (+cvalue))
            }
        }
        if (method === 'minus'){
            if (type === 'number'|| type === 'float'){
                result = (value -= cvalue)
            }
            if(type === 'string'){
                result = (value -= (+cvalue))
            }
        }
        if(method === 'divide'){
            if (type === 'number'|| type === 'float'){
                result = (value / cvalue)
            }
            if(type === 'string'){
                result = (value / (+cvalue))
            }
        }
        if (method === 'multiply'){
            if (type === 'number'|| type === 'float'){
                result = (value * cvalue)
            }
            if(type === 'string'){
                result = (value * (+cvalue))
            }
        }
    }
        return  result
}

let CalcFunc =  function(startStrokeNumber){
    let value
    let result = 0 
    if (typeof startStrokeNumber == 'string'){
        value = +startStrokeNumber
    }
    if (typeof startStrokeNumber == 'number'){
        value = startStrokeNumber
    }

    return{
        // getter for check the number
        getNumber: function(){
            console.log(`value now is ${result}`)
            return result
        },
        plus: function(cvalue){
            let type = typeof cvalue
            result = checkType(value,cvalue,type, 'plus')
            if (result < Number.MAX_SAFE_INTEGER && result > Number.MIN_SAFE_INTEGER){
                console.log(result)
                return result
            }else {
                console.log('error number')
            }
        
        },

        minus: function(cvalue){
            let type = typeof cvalue
            result = checkType(value,cvalue,type, 'minus')
            if (result < Number.MAX_SAFE_INTEGER && result > Number.MIN_SAFE_INTEGER){
                console.log(result)
                return result
            }else {
                console.log('error number')
            }
        },

        divide: function(cvalue){
            let type = typeof cvalue
            result = checkType(value,cvalue,type, 'divide')
            if (result < Number.MAX_SAFE_INTEGER && result > Number.MIN_SAFE_INTEGER){
                console.log(result)
                return result
            }else {
                console.log('error number')
            }

        },
        multiple: function(cvalue){
            let type = typeof cvalue
            result = checkType(value,cvalue,type, 'multiply')
            if (result < Number.MAX_SAFE_INTEGER && result > Number.MIN_SAFE_INTEGER){
                console.log(result)
                return result
            }else {
                console.log('error number')
            }
        }
    }
}


// Check result of code 
// Watch in console :)
let plus = CalcFunc(100000)
let minus = CalcFunc(132423234234)
let divide = CalcFunc(100000000000)
let multiple = CalcFunc(124556)

plus.plus(1324245345345)
plus.getNumber()

minus.minus(132423234234)
minus.getNumber()

divide.divide(50000)
divide.getNumber()

multiple.multiple(2544562)
multiple.getNumber()
