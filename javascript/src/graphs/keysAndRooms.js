/**
 *
 *
 * Runtime complexity O(V+E)
 * Space time complexity: O(V)
 *
 * @param {number[][]} rooms
 * @return {boolean}
 */
let canVisitAllRooms = function(rooms) {
  if (rooms === null || rooms.length === 0) return true;
  if (rooms[0] === [] ) return false;

  let seen = new Array(rooms.length).fill(false);
  let stack = [];

  stack.push(0);

  while (stack.length > 0) {
    let node = stack.pop();

    if (seen[node])
      continue;

    seen[node] = true;

    for (let i = 0; i < rooms[node].length; i++) {
      stack.push(rooms[node][i]);
    }
  }

  return seen.every(s => s === true);
};

let rooms = [[1],[2],[3],[]];
console.log(canVisitAllRooms(rooms))


rooms = [[1,3],[3,0,1],[2],[0]]
console.log(canVisitAllRooms(rooms))