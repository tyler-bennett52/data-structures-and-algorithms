const { Stack, Queue } = require('../index');

describe('Stacks and Qs', () => {

  it('Can successfully push onto a stack', () => {
    const stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);
    expect(stack.print()).toBe('3 -> 2 -> 1 -> ');
    expect(stack.length).toBe(3);
  });

  it('Can successfully push multiple values onto a stack', () => {
    const stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);
    expect(stack.print()).toBe('3 -> 2 -> 1 -> ');
    expect(stack.length).toBe(3);
  });

  it('Can successfully pop off the stack', () => {
    const stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);
    expect(stack.print()).toBe('3 -> 2 -> 1 -> ');
    expect(stack.pop()).toBe(3);
    expect(stack.length).toBe(2);
  });

  it('Can successfully empty a stack after multiple pops', () => {
    const stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);
    expect(stack.print()).toBe('3 -> 2 -> 1 -> ');
    stack.pop();
    stack.pop();
    stack.pop();
    expect(stack.isEmpty()).toBe(true);
  });

  it('Can successfully peek the next item on the stack', () => {
    const stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);
    expect(stack.print()).toBe('3 -> 2 -> 1 -> ');
    expect(stack.peek()).toBe(3);
    expect(stack.length).toBe(3);
  });




  it('Can successfully instantiate an empty stack', () => {
    const stack = new Stack();
    const queue = new Queue();
    expect(queue.dequeue()).toBeNull();
    expect(queue.peek()).toBeNull();
    expect(stack.pop()).toBeNull();
    expect(stack.peek()).toBeNull();
  });

  it('Calling pop or peek on an empty Stack returns null', () => {
    const stack = new Stack();
    const queue = new Queue();
    expect(queue.dequeue()).toBeNull();
    expect(queue.peek()).toBeNull();
    expect(stack.pop()).toBeNull();
    expect(stack.peek()).toBeNull();
  });



  //BEGIN QUEUES

  it('Can successfully enqueue into a queue', () => {
    const queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    expect(queue.print()).toBe('1 -> 2 -> 3 -> ');
    expect(queue.length).toBe(3);
  });

  it('Can successfully enqueue multiple values into a queue', () => {
    const queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    expect(queue.print()).toBe('1 -> 2 -> 3 -> ');
    expect(queue.length).toBe(3);
  });

  it('Can successfully dequeue out of a queue the expected value', () => {
    const queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    expect(queue.print()).toBe('1 -> 2 -> 3 -> ');
    expect(queue.dequeue()).toBe(1);
    expect(queue.length).toBe(2);
  });

  it('Can successfully peek into a queue, seeing the expected value', () => {
    const queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    expect(queue.print()).toBe('1 -> 2 -> 3 -> ');
    expect(queue.peek()).toBe(1);
    expect(queue.length).toBe(3);
  });

  it('Can successfully empty a queue after multiple dequeues', () => {
    const queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    expect(queue.print()).toBe('1 -> 2 -> 3 -> ');
    queue.dequeue();
    queue.dequeue();
    queue.dequeue();
    expect(queue.isEmpty()).toBe(true);
    expect(queue.length).toBe(0);
  });

  it('Can successfully instantiate an empty queue', () => {
    const stack = new Stack();
    const queue = new Queue();
    expect(queue.dequeue()).toBeNull();
    expect(queue.peek()).toBeNull();
    expect(stack.pop()).toBeNull();
    expect(stack.peek()).toBeNull();
  });

  it('Calling dequeue or peek on emtpy Queue returns null', () => {
    const stack = new Stack();
    const queue = new Queue();
    expect(queue.dequeue()).toBeNull();
    expect(queue.peek()).toBeNull();
    expect(stack.pop()).toBeNull();
    expect(stack.peek()).toBeNull();
  });

});
