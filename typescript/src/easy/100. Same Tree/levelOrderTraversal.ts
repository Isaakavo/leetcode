/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */


// THIS ONE SHOULD  NOT BE HERE

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

// function levelOrder(root: TreeNode | null): number[][] {}
function levelOrder(root: TreeNode | null): number[][] {
  if (root === undefined) return [];
  const queue: TreeNode[] = [];
  const visitedNode: TreeNode[] = [];
  let result: number[][] = [];

  // visitedNode.push(root);
  queue.push(root);
  result.push([root.val]);

  while (queue.length > 0) {
    const currentNode = queue.shift();
    if (
      !(visitedNode.indexOf(currentNode) > -1) &&
      currentNode.left !== null &&
      currentNode.right !== null
    ) {
      result = result.concat([[currentNode.left.val, currentNode.right.val]]);
      visitedNode.push(currentNode);
      queue.push(currentNode.left, currentNode.right);
    } else if (
      !(visitedNode.indexOf(currentNode) > -1) &&
      currentNode.left !== null
    ) {
      result[result.length - 1].push(currentNode.left.val);
      visitedNode.push(currentNode);
      queue.push(currentNode.left);
    } else if (
      !(visitedNode.indexOf(currentNode) > -1) &&
      currentNode.right !== null
    ) {
      result[result.length - 1].push(currentNode.right.val);
      visitedNode.push(currentNode);
      queue.push(currentNode.right);
    }
  }

  return result;
}

const values: string[] = ['F', 'B', 'A', 'D', 'C', 'E', 'G', 'I', 'H'];
const valuesNumber: number[] = [3, 9, 20, null, null, 15, 7];
const tree: BinaryTree = new BinaryTree();

valuesNumber.map((element) => {
  tree.add(element);
});

levelOrder(tree.root);
