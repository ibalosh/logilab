import {TreeNode, treeFromArray} from "./TreeNode.js";

/**
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
