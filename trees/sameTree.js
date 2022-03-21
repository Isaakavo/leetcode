"use strict";
exports.__esModule = true;
var levelOrderTraversal_1 = require("./levelOrderTraversal");
function isSameTree(p, q) {
    var compareNodes = function (node1, node2) {
        return node1.val === node2.val;
    };
    var qQueue = [];
    var pQueue = [];
    var result = false;
    pQueue.push(p);
    qQueue.push(q);
    while (qQueue.length && pQueue.length) {
        var nodeQ = qQueue.shift();
        var nodeP = pQueue.shift();
        result = compareNodes(nodeQ, nodeP);
        if (!result) {
            return result;
        }
        if (nodeQ.left && nodeP.left) {
            pQueue.push(nodeP.left);
            qQueue.push(nodeQ.left);
        }
        if (nodeQ.right && nodeP.right) {
            pQueue.push(nodeP.right);
            qQueue.push(nodeQ.right);
        }
    }
    return true;
}
// const p = [1,2,3], q = [1,2,3]
var p = [1, 2], q = [1, null, 2];
var tree1 = new levelOrderTraversal_1.BinaryTree();
var tree2 = new levelOrderTraversal_1.BinaryTree();
tree1.root = new levelOrderTraversal_1.TreeNode(p[0], new levelOrderTraversal_1.TreeNode(p[1]), new levelOrderTraversal_1.TreeNode(p[2]));
tree2.root = new levelOrderTraversal_1.TreeNode(q[0], new levelOrderTraversal_1.TreeNode(q[1]), new levelOrderTraversal_1.TreeNode(q[2]));
console.log(isSameTree(tree1.root, tree2.root));
