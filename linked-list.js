class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
    }
  
    add(data) {
      const new_node = new Node(data);
      if (this.head === null) {
        this.head = new_node;
      } else {
        let current = this.head;
        while (current.next !== null) {
          current = current.next;
        }
        current.next = new_node;
      }
    }
  
    remove(data) {
      if (this.head === null) {
        return;
      }
      if (this.head.data === data) {
        this.head = this.head.next;
        return;
      }
      let current = this.head;
      while (current.next !== null && current.next.data !== data) {
        current = current.next;
      }
      if (current.next !== null) {
        current.next = current.next.next;
      }
    }
  
    find(data) {
      let current = this.head;
      while (current !== null && current.data !== data) {
        current = current.next;
      }
      return current;
    }
  
    hasLoop() {
      let slow = this.head;
      let fast = this.head;
      while (slow !== null && fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow === fast) {
          return true;
        }
      }
      return false;
    }
  }

  const list = new LinkedList();

list.add(1);
list.add(2);
list.add(3);
list.add(4);
console.log(list.hasLoop()); // false

list.add(5);
list.add(6);
const node3 = list.find(3);
node3.next = list.head.next.next;
console.log(list.hasLoop()); // true

list.remove(4);
console.log(list.hasLoop()); // true

const node5 = list.find(5);
node5.next = null;
console.log(list.hasLoop()); // false