import {TreeNode} from "./TreeNode.js";

/**
 * 1372. Longest ZigZag Path in a Binary Tree
 * https://leetcode.com/problems/longest-zigzag-path-in-a-binary-tree/description/?envType=study-plan-v2&envId=leetcode-75
 * --------------------------------------------
 * You are given the root of a binary tree.
 *
 * A ZigZag path for a binary tree is defined as follow:
 *
 * Choose any node in the binary tree and a direction (right or left).
 * If the current direction is right, move to the right child of the current node; otherwise, move to the left child.
 * Change the direction from right to left or from left to right.
 * Repeat the second and third steps until you can't move in the tree.
 * Zigzag length is defined as the number of nodes visited - 1. (A single node has a length of 0).
 *
 * Return the longest ZigZag path contained in that tree.
 *
 * Example 1:
 *
 * Input: root = [1,null,1,1,1,null,null,1,1,null,1,null,null,null,1]
 * Output: 3
 * Explanation: Longest ZigZag path in blue nodes (right -> left -> right).
 *
 * Example 2:
 *
 * Input: root = [1,1,1,null,1,null,null,1,1,null,1]
 * Output: 4
 * Explanation: Longest ZigZag path in blue nodes (left -> right -> left -> right).
 * Example 3:
 *
 * Input: root = [1]
 * Output: 0
 *
 * Constraints:
 *
 * The number of nodes in the tree is in the range [1, 5 * 104].
 * 1 <= Node.val <= 100
 * ------------------------------------------------------
 * Runtime complexity - O(n)
 * Space complexity - O(n)
 *
 * @param {TreeNode} root
 * @return {number}
 */
let longestZigZag = function(root) {
  let maxSteps = 0;

  function dfs(node, goLeft, steps) {
    if (node === null) return;
    maxSteps = Math.max(steps, maxSteps);

    if (goLeft) {
      dfs(node.left,false, steps + 1 )
      dfs(node.right, true, 1)
    }
    else {
      dfs(node.right, true,steps + 1)
      dfs(node.left, false,1)
    }
  }

  dfs(root, true, 0);
  dfs(root, false, 0);
  return maxSteps;
};

let tree = new TreeNode(
  1,
  null,
  new TreeNode(1,
    new TreeNode(1),
    new TreeNode(1,
      new TreeNode(1,
        null,
          new TreeNode(1,
            null,
            new TreeNode(1),
          )
      ),
      new TreeNode(1)
    )
  )
);

console.log(longestZigZag(tree));