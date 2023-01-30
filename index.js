        let result = []
        let numbers1 = []
        let numbers2 = []
        let number1 = '99999999999999997556567567557231111111111111111113'
        let number2 = '1112323234545645342323232323'

        function toArr(number, arr){
            let lengthStr = (number.split('').length)/16
            for (let i = 0; i<(lengthStr); i++){
                let b = number.split('', 16).join('')
                let res = (+b)
                if(res<Number.MAX_SAFE_INTEGER){
                    number = number.substring(16)
                    arr.push(b)
                } else{
                    b = number.split('',15).join('')
                    number = number.substring(15)
                    arr.push(b)
                }
            }
            console.log(arr)
        }


        toArr(number1,numbers1) // [999999999999999,975565675675572,3111111111111111,1113]
        toArr(number2, numbers2) // [1112323234545645,342323232323]
        console.log(`numbers1 is [${numbers1}], numbers 2 is [${numbers2}]`)
        plusing(numbers1,numbers2,result)

        function plusing(numbers1,numbers2,result){
            let integer = 1
            for(let i = 0; i<numbers1.length; i++){
                for(let i = 0; i<(numbers1.length - numbers2.length);i++){
                    numbers2.unshift(0)
                }
                result[i] = (+numbers1[numbers1.length - integer]) +(+numbers2[numbers2.length - integer])
                integer++
            }
            result = result.reverse()
            console.log(result)
        }



        let CalcFunc = function (startValue){
            let startValues = []
            let cvalues = []
            let result = []
            console.log()
            return{
                getNumber: function(){
                    console.log(result)
                },
                plus: function(cvalue){                   
                    toArr(cvalue, cvalues)
                    toArr(startValue,startValues)
                    console.log(startValues, 'start numbers is ', cvalues)
                    plusing(startValues,cvalues,result)

                    return result
                },
                
                
                
                minus: function(string){

                },
                devide: function(string){

                },
                multiply: function(string){

                }
            }
        }

        let check = CalcFunc(number1)
        check.plus(number2)
        check.getNumber()
