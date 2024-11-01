import {printTree, TreeNode} from "../TreeNode.js";

/**
 * Insert new node value into Binary tree.
 *
 * https://www.geeksforgeeks.org/insertion-in-binary-search-tree/
 *
 * @param {TreeNode} node
 * @param {number} val
 * @returns {TreeNode|*}
 */
function insertNode(node, val) {
  if (node === null) {
    return new TreeNode(val);
  }

  if (node.val === val) {
    return node;
  }

  if (val > node.val)
    node.right = insertNode(node.right, val);

  if (val < node.val)
    node.left = insertNode(node.left, val);

  return node;
}

let root = null;
root = insertNode(root,50);
root = insertNode(root,30)
root = insertNode(root,20)
root = insertNode(root,40)
root = insertNode(root,70)
root = insertNode(root,60)
root = insertNode(root,80)

printTree(root, "inOrder")


