'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}


class BinaryTree {
  constructor() {
    this.root = null;
  }

  breadthFirst() {
    const results = [];
    const queue = [];
    if (!this.root) return null;
    queue.push(this.root);
    while (queue.length > 0) {
      if (queue[0].left) queue.push(queue[0].left);
      if (queue[0].right) queue.push(queue[0].right);
      results.push(queue.shift().value);

    } return results;
  }

  preOrder() {
    const results = [];
    const traverse = (node) => {
      results.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    };
    traverse(this.root);
    return results;
  }

  inOrder() {
    const results = [];
    const traverse = (node) => {
      if (node.left) traverse(node.left);
      results.push(node.value);
      if (node.right) traverse(node.right);
    };
    traverse(this.root);
    return results;
  }

  postOrder() {
    const results = [];
    const traverse = (node) => {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      results.push(node.value);
    };
    traverse(this.root);
    return results;
  }

  max() {
    let max = 0;
    if (!this.root) return null;
    const traverse = (node) => {
      if (node.value > max) max = node.value;
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    };
    traverse(this.root);
    return max;
  }
}

class BinarySearchTree extends BinaryTree {
  add(value) {
    const newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return this;
    }
    let current = this.root;
    while (current) {
      if (value === current.value) return this;

      if (value < current.value) {
        if (!current.left) {
          current.left = newNode;
          return this;
        }
        else { current = current.left; }
      }
      if (value > current.value) {
        if (!current.right) {
          current.right = newNode;
          return this;
        }
        else { current = current.right; }
      }
    }
  }

  contains(value) {
    let current = this.root;
    while (current) {
      if (value === current.value) return true;
      if (value < current.value) current = current.left;
      if (value > current.value) current = current.right;

    } return false;
  }
}


module.exports = { BinaryTree, BinarySearchTree, Node };
