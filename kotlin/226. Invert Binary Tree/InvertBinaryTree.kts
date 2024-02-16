// Given the root of a binary tree, invert the tree, and return its root.
class TreeNode(var `val`: Int) {
    var left: TreeNode? = null
    var right: TreeNode? = null
}

fun insert(root: TreeNode?, value: Int): TreeNode {
    if (root == null) {
        return TreeNode(value)
    }
    if (value < root.`val`) {
        root.left = insert(root.left, value)
    } else if (value > root.`val`) {
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

fun invertTree(root: TreeNode?): TreeNode? {
    if (root == null) {
        return null
    }

    var temp: TreeNode? = null
    var currentNode = root

    invertTree(currentNode.left)
    temp = currentNode.left
    invertTree(currentNode.right)
    currentNode.left = currentNode.right
    currentNode.right = temp


    return currentNode
}

val root = listOf(1)
val tree = TreeNode(root[0])

for (i in 1..root.size - 1) {
    insert(tree, root[i])
}

printTree(tree)
invertTree(tree)
println("====================")
printTree(tree)
