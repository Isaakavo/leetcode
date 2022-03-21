import {BinaryTree} from './preorderTraversal.mjs';


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

const postOrder = (root) => {
  const result = [];
  const traverse = (node) => {
    if(!node) return;
    traverse(node.left);
    traverse(node.right);
    result.push(node.val);
  };
  traverse(root);
  return result;
}

function main() {
  const values = ['F', 'B', 'A', 'D', 'C', 'E', 'G', 'I', 'H'];
  const tree = new BinaryTree();

  values.map((elemnt) => {
    tree.add(elemnt);
  });

  // console.log('InOrder',inOrder(tree.root));
  console.log('post',postOrder(tree.root));
}

main();