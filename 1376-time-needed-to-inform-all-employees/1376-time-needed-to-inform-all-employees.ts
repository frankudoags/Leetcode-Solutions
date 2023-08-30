function numOfMinutes(n: number, headID: number, manager: number[], informTime: number[]): number {
    let g = buildGraph(manager);
    return dfs(headID, g, informTime);
};

function dfs(curr_id, graph: Record<number, number[]>,informTime: number[]): number {
    if(!graph[curr_id] ){
        return 0;
    }           
    let max = 0;
    let sub = graph[curr_id];
    for(let i = 0; i < sub.length; i++){
        max = Math.max(max, dfs(sub[i], graph, informTime));
    }
    
    return max + informTime[curr_id];
}

function buildGraph(manager: number[]): Record<number, number[]> {
    let graph: Record<number, number[]> = {};  
    manager.map((num, i) => {
        if(num != -1){
            if(!graph[num]) graph[num] = [];
            graph[num].push(i);
        }
    })
    return graph;
}
                