import {TreeNode} from "./TreeNode.js";

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
let maxDepth = function(root) {
  if (root === null) return 0;
  else {
    let leftHeight = maxDepth(root.left);
    let rightHeight = maxDepth(root.right);
    return Math.max(leftHeight, rightHeight) + 1;
  }
};

let tree = new TreeNode(
  4,
  new TreeNode(2,
    new TreeNode(1),
    new TreeNode(1)
  ),
  new TreeNode(7)
);

console.log(maxDepth(tree));


