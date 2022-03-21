"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var levelOrderTraversal_1 = require("./levelOrderTraversal");
function isSameTree(p, q) {
    if (!p && !q) {
        return true;
    }
    else if (!p || !q) {
        return false;
    }
    else {
        return (p.val === q.val &&
            isSameTree(p.left, q.left) &&
            isSameTree(p.right, q.right));
    }
}
// const p = [1, 2, 3],
//   q = [1, 2, 3];
var p = [1, 2], q = [1, null, 2];
var tree1 = new levelOrderTraversal_1.BinaryTree();
var tree2 = new levelOrderTraversal_1.BinaryTree();
tree1.root = new levelOrderTraversal_1.TreeNode(p[0], new levelOrderTraversal_1.TreeNode(p[1]), new levelOrderTraversal_1.TreeNode(p[2]));
tree2.root = new levelOrderTraversal_1.TreeNode(q[0], new levelOrderTraversal_1.TreeNode(q[1]), new levelOrderTraversal_1.TreeNode(q[2]));
isSameTree(tree1.root, tree2.root);
//# sourceMappingURL=sameTree.js.map