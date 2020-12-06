import {TreeNode} from "./TreeNode.js";

/**
 * 104. Maximum Depth of Binary Tree
 * https://leetcode.com/problems/maximum-depth-of-binary-tree/description/?envType=study-plan-v2&envId=leetcode-75
 * -----------------------------------------------------------------------------
 *
 * Given the root of a binary tree, return its maximum depth.
 *
 * A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the
 * farthest leaf node.
 *
 * Example 1:
 *
 * Input: root = [3,9,20,null,null,15,7]
 * Output: 3
 *
 * Example 2:
 *
 * Input: root = [1,null,2]
 * Output: 2
 *
 * Constraints:
 *
 * The number of nodes in the tree is in the range [0, 104].
 * -100 <= Node.val <= 100
 * -----------------------------------------------------------------------------
 * Runtime complexity: O(n) - n is the number of nodes in the tree
 * Space complexity: O(log(n)) 
 *
/**
 * @param {TreeNode} root
 * @return {number}
 */
let maxDepth = function(root) {
  if (root === null) return 0;

  let depth = 0;
  let queue = [];

  queue.push(root);

  while (queue.length) {
    depth++
    let length = queue.length;
    for (let i = 0 ; i < length; i++) {
      let node = queue.shift();
      if (node.left !== null) queue.push(node.left);
      if (node.right !== null) queue.push(node.right);
    }
  }

  return depth;
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


