import {TreeNode, treeFromArray, printTree} from "./TreeNode.js";

/**
 * @param {TreeNode} node
 * @param {number} key
 * @return {TreeNode}
 */
let deleteNode = function(node, key) {
  if (node === null)
    return null;
  if (node.val > key) {
    node.left = deleteNode(node.left, key);
  }
  else if (node.val < key) {
    node.right = deleteNode(node.right, key);
  }
  else {
    if (node.left === null) {
      return node.right;
    }
    else if (node.right === null) {
      return node.left;
    }
    else {
      let cur = getSuccessor(node);
      node.val = cur.val;
      node.right = deleteNode(node.right, cur.val);
    }
  }

  return node;
};

let getSuccessor = function (node) {
  node = node.right;
  while (node !== null && node.left !== null) {
    node = node.left;
  }

  return node;
}

let tree = treeFromArray([5,3,6,2,4,null,7]);
console.log(tree);
deleteNode(tree, 3);

console.log(tree);