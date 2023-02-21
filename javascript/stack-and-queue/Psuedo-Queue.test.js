const PsuedoQueue = require('./Pseudo-Queue');

it('PsuedoQ can enqueue', () => {
  const pQ = new PsuedoQueue();
  pQ.enqueue(1);
  pQ.enqueue(2);
  pQ.enqueue(3);
  expect(pQ.stack1.print()).toBe('1 -> 2 -> 3 -> ');
});

it('PsuedoQ can dequeue', () => {
  const pQ = new PsuedoQueue();
  pQ.enqueue(1);
  pQ.enqueue(2);
  pQ.enqueue(3);
  expect(pQ.dequeue()).toBe(1);
  expect(pQ.stack1.print()).toBe('2 -> 3 -> ');
});

