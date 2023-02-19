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

  // it('should be able to append to an empty list', () => {
  //   const linked = new LinkedList();
  //   linked.append('raspberry');
  //   let linkedString = linked.toString();
  //   expect(linkedString).toEqual('{ banana } -> { kiwi } -> { mango } -> { apple } -> { raspberry } -> NULL');
  // });


  it('should be able to fetch a value K distance from the tail', () => {
    const linked = new LinkedList();
    linked.insert('apple');
    linked.insert('banana');
    linked.insertBefore('apple', 'kiwi');
    linked.insertAfter('kiwi', 'mango');
    linked.append('raspberry');
    let fourth = linked.kthFromEnd(1);
    expect(fourth).toBe('apple');
  });

  it('Return the only Node if list is 1 Node long', () => {
    const linked = new LinkedList();
    linked.insert('apple');
    let tooFar = linked.kthFromEnd(0);
    expect(tooFar).toBe('apple');
  });

  it('returns an exception if k > length', () => {
    const linked = new LinkedList();
    linked.insert('apple');
    let tooFar = linked.kthFromEnd(9001);
    expect(tooFar).toBe('List.length===1, maxK===0');
  });

  it('returns an exception if k = length', () => {
    const linked = new LinkedList();
    linked.insert('apple');
    let tooFar = linked.kthFromEnd(1);
    expect(tooFar).toBe('List.length===1, maxK===0');
  });

  it('returns an exception if k < 0', () => {
    const linked = new LinkedList();
    linked.insert('apple');
    let tooFar = linked.kthFromEnd(-9001);
    expect(tooFar).toBe('K must be an integer above 0');
  });

  it('merges two equally long lists', () => {
    const listA = new LinkedList();
    const listB = new LinkedList();
    listA.insert('A2');
    listA.insert('A1');
    listB.insert('B2');
    listB.insert('B1');
    const listC = listA.zipLists(listA, listB);
    expect(listC.toString()).toBe('{ A1 } -> { B1 } -> { A2 } -> { B2 } -> NULL');
  });

  it('merges two lists of different lengths', () => {
    const listA = new LinkedList();
    const listB = new LinkedList();
    listA.insert('2');
    listA.insert('3');
    listA.insert('1');
    listB.insert('9');
    listB.insert('5');
    const listC = listA.zipLists(listA, listB);
    expect(listC.toString()).toBe('{ 1 } -> { 5 } -> { 3 } -> { 9 } -> { 2 } -> NULL');
  });

  it('reverses a linked list\'s  order', () => {
    const listA = new LinkedList();
    const listB = new LinkedList();
    listA.insert('2');
    listA.insert('3');
    listA.insert('1');
    listB.insert('9');
    listB.insert('5');
    const listC = listA.zipLists(listA, listB);
    listC.reverse();
    expect(listC.toString()).toBe('{ 2 } -> { 9 } -> { 3 } -> { 5 } -> { 1 } -> NULL');
  });

});
