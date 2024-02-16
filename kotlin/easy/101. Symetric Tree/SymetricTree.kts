// Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).

/**
 * Example:
 * var ti = TreeNode(5)
 * var v = ti.`val`
 * Definition for a binary tree node.
 * class TreeNode(var `val`: Int) {
 *     var left: TreeNode? = null
 *     var right: TreeNode? = null
 * }
 */
class Solution {
    fun isSymmetric(root: TreeNode?): Boolean {
        if (root == null) {
            return false
        }

        return isMirror(root.left, root.right)
    }

    fun isMirror(node1: TreeNode?, node2: TreeNode?): Boolean {
        if (node1 == null && node2 == null) {
            return true
        }

        if (node1 == null || node2 == null) {
            return false
        }

        return node1.`val` == node2.`val` && isMirror(node1.left, node2.right) && isMirror(node1.right, node2.left)
    }
}

var tree: TreeNode = TreeNode(1)

fun createTree() {
    tree.left = TreeNode(2)
    tree.right = TreeNode(2)
    tree.left.left = TreeNode(3)
    tree.left.right = TreeNode(4)
    tree.right.left = TreeNode(3)
    tree.right.right = TreeNode(4)
}

val solution = Solution()
createTree()
solution.isSymmetric(tree)


class TreeNode(var `val`: Int) {
    var left: TreeNode? = null
    var right: TreeNode? = null
}