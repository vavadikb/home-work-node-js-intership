  let first = '10000000000000000000000000000000';
  let  second = '234859234879342897893427893274';



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




  function divideFunc(number,divisor){
      let ans="";
      let idx = 0;
        let temp=number[idx]-'0';
      while (temp < divisor){
          temp = (temp * 10 +
          (number[idx + 1]).charCodeAt(0) -
                 ('0').charCodeAt(0));
          idx += 1;
      }

      idx += 1;
       
      while(number.length>idx){
          ans += String.fromCharCode
          (Math.floor(temp / divisor) +
          ('0').charCodeAt(0));
         
          temp = ((temp % divisor) * 10 +
          (number[idx]).charCodeAt(0) - ('0').charCodeAt(0));
          idx += 1;
      }
       
      ans += String.fromCharCode
      (Math.floor(temp / divisor) +
      ('0').charCodeAt(0));
       
      if(ans.length==0)
          return "0";
      return ans;
  }


  function multiplyFunc(a, b) {
    var aa = a.split('').reverse();
    var bb = b.split('').reverse();
  
    var stack = [];
  
    for (var i = 0; i < aa.length; i++) {
      for (var j = 0; j < bb.length; j++) {
        var m = aa[i] * bb[j];
        stack[i + j] = (stack[i + j]) ? stack[i + j] + m : m;
      }
    }
  
    for (var i = 0; i < stack.length; i++) {
      var num = stack[i] % 10;
      var move = Math.floor(stack[i] / 10);
      stack[i] = num;
  
      if (stack[i + 1])
        stack[i + 1] += move;
      else if (move != 0)
        stack[i + 1] = move;
    }
  
    return stack.reverse().join('');
  }

  let CalcFunc = function (firtst){
    let result = 0

    return{
        getNumber: function(){
            console.log(` result is ${result}`)
        },

        plus: function(second){
            result = findSum(first,second)
        },
            
        minus: function(second){
            if (firtst.length >= second.length) {
                result = difference(first, second);
            } else {
            result = difference(second, first);
            }

        },
        divide: function(second){
        result = divideFunc(first, +second)
        },
        multiply: function(second){
        result = multiplyFunc(first,second)
        }
    }
  }


  /// check the results
  let plus = CalcFunc(first)
  plus.plus(second)
  plus.getNumber()

  let minus = CalcFunc(first)
  minus.minus(second)
  minus.getNumber()
  
  let multiply = CalcFunc(first)
  multiply.multiply(second)
  multiply.getNumber()

  let divide = CalcFunc(first)
  divide.divide(second)
  divide.getNumber()