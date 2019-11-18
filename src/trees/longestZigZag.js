import {TreeNode} from "./TreeNode.js";

/**
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