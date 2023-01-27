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
    }}
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
        getNumber: function(){
            console.log(`value now is ${result}`)
            return result
        },
        plus: function(cvalue){
            let type = typeof cvalue
            result = checkType(value,cvalue,type, 'plus')
            if (result<Number.MAX_SAFE_INTEGER){
                console.log(result)
                return result
            }else {
                console.log('error number')
            }
        
        },

        minus: function(cvalue){
            let type = typeof cvalue
            result = checkType(value,cvalue,type, 'minus')
            if (result>Number.MIN_SAFE_INTEGER){
                console.log(result)
                return result
            }else {
                console.log('error number')
            }
        },

        divide: function(cvalue){


        },
        multiple: function(cvalue){
            let result = (value * (+cvalue))
            if((result<Number.MAX_SAFE_INTEGER)){
                return result
            }else{
                console.log('your number so big, use bid int :)')
            }
        }
    }
}

let value = CalcFunc(12344443)

value.minus('1235345634')
value.getNumber()
// console.log(value.plus())
// console.log(Number.MAX_SAFE_INTEGER)
// console.log(value.plus('2341231231231223123125556'))
// console.log(value.plus(2345556))
// console.log(value.multiple('15'))