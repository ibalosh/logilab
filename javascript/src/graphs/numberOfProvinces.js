/**
 * https://leetcode.com/problems/number-of-provinces/description/?envType=study-plan-v2&envId=leetcode-75
 *
 * There are n cities. Some of them are connected, while some are not.
 * If city a is connected directly with city b, and city b is connected directly with city c, then city a is connected indirectly with city c.
 *
 * A province is a group of directly or indirectly connected cities and no other cities outside of the group.
 * You are given an n x n matrix isConnected where isConnected[i][j] = 1 if the ith city and the jth city are directly connected, and isConnected[i][j] = 0 otherwise.
 *
 * Return the total number of provinces.
 *
 * Example 1:
 *
 *
 * Input: isConnected = [[1,1,0],[1,1,0],[0,0,1]]
 * Output: 2
 * Example 2:
 *
 *
 * Input: isConnected = [[1,0,0],[0,1,0],[0,0,1]]
 * Output: 3
 *
 *
 * Constraints:
 *
 * 1 <= n <= 200
 * n == isConnected.length
 * n == isConnected[i].length
 * isConnected[i][j] is 1 or 0.
 * isConnected[i][i] == 1
 * isConnected[i][j] == isConnected[j][i]
 *
 * @param {number[][]} isConnected
 * @return {number}
 */
let findCircleNum = function(isConnected) {
  class UnionFind {
    constructor(n) {
      this.root = [];
      this.rank = [];
      this.counter = n;

      for (let i = 0; i < n; i++) {
        this.root.push(i);
        this.rank.push(1);
      }
    }

    find(x) {
      if (this.root[x] === x) {
        return x;
      }

      return this.root[x] = this.find(this.root[x]);
    }

    union(x,y) {
      let rootX = this.find(x);
      let rootY = this.find(y);

      if (rootX !== rootY) {
        if (this.rank[rootX] > this.rank[rootY]) {
          this.root[rootY] = rootX;
        }
        else if (this.rank[rootX] < this.rank[rootY]) {
          this.root[rootX] = rootY;
        }
        else {
          this.root[rootY] = rootX;
          this.rank[rootX] += 1;
        }

        this.counter--;
      }
    }
  }

  if (isConnected === null || isConnected.length === 0) {
    return 0;
  }

  let connectedCities = isConnected.length;
  let unionFind = new UnionFind(connectedCities);

  for (let i = 0; i < connectedCities; i++) {
    for (let j = 0; j < connectedCities; j++) {
      if (isConnected[i][j] === 1) {
        unionFind.union(i,j);
      }
    }
  }

  return unionFind.counter;
};

let isConnected = [[1,1,0],[1,1,0],[0,0,1]]
console.log(findCircleNum(isConnected));


/*

  1 2 3
1 1 1 0
2 1 1 0
3 0 0 1

 */