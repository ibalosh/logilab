/**
 * @param {number} n
 * @return {number[][]}
 */
let generateMatrix = function(n) {
  function calculateMove(directions, currentPosition) {
    return [
      currentPosition[0] + directions[direction][0],
      currentPosition[1] + directions[direction][1]
    ]
  }

  const directions = [[0,1],[1,0],[0,-1],[-1,0]];
  let matrix = new Array(n)
    .fill(0).
    map(() => new Array(n)
      .fill(0));

  let direction = 0;
  let currentPosition = [0,-1];
  let matrixMaxPos = matrix.length;
  let matrixMinPos = 0

  for (let i=1; i<=n*n; i++) {
    let moveTo = calculateMove(directions, currentPosition);

    if (
      (moveTo[0] < matrixMaxPos && moveTo[0] >= matrixMinPos) &&
      (moveTo[1] < matrixMaxPos && moveTo[1] >= matrixMinPos)
    ) {
      if (matrix[moveTo[0]][moveTo[1]] !== 0) {
        direction = 0;
        matrixMaxPos--;
        matrixMinPos++;
      }
    }
    else {
      direction++;
    }

    moveTo = calculateMove(directions, currentPosition);
    matrix[moveTo[0]][moveTo[1]] = i;
    currentPosition = moveTo;
  }

  return matrix;
};

console.log(generateMatrix(3));
console.log(generateMatrix(4));