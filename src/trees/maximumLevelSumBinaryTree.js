import {TreeNode} from "./TreeNode.js";

/**
 * @param {TreeNode} root
 * @return {number}
 */
let maxLevelSum = function(root) {
  if (root == null) return 0;

  let queue = [root]
  let maxNumbersOnLevel = Number.MIN_VALUE;
  let maxNumbersLevel = null;
  let currentLevel = 0;

  while (queue.length > 0) {
    currentLevel++;
    let sumOnLevel = 0;

    let currentQueueSize = queue.length;
    for (let j = 0; j < currentQueueSize; j++) {
      let node = queue.shift();
      sumOnLevel += node.val;

      if (node.left !== null)
        queue.push(node.left);

      if (node.right !== null)
        queue.push(node.right);
    }

    if (sumOnLevel > maxNumbersOnLevel || maxNumbersLevel === null) {
      maxNumbersOnLevel = sumOnLevel;
      maxNumbersLevel = currentLevel;
    }
  }

  return maxNumbersLevel;
};

let tree = new TreeNode(
  1,
  new TreeNode(7,
    new TreeNode(7),
    new TreeNode(-8)
  ),
  new TreeNode(0)
);
console.log(maxLevelSum(tree));


tree = new TreeNode(
  -100,
  new TreeNode(-200,
    new TreeNode(-20),
    new TreeNode(-5)
  ),
  new TreeNode(-300,
    new TreeNode(-10)
    )
);
console.log(maxLevelSum(tree));