class UnionFind {
    parent: any
  constructor(n) {
    this.parent = new Array(n).fill(0).map((_, i) => i);
  }

  find(x) {
    if (this.parent[x] !== x) this.parent[x] = this.find(this.parent[x]);
    return this.parent[x];
  }
  union(a, b) {
    const parA = this.find(a);
    const parB = this.find(b);
    if (parA === parB) return;
    this.parent[parB] = parA;
  }
}

function numberOfGoodPaths(vals: number[], edges: number[][]): number {
    const n = vals.length;
    const adj = new Array(n).fill(0).map(() => []);
    for(const [a, b] of edges) {
        adj[a].push(b); adj[b].push(a);
    }
    let ans = n; //since each single node is a good path
    let valToNode = new Array(n).fill(0).map((_, i) => [i , vals[i]]);
    valToNode.sort((a, b) => a[1] - b[1]);
    let uf = new UnionFind(n);
    let freq = new Array(n).fill(1);
    for(const [node, _] of valToNode){
        let p1 = uf.find(node);
        let a = adj[node] || [];
        for(const nei of a){
            let p2 = uf.find(nei);
            if(p1 === p2 || vals[p2] > vals[p1]) continue;
              //values are equal, so there is a good path
              if (vals[p2] === vals[p1]) {
                ans += freq[p1] * freq[p2];//4+= 1* 1;
                freq[p1] += freq[p2];//increase freq, 1+1 =2
              }
              uf.union(p1, p2);
        }
    }
    
    
    return ans;
};