/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {string} labels
 * @return {number[]}
 */
var countSubTrees = function(n, edges, labels) {
    let answer = new Array(n).fill(0), hashEdges = {}, alpha = Array(26).fill(0);
    for(let i = 0; i < n; i++) hashEdges[i] = []
    edges.forEach(([x,y]) => {
        hashEdges[x].push(y);
         hashEdges[y].push(x);
    })
    //for(const [key, val] of Object.entries(hashEdges)) console.log(`${key} : [${val}]`)
    const dfs = (node = 0, parent = null) => {
        let count = alpha[ord(labels[node]) - 97]++;
        for(const child of hashEdges[node]){
            if(child !== parent) dfs(child, node)
        }
        answer[node] = alpha[ord(labels[node]) - 97] - count;
    }
    
    dfs();
    return answer;
};


const ord = (c) => c.charCodeAt();