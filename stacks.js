class Stack { 
    constructor(arr){ 
        this.newArr = arr 
    } 

    pop(){ 
        return this.newArr.pop() 
    } 
     
    push(value){ 
        this.newArr = [...this.newArr,value] 
        return this.newArr 
    } 
     
    isEmpty(){ 
        if(this.newArr){ 
            return false 
        } 
        else{ 
            return true 
        } 
    } 
     
    get length(){ 
        return this.newArr.length 
    } 
} 

class Queue { 
    constructor(arr) { 
        let arr1 = [] 
        this.stack1 = new Stack(arr) 
        this.stack2 = new Stack(arr1); 
    } 

    enqueue(value) { 
        this.stack1.push(value); 
    } 

    remove(){ 
        this.shift() 
        return this.stack2.pop() 
    } 

    shift(){ 
        if(this.stack2.length>0){ 
            return 
        } 
        else{ 
            while(this.stack1.length>0){ 
                this.stack2.push(this.stack1.pop()) 
            } 
        } 
    } 
     

    get length() { 
        return this.stack1.length + this.stack2.length; 
    } 
}    

let arr = [] 
const queue = new Queue(arr); 

queue.enqueue(1); 
queue.enqueue(2); 
queue.enqueue(3); 
 
console.log(queue.remove()) // 1 
console.log(queue.remove()) // 2 
console.log(queue.remove()) // 3
