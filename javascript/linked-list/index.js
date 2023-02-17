'use strict';

class Node {
  constructor(value, next=null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  includes(value) {
    let current = this.head;
    if (current.value === value) return true;
    while(current.next) {
      if (current.next.value === value) return true;
      current = current.next;
    }
    return false;
  }

  insert(value) {
    const oldHead = this.head;
    this.head = new Node(value);
    this.head.next = oldHead;
    this.length++;
  }

  toString() {

    let current = this.head;
    let text = '';
    while(current) {
      text += `{ ${current.value} } -> `;
      current = current.next;
    }
    return text + 'NULL';
  }
}

module.exports = LinkedList;
