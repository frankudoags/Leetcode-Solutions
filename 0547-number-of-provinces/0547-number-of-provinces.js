/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function (isConnected) {
    if (isConnected.length == 0) return 0;
    let n = isConnected.length;
    const uf = new UnionFind(n);

    for (let row = 0; row < n; row++) {
        for (let col = 0; col < n; col++) {
            if (isConnected[row][col]) {
                uf.union(row, col);
            }
        }
    }

    return uf.getCount();

};

class UnionFind {
    constructor(n) {
        this.root = [...Array(n)].map((_, i) => i);
        this.rank = [...Array(n)].map((_) => 1);
        this.count = n;
    }

    find(x) {
        if (x == this.root[x]) {
            return x;
        }
        this.root[x] = this.find(this.root[x]);
        return this.root[x];
    }
    union(x, y) {
        let rootX = this.find(x);
        let rootY = this.find(y);

        if (rootX !== rootY) {
            if (this.rank[rootX] > this.rank[rootY]) {
                this.root[rootY] = rootX;
            } else if (this.rank[rootY] > this.rank[rootX]) {
                this.root[rootX] = rootY;
            } else {
                this.root[rootY] = rootX;
                this.rank[rootX] += 1;
            }
                this.count--;
        }
    }

    getCount(){
        return this.count;
    }
}


