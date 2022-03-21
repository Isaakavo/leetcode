/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

export class BinaryTree {
  constructor() {
    this.root = null;
  }

  add(data) {
    const node = this.root;
    if (node == null) {
      this.root = new TreeNode(data);
      return;
    } else {
      const searchTree = (node) => {
        if (data < node.val) {
          if (node.left === null) {
            node.left = new TreeNode(data);
            return;
          } else if (node.left !== null) {
            return searchTree(node.left);
          }
        } else if (data > node.val) {
          if (node.right === null) {
            node.right = new TreeNode(data);
            return;
          } else if (node.right !== null) {
            return searchTree(node.right);
          }
        } else {
          return null;
        }
      };
      return searchTree(node);
    }
  }
}

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversalLarge = function (root) {
  const first = root;
  const result = [];
  const traverse = (node) => {
    if(!node) return;
    if (node.left !== null) {
      result.push(node.val);
      traverse(node.left);
      if (node.right !== null) {
        traverse(node.right);
        return;
      }
      return;
    } else if (node.left === null) {
      result.push(node.val);
      if (node.right !== null) {
        traverse(node.right);
        return;
      }
      return;
    } 
  };
  traverse(first);
  return result;
};

var preorderTraversalShort = function (root) {
  const first = root;
  const result = [];
  const traverse = (node) => {
    if(!node) return;
      result.push(node.val);
      traverse(node.left);
      traverse(node.right);
  }
  traverse(first);
  return result;
};

const inOrder = (root) => {
  const result = [];
  const traverse = (node) => {
    if(!node) return;
    traverse(node.left);
    result.push(node.val);
    traverse(node.right); 
  } 
  traverse(root);
  return result;
}

function main() {
  const values = ['F', 'B', 'A', 'D', 'C', 'E', 'G', 'I', 'H'];
  const letcodeValues = [];

  let root = new BinaryTree();
  let leetCode = new BinaryTree();

  values.map((elemnt) => {
    root.add(elemnt);
  });

  letcodeValues.map((elem) => leetCode.add(elem));

  // console.log(preorderTraversalShort(root.root));
  // console.log(preorderTraversalShort(leetCode.root));
}

main();
