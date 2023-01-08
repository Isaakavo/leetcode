/*
Given the roots of two binary trees p and q, write a function to check if they are the same or not.

Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.

Example 1:
  Input: p = [1,2,3], q = [1,2,3]
  Output: true

Example 2:
  Input: p = [1,2], q = [1,null,2]
  Output: false

Example 3:
  Input: p = [1,2,1], q = [1,1,2]
  Output: false

Constraints:
  The number of nodes in both trees is in the range [0, 100].
  -104 <= Node.val <= 104
*/


class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? null : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

class BinaryTree {
  root: TreeNode | null;
  constructor() {
    this.root = null;
  }

  public add(value: number): void {
    const node: TreeNode = new TreeNode(value);

    if (this.root === null) {
        this.root = node;
    } else {
        let currentNode: TreeNode = this.root;

        while (currentNode) {
            if (value > currentNode.val) {
                if (currentNode.right === null) {
                    currentNode.right = node;
                    return;
                }

                currentNode = currentNode.right;
            } else {
                if (currentNode.left === null) {
                    currentNode.left = node;
                    return;
                }

                currentNode = currentNode.left;
            }
        }
    }
  }
}

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
  if (!p && !q) {
    return true;
  } else if (!p || !q) {
    return false;
  } else {
    return (
      p.val === q.val &&
      isSameTree(p.left, q.left) &&
      isSameTree(p.right, q.right)
    );
  }
}

// const p = [1, 2, 3],
//   q = [1, 2, 3];
const p = [1, 2],
  q = [1, null, 2];
const tree1: BinaryTree = new BinaryTree();
const tree2: BinaryTree = new BinaryTree();

tree1.root = new TreeNode(p[0], new TreeNode(p[1]), new TreeNode(p[2]));

tree2.root = new TreeNode(q[0], new TreeNode(q[1]), new TreeNode(q[2]));

isSameTree(tree1.root, tree2.root);
