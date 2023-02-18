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
    this.tail = null;
    this.length = 0;
  }

  append(value) {
    if(!this.head) {
      this.insert(value);
      return this.length;
    }
    let current = this.head;
    while(current.next) {
      current = current.next;
    }
    current.next = new Node(value);
    this.length++;
    return this.length;
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

  insertAfter(searchValue, insertValue) {
    let newNode = new Node(insertValue);
    let current = this.head;
    if (current.value === searchValue) {
      let oldNext = current.next;
      current.next = newNode;
      newNode.next = oldNext;
      this.length++;
      return this.length;
    }
    while (current.next) {
      current = current.next;
      if (current.value === searchValue) {
        let oldNext = current.next;
        current.next = newNode;
        newNode.next = oldNext;
        this.length++;
        return this.length;
      }
    }
    // If search value is not found insert at end
    current.next = newNode;
    this.length++;
    return this.length;
  }

  insertBefore(searchValue, insertValue) {
    if (this.head.value === searchValue) {
      this.insert(insertValue);
      return this.length;
    }
    let newNode = new Node (insertValue);
    let current = this.head;
    while (current.next) {
      if(current.next.value === searchValue) {
        let oldNext = current.next;
        current.next = newNode;
        newNode.next = oldNext;
        this.length++;
        return this.length;
      }
      current = current.next;
    }
    // If search value is not found insert at end
    current.next = newNode;
    this.length++;
    return this.length;
  }

  kthFromEnd(k) {
    let distanceToEnd = this.length - 1;
    let current = this.head;
    if (k > distanceToEnd) {
      return `List.length===${this.length}, maxK===${distanceToEnd}`;
    }
    while (distanceToEnd > k) {
      current = current.next;
      distanceToEnd--;
    } return current.value;
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
