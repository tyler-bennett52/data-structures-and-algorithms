'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.children = [];
  }
}


class KTree {
  constructor(k) {
    this.root = null;
    this.maxChildren = k;
    this.numNodes = 0;
  }

  add(value) {
    const queue = [];
    let tempNode = new Node(value);
    if (!this.root) {
      this.root = tempNode;
      this.numNodes++;
      return this;
    }
    queue.push(this.root);
    while (queue.length > 0) {
      let current = queue.shift();
      for (let i = 0; i < this.k; i++) {
        if (!current.children[i]) {
          current.children[i] = tempNode;
          this.numNodes++;
          return this;
        } else {
          queue.push(current.children[i]);
        }
      }
    }
  }

  breadthFirst() {
    const results = [];
    if (!this.root) return null;
    const queue = [];
    queue.push(this.root);
    while (queue.length > 0) {
      let current = queue.unshift();
      results.push(current.value);
      for (let i = 0; i < this.k; i++) {
        if (current.children[i]) {
          queue.push(current.children[i]);
        }
      }
    } return results;
  }

  fizzBuzzTree() {
    let tree = this.breadthFirst();
    let finalTree = new KTree();
    let fizzyTree = tree.map((node) => {
      if (node % 3 === 0 && node % 5 === 0) {
        return 'FizzBuzz';
      } else if (node % 3 === 0) {
        return 'Fizz';
      } else if (node % 5 === 0) {
        return 'Buzz';
      } else {
        return `${node}`;
      }
    }); 
    for (let value of fizzyTree) {
      finalTree.add(value);
    } return finalTree;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  add(value) {
    let tempNode = new Node(value);
    if (!this.root) {
      this.root = tempNode;
      return this;
    }
    const queue = [];
    queue.push(this.root);
    while (queue.length > 0) {
      let current = queue.shift();
      if (!current.left) {
        current.left = tempNode;
        return this;
      } else {
        queue.push(current.left);
      }
      if (!current.right) {
        current.right = tempNode;
        return this;
      } else {
        queue.push(current.right);
      }
    }
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

  fizzBuzzTree() {
    let tree = this.breadthFirst();
    let finalTree = new BinaryTree();
    let fizzyTree = tree.map((node) => {
      if (node % 3 === 0 && node % 5 === 0) {
        return 'FizzBuzz';
      } else if (node % 3 === 0) {
        return 'Fizz';
      } else if (node % 5 === 0) {
        return 'Buzz';
      } else {
        return `${node}`;
      }
    });
    for (let value of fizzyTree) {
      finalTree.add(value);
    } return finalTree;
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


let testTree = new BinaryTree();
testTree.add(10);
testTree.add(1);
testTree.add(5);
testTree.add(7);
testTree.add(9);
testTree.add(15);

// console.log(testTree);
console.log(testTree.fizzBuzzTree().breadthFirst());


module.exports = { BinaryTree, BinarySearchTree, Node, KTree };
