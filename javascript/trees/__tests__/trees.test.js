'use strict';

const { BinarySearchTree, BinaryTree, Node } = require('../index');

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
    const order = testTree.preOrder();
    expect(order).toEqual([10, 5, 1, 8, 15, 17]);
  });

  it('BST knows what values it contains', () => {
    const BST = new BinarySearchTree();
    BST.add(7);
    BST.add(11);
    BST.add(1);
    expect(BST.contains(11)).toBeTruthy();
    expect(BST.contains(12)).toBeFalsy();
  });


});




// Can successfully instantiate an empty tree
// Can successfully instantiate a tree with a single root node
// For a Binary Search Tree, can successfully add a left child and right child properly to a node
// Can successfully return a collection from a preorder traversal
// Can successfully return a collection from an inorder traversal
// Can successfully return a collection from a postorder traversal
// Returns true	false for the contains method, given an existing or non-existing node value
