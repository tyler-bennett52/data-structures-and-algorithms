'use strict';

// Require our linked list implementation
const LinkedList = require('../index');

describe('Linked List', () => {
  it('should instantiate an empty linked list', () => {
    const linked = new LinkedList();

    expect(linked.head).toBeNull();
  });

  it('should insert at beginning of empty list', () => {
    const linked = new LinkedList();
    linked.insert('apple');

    expect(linked.head.value).toEqual('apple');
    expect(linked.head.next).toBeNull();
  });

  it('should insert at beginning of populated list', () => {
    const linked = new LinkedList();
    linked.insert('apple');
    linked.insert('banana');

    expect(linked.head.value).toEqual('banana');
    expect(linked.head.next.value).toEqual('apple');
    expect(linked.head.next.next).toBeNull();
  });

  it('should display as string properly', () => {

    const linked = new LinkedList();
    linked.insert('apple');
    linked.insert('banana');

    const linkedString = linked.toString();

    expect(linkedString).toEqual('{ banana } -> { apple } -> NULL');

  });

  it('should know when value is included in list', () => {

    const linked = new LinkedList();
    linked.insert('apple');
    linked.insert('banana');

    expect(linked.includes('apple')).toBe(true);
  });

  it('should know when value is not included in list', () => {

    const linked = new LinkedList();
    linked.insert('apple');
    linked.insert('banana');

    expect(linked.includes('cucumber')).toBe(false);
  });

  it('should be able to append 1 node', () => {
    const linked = new LinkedList;
    linked.append('apple');
    expect(linked.length).toEqual(1);
  });
  it('should be able to append multiple nodes', () => {
    const linked = new LinkedList;
    linked.append('apple');
    linked.append('banana');
    const linkedString = linked.toString();
    expect(linkedString).toBe('{ apple } -> { banana } -> NULL');
  });
  it('should be able to before the middle Node', () => {
    const linked = new LinkedList;
    linked.append('apple');
    linked.append('banana');
    linked.append('cherry');
    linked.insertBefore('banana', 'watermelon');
    const linkedString = linked.toString();
    expect(linkedString).toBe('{ apple } -> { watermelon } -> { banana } -> { cherry } -> NULL');
  });

  it('Can insert before the first node', () => {
    const linked = new LinkedList;
    linked.append('apple');
    linked.append('banana');
    linked.append('cherry');
    linked.insertBefore('apple', 'watermelon');
    const linkedString = linked.toString();
    expect(linkedString).toBe('{ watermelon } -> { apple } -> { banana } -> { cherry } -> NULL');
  });

  it('should be able to insert after the middle Node', () => {
    const linked = new LinkedList;
    linked.append('apple');
    linked.append('banana');
    linked.append('cherry');
    linked.insertAfter('banana', 'watermelon');
    const linkedString = linked.toString();
    expect(linkedString).toBe('{ apple } -> { banana } -> { watermelon } -> { cherry } -> NULL');
  });

  it('should be able to insert after the last Node', () => {
    const linked = new LinkedList;
    linked.append('apple');
    linked.append('banana');
    linked.append('cherry');
    linked.insertAfter('cherry', 'watermelon');
    const linkedString = linked.toString();
    expect(linkedString).toBe('{ apple } -> { banana } -> { cherry } -> { watermelon } -> NULL');
  });


  it('should have an accurate length property', () => {
    const linked = new LinkedList();
    linked.insert('apple');
    linked.insert('banana');
    linked.insertBefore('banana', 'kiwi');
    linked.insertAfter('banana', 'mango');
    linked.append('raspberry');
    expect(linked.length).toEqual(5);
  });

  it('should be able to insert before and after searched values and append to end of list', () => {
    const linked = new LinkedList();
    linked.insert('apple');
    linked.insert('banana');
    linked.insertBefore('apple', 'kiwi');
    linked.insertAfter('kiwi', 'mango');
    linked.append('raspberry');
    let linkedString = linked.toString();
    expect(linkedString).toEqual('{ banana } -> { kiwi } -> { mango } -> { apple } -> { raspberry } -> NULL');
  });

  it('should be able to fetch a value K distance from the tail', () => {
    const linked = new LinkedList();
    linked.insert('apple');
    linked.insert('banana');
    linked.insertBefore('apple', 'kiwi');
    linked.insertAfter('kiwi', 'mango');
    linked.append('raspberry');
    let fourth = linked.kthFromEnd(9);
    expect(fourth).toBe('apple');
    
  });

});
