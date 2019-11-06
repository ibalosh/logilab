/**
 * @param {number[][]} edges
 * @return {number}
 */
let findCenter = function(edges) {
  let degreeCountList = {}

  for (let i=0; i<edges.length; i++) {
    degreeCountList[edges[i][0]] =
      degreeCountList[edges[i][0]] === undefined ? 0 : degreeCountList[edges[i][0]];

    degreeCountList[edges[i][1]] =
      degreeCountList[edges[i][1]] === undefined ? 0 : degreeCountList[edges[i][1]];

    degreeCountList[edges[i][0]]++;
    degreeCountList[edges[i][1]]++;
  }

  let result = -1;
  Object.entries(degreeCountList).forEach(([key, value]) => {
    if (value === edges.length)
      result = key;
  })

  return +result;
};

let edges = [[1,2],[2,3],[4,2]];
console.log(findCenter(edges));

edges = [[1,2],[5,1],[1,3],[1,4]];
console.log(findCenter(edges));
