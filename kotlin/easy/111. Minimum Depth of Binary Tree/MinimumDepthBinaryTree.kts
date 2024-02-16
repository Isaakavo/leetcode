//Given a binary tree, find its minimum depth.
//
//The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.
//
//Note: A leaf is a node with no children.

class TreeNode(var `val`: Int) {
    var left: TreeNode? = null
    var right: TreeNode? = null
}

fun insert(root: TreeNode?, value: Int?): TreeNode? {
    if (value == null) {
        return null
    }

    if (root == null && value != null) {
        return TreeNode(value)
    }

    if (root != null && value > root.`val`) {
        root.left = insert(root.left, value)
    } else if (root != null && value < root.`val`) {
        root.right = insert(root.right, value)
    }
    return root
}

fun printTree(treeToPrint: TreeNode?) {
    if (treeToPrint == null) {
        return
    }

    var currentNode = treeToPrint

    println(currentNode.`val`)
    printTree(currentNode.left)
    printTree(currentNode.right)
}

fun minDepth(root: TreeNode?): Int {
    if(root == null) {
        return 0
    }

    val leftDepth = minDepth(root.left)
    val rightDepth = minDepth(root.right)

    // Base case where we found a leaf
    if(root.left == null && root.right == null) {
        return 1
    }

    // Case when we identify that a node is not a leaf, so we reduce the depth var
    if(root.left == null) {
        return rightDepth + 1
    } else if(root.right == null) {
        return leftDepth + 1
    }

    return Math.min(leftDepth, rightDepth) + 1
}

// Fix the logic to build the trees
val root: List<Int?> = listOf(3, 9, 20, null, null, 15, 7)
val tree = TreeNode(root[0] ?: 3)

for (i in 1..root.size - 1) {
    insert(tree, root[i])
}

printTree(tree)