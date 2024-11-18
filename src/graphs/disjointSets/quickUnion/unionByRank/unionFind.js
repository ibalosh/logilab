class UnionFind {
  constructor(n) {
    this.root = [];
    this.rank = [];

    for (let i = 0; i < n; i++) {
      this.root.push(i);
      this.rank.push(1);
    }
  }

  // O(log2n) runtime
  find(x) {
    while (this.root[x] !== x) {
      x = this.root[x];
    }

    return x;
  }

  // O(log2n) runtime
  union(x,y) {
    let rootX = this.find(x);
    let rootY = this.find(y);

    if (rootX !== rootY) {
      if (this.rank[rootX] > this.rank[rootY]) {
        this.root[rootY] = rootX;
      }
      else if (this.rank[rootY] > this.rank[rootX]) {
        this.root[rootX] = rootY;
      }
      else {
        this.root[rootY] = rootX;
        this.rank[rootX] += 1;
      }
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