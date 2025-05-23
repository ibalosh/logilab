import {TreeNode, treeFromArray} from "./TreeNode.js";

/**
 * 236. Lowest Common Ancestor of a Binary Tree
 * https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/description/?envType=study-plan-v2&envId=leetcode-75
 * --------------------------------------------
 * Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree.
 *
 * According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two
 * nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to
 * be a descendant of itself).”
 *
 * Example 1:
 *
 * Input: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1
 * Output: 3
 * Explanation: The LCA of nodes 5 and 1 is 3.
 *
 * Example 2:
 *
 * Input: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 4
 *
 * Output: 5
 * Explanation: The LCA of nodes 5 and 4 is 5, since a node can be a descendant of itself according to the LCA definition.
 *
 * Example 3:
 *
 * Input: root = [1,2], p = 1, q = 2
 * Output: 1
 *
 * Constraints:
 *
 * The number of nodes in the tree is in the range [2, 105].
 * -109 <= Node.val <= 109
 * All Node.val are unique.
 * p != q
 * p and q will exist in the tree.
 * ------------------------------------------------------
 *
 *
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
let lowestCommonAncestor = function(root, p, q) {
  let result = null;
   function dfs(node, p, q) {
     if (node === null) return 0;
     let left = dfs(node.left, p, q) ? 1 : 0;
     let right = dfs(node.right, p, q) ? 1 : 0;

     let mid = (node.val === p || node.val === q) ? 1 : 0
     if (left + right + mid >=2) {
       result = node;
     }

     return (left + right + mid > 0)
   }

   dfs(root, p.val, q.val);

   return result;
};

let tree = new TreeNode(
  3,
  new TreeNode(5,
    new TreeNode(6),
    new TreeNode(2,
      new TreeNode(7),
      new TreeNode(4)
    )
  ),
  new TreeNode(1,
    new TreeNode(0),
    new TreeNode(8)
  )
);

console.log(lowestCommonAncestor(tree, new TreeNode(5), new TreeNode(1)))

let treeFromArr = treeFromArray([3,5,1,6,2,0,8,null,null,7,4]);
console.log(lowestCommonAncestor(treeFromArr, new TreeNode(5), new TreeNode(1)));
