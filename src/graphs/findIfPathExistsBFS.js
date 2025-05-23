/**
 * Find if Path Exists in Graph
 * https://leetcode.com/problems/find-if-path-exists-in-graph/description/?envType=problem-list-v2&envId=graph
 *
 * There is a bi-directional graph with n vertices, where each vertex is labeled from 0 to n - 1 (inclusive). The edges in the graph are represented as a 2D integer array edges, where each edges[i] = [ui, vi] denotes a bi-directional edge between vertex ui and vertex vi. Every vertex pair is connected by at most one edge, and no vertex has an edge to itself.
 *
 * You want to determine if there is a valid path that exists from vertex source to vertex destination.
 *
 * Given edges and the integers n, source, and destination, return true if there is a valid path from source to destination, or false otherwise.
 *
 *
 *
 * Example 1:
 *
 *
 * Input: n = 3, edges = [[0,1],[1,2],[2,0]], source = 0, destination = 2
 * Output: true
 * Explanation: There are two paths from vertex 0 to vertex 2:
 * - 0 → 1 → 2
 * - 0 → 2
 * Example 2:
 *
 *
 * Input: n = 6, edges = [[0,1],[0,2],[3,5],[5,4],[4,3]], source = 0, destination = 5
 * Output: false
 * Explanation: There is no path from vertex 0 to vertex 5.
 *
 *
 * Constraints:
 *
 * 1 <= n <= 2 * 105
 * 0 <= edges.length <= 2 * 105
 * edges[i].length == 2
 * 0 <= ui, vi <= n - 1
 * ui != vi
 * 0 <= source, destination <= n - 1
 * There are no duplicate edges.
 * There are no self edges.
 *
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
let validPath = function(n, edges, source, destination) {
  function transformToAdjacentList(n, edges) {
    let neighbours = {}

    for (let i=0;i< n;i++) {
      neighbours[i] = [];
    }

    for (let i = 0; i < edges.length; i++) {
      neighbours[edges[i][0]].push(edges[i][1]);
      neighbours[edges[i][1]].push(edges[i][0]);
    }

    return neighbours;
  }

  let neighbours = transformToAdjacentList(n, edges);
  let queue = [];
  let visited = new Array(n);

  queue.push(source);

  // BFS algorithm
  while (queue.length > 0) {
    let node = queue.shift();

    if (node === destination)
      return true;

    for (let i = 0; i < neighbours[node].length; i++) {
      // optimization, to increase speed, we are not going to add neighbours
      // at all, rather than adding to queue then taking out and skipping
      if (visited[neighbours[node][i]] !== true) {
        queue.push(neighbours[node][i]);
        visited[neighbours[node][i]] = true;
      }

    }
  }

  return false;
};

let n = 3;
let edges = [[0,1],[1,2],[2,0]];
let source = 0;
let destination = 2;

console.log(
  validPath(n, edges, source, destination)
);

n = 6;
edges = [[0,1],[0,2],[3,5],[5,4],[4,3]];
source = 0;
destination = 5;

console.log(
  validPath(n, edges, source, destination)
);


n=10;
edges = [[2,9],[7,8],[5,9],[7,2],[3,8],[2,8],[1,6],[3,0],[7,0],[8,5]];
source = 1;
destination = 0;

console.log(
  validPath(n, edges, source, destination)
);