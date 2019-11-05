class UnionFind {
  constructor(n) {
    this.root = [];

    for (let i = 0; i < n; i++) {
      this.root.push(i);
    }
  }

  // O(1) runtime
  find(x) {
    return this.root[x];
  }

  // O(n) runtime - for union of n elements it would take O(n2) runtime
  union(x,y) {
    let rootX = this.find(x)
    let rootY = this.find(y)

    for (let i = 0; i < this.root.length; i++) {
      if (this.root[i] === rootY) {
        this.root[i] = rootX;
      }
    }
  }

  // O(1) runtime
  connected(x,y) {
    return this.find(x) === this.find(y);
  }
}

let unionFind = new UnionFind(10);
unionFind.union(1,2);
unionFind.union(2,5);
unionFind.union(5,6);
unionFind.union(6,7);
unionFind.union(3,8);
unionFind.union(8,9);

console.log(unionFind.connected(1,5));
console.log(unionFind.connected(5,7));
console.log(unionFind.connected(4,9));

unionFind.union(9,4);
console.log(unionFind.connected(4,9));