'use strict';

const { BinarySearchTree, BinaryTree, Node, KTree } = require('../index');

let testTree = new BinaryTree();
testTree.root = new Node(10);
testTree.root.left = new Node(5);
testTree.root.right = new Node(15);
testTree.root.left.left = new Node(1);
testTree.root.left.right = new Node(8);
testTree.root.right.right = new Node(17);

describe('Binary Tree', () => {
  it('Can instantiate an empty tree', () => {
    const empty = new BinaryTree();
    expect(empty.root).toBeNull();
  });


  it('Can instantiate a tree with a root node', () => {
    const notEmpty = new BinaryTree();
    notEmpty.root = new Node(1);
    expect(notEmpty.root.value).toBe(1);
  });

  it('BST can add left and right nodes properly', () => {
    const BST = new BinarySearchTree();
    BST.add(7);
    BST.add(11);
    BST.add(1);
    expect(BST.root.value).toBe(7);
    expect(BST.root.left.value).toBe(1);
    expect(BST.root.right.value).toBe(11);
  });

  it('Can return a collection from preorder traversal', () => {
    const order = testTree.preOrder();
    expect(order).toEqual([10, 5, 1, 8, 15, 17]);
  });

  it('Can return a collection from inorder traversal', () => {
    const order = testTree.inOrder();
    expect(order).toEqual([1, 5, 8, 10, 15, 17]);
  });

  it('Can return a collection from postorder traversal', () => {
    const order = testTree.postOrder();
    expect(order).toEqual([1, 8, 5, 17, 15, 10]);
  });

  it('BST knows what values it contains', () => {
    const BST = new BinarySearchTree();
    BST.add(7);
    BST.add(11);
    BST.add(1);
    expect(BST.contains(11)).toBeTruthy();
    expect(BST.contains(12)).toBeFalsy();
  });

  it('Can find the max of a given tree', () => {
    const tree = new BinaryTree();
    expect(tree.max()).toBeNull();
    tree.root = new Node(10);
    expect(tree.max()).toBe(10);
    tree.root.left = new Node(5);
    expect(tree.max()).toBe(10);
    tree.root.right = new Node(15);
    expect(tree.max()).toBe(15);
    tree.root.left.left = new Node(1);
    expect(tree.max()).toBe(15);
    tree.root.left.right = new Node(8);
    expect(tree.max()).toBe(15);
    tree.root.right.right = new Node(17);
    expect(tree.max()).toBe(17);
  });

  it('Can do a breadth first search', () => {
    let results = testTree.breadthFirst();
    expect(results).toEqual([10, 5, 15, 1, 8, 17]);
  });

  // it('Can execute FizzBuzz on a K-ary Tree', () => {
  //   const oldKTree = new KTree ();
  //   oldKTree.add(15);
  //   oldKTree.add(3);
  //   oldKTree.add(5);
  //   oldKTree.add(2);
  //   expect(oldKTree.root.value).toBe(15);
  //   // expect(oldKTree.root.children).toEqual([1, 2, 3]);
  //   expect(oldKTree.numNodes).toBe(4);
  //   // const newKTree = oldKTree.fizzBuzzTree();
  //   // expect(newKTree).toBe('wrong');
  // });

  // it('Binary Tree add funciton', () => {
  //   let tempTree = new BinaryTree();
  //   tempTree.add(1);
  //   expect(tempTree.breadthFirst()).toBe('wrong');
  // });

  it('Can execute FizzBuzz on a Binary tree', () => {
    let fizzyTree = testTree.fizzBuzzTree();
    expect(fizzyTree.breadthFirst()).toEqual(["Buzz", "Buzz", "FizzBuzz", "1", "8", "17"]);
  });

});




// Can successfully instantiate an empty tree
// Can successfully instantiate a tree with a single root node
// For a Binary Search Tree, can successfully add a left child and right child properly to a node
// Can successfully return a collection from a preorder traversal
// Can successfully return a collection from an inorder traversal
// Can successfully return a collection from a postorder traversal
// Returns true	false for the contains method, given an existing or non-existing node value
