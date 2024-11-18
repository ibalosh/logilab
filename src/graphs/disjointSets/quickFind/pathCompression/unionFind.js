class UnionFind {
  constructor(n) {
    this.root = [];

    for (let i = 0; i < n; i++) {
      this.root.push(i);
    }
  }

  // O(log2n) runtime
  find(x) {
    if (this.root[x] === x) {
      return x;
    }

    return this.root[x] = this.find(this.root[x]);
  }

  // O(log2n) runtime
  union(x,y) {
    let rootX = this.find(x);
    let rootY = this.find(y);

    if (rootX !== rootY) {
      this.root[y] = rootX;
    }
  }

  // O(log2n) runtime
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