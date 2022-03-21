import { TreeNode, BinaryTree } from './levelOrderTraversal';
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
