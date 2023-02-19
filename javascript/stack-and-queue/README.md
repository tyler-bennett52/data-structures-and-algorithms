# Singly Linked List

Implement Stack, Queue, and Node classes

## Challenge

Build 3 classes: Node, Stack, and Queue as well as some basic method for Stack and Queue. More will be added via code challenge.

## Approach & Efficiency

I made small but I think useful changes to the bare-bones implementation done in class. I included a print method and a length property in both Stack and Queue to assist in building tests and for future troubleshooting. Additionally I included the "tail" property (bottom and last) as I regretted not including it in Linked List.

## API

### Day 1 of Stacks and Queues

#### Stack

push(value) - Adds a value to the top of the stack.
pop(value) - Removes a value from the top of the stack.
peek() - Retrieves a value from the top of the stack without removing it.
isEmpty() - Returns true/false based on whether or not there are any values in the stack.
print() - Troubleshooting method that concatenates all values into a string.

#### Queue

enqueue(value) - Adds a value to the front of the queue.
dequeue(value) - Removes a value from the front of the queue.
peek() - Retrieves a value from the front of the queue without removing it.
isEmpty() - Returns true/false based on whether or not there are any values in the queue.
print() - Troubleshooting method that concatenates all values into a string.
