    let first = '10000000000000000000000000000000';
    let  second = '234859234879342897893427893274';

 

    function difference(max, min) {
        max = max.split('')
            .reverse();
        min = min.split('')
            .reverse();
        let  len = max.length,
            result = [];
        for (let  i = 0, b = 0, c = 0; i < len; i++) {
            b = max[i] - (min[i] || 0) + c;
            result[i] = b < 0 ? (c = -1, 10 + b) : (c = 0, b)
        }
        return result.reverse()
            .join('')
            .replace(/^0+/, '');
    }

    function findSum(first, second) {
        let  sum = '';
        let  carry = 0;
        let  diff = second.length - first.length;
        for (i = first.length - 1; i >= 0; i--) {
            let  temp =
                (Number(first.charAt(i)) % 10) +
                (Number(second.charAt(i + diff)) % 10) +
                carry;
            if (temp >= 10) {
                sum = (temp % 10) + sum;
                carry = Math.floor(temp / 10);
            } else {
                sum = temp + sum;
                carry = 0;
            }
        }
        if (carry) {
            sum = carry + sum;
        }
        return sum;
    }




    let CalcFunc = function (firtst){

        return{
            getNumber: function(){
                console.log(first,second)
            },
            plus: function(second){
                if (firtst.length >= second.length) {
                    console.log(findSum(first, second));
                } else {
                    findSum(second, first);
                }
            },
            
            
            
            minus: function(second){
                if (firtst.length >= second.length) {
                    console.log(difference(first, second));
                } else {
                    difference(second, first);
                }

            },
            devide: function(string){

            },
            multiply: function(string){

            }
        }
    }

    let check = CalcFunc(first)
    check.minus(second)
    check.getNumber()
