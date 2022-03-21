"use strict";
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
exports.__esModule = true;
exports.BinaryTree = exports.TreeNode = void 0;
var TreeNode = /** @class */ (function () {
    function TreeNode(val, left, right) {
        this.val = val === undefined ? null : val;
        this.left = left === undefined ? null : left;
        this.right = right === undefined ? null : right;
    }
    return TreeNode;
}());
exports.TreeNode = TreeNode;
var BinaryTree = /** @class */ (function () {
    function BinaryTree() {
        this.root = null;
    }
    BinaryTree.prototype.add = function (value) {
        var node = new TreeNode(value);
        if (this.root === null) {
            this.root = node;
        }
        else {
            var currentNode = this.root;
            while (currentNode) {
                if (value > currentNode.val) {
                    if (currentNode.right === null) {
                        currentNode.right = node;
                        return;
                    }
                    currentNode = currentNode.right;
                }
                else {
                    if (currentNode.left === null) {
                        currentNode.left = node;
                        return;
                    }
                    currentNode = currentNode.left;
                }
            }
        }
    };
    return BinaryTree;
}());
exports.BinaryTree = BinaryTree;
// function levelOrder(root: TreeNode | null): number[][] {}
function levelOrder(root) {
    if (root === undefined)
        return [];
    var queue = [];
    var visitedNode = [];
    var result = [];
    // visitedNode.push(root);
    queue.push(root);
    result.push([root.val]);
    while (queue.length > 0) {
        var currentNode = queue.shift();
        if (!(visitedNode.indexOf(currentNode) > -1) &&
            currentNode.left !== null &&
            currentNode.right !== null) {
            result = result.concat([[currentNode.left.val, currentNode.right.val]]);
            visitedNode.push(currentNode);
            queue.push(currentNode.left, currentNode.right);
        }
        else if (!(visitedNode.indexOf(currentNode) > -1) &&
            currentNode.left !== null) {
            result[result.length - 1].push(currentNode.left.val);
            visitedNode.push(currentNode);
            queue.push(currentNode.left);
        }
        else if (!(visitedNode.indexOf(currentNode) > -1) &&
            currentNode.right !== null) {
            result[result.length - 1].push(currentNode.right.val);
            visitedNode.push(currentNode);
            queue.push(currentNode.right);
        }
    }
    return result;
}
var values = ['F', 'B', 'A', 'D', 'C', 'E', 'G', 'I', 'H'];
var valuesNumber = [3, 9, 20, null, null, 15, 7];
var tree = new BinaryTree();
valuesNumber.map(function (element) {
    tree.add(element);
});
levelOrder(tree.root);
