class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class Stack {
  constructor () {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }
  push(value) {
    const newNode = new Node(value);
    if (!this.top) {
      this.top = newNode;
      this.bottom = newNode;
      this.length++;
    } else {
      let oldTop = this.top;
      this.top = newNode;
      this.top.next = oldTop;
      this.length++;
    } return this.length;
  }

  pop() {
    if(!this.top) return null;
    let temp = this.top;
    if (this.top === this.bottom) {
      this.bottom = null;
    }
    this.top = this.top.next;
    this.length--;
    return temp.value;
  }

  print() {
    let str = '';
    let current = this.top;
    while(current) {
      str += `${current.value} -> `;
      current = current.next;
    } return str;
  }

  peek() {
    if (!this.top) return null;
    return this.top.value;
  }

  isEmpty() {
    if (!this.top) return true;
    return false;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.back = null;
    this.length = 0;
  }

  enqueue(value) {
    let temp = new Node(value);
    if (!this.front) {
      this.front = temp;
      this.back = temp;
      this.length++;
    } else {
      let oldback = this.back;
      this.back = temp;
      oldback.next = this.back;
      this.length++;
    } return this.length;
  }

  dequeue() {
    if (!this.front) return null;
    if (this.length === 1) {
      let value = this.front.value;
      this.front = null;
      this.back = null;
      this.length--;
      return value;
    }
    let value = this.front.value;
    this.front = this.front.next;
    this.length--;
    return value;
  }

  peek() {
    if (!this.front) return null;
    return this.front.value;
  }

  print() {
    let str = '';
    let current = this.front;
    while(current) {
      str += `${current.value} -> `;
      current = current.next;
    }
    return str;
  }

  isEmpty() {
    if (!this.front) return true;
    return false;
  }
}



module.exports = { Stack, Queue };
