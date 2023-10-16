function calcEquation(equations: string[][], values: number[], queries: string[][]): number[] {
    let graph = buildGraph(equations, values);
    let res: number[] = []

    for (let i = 0; i < queries.length; i++) {
        let [src, des] = [queries[i][0], queries[i][1]];
        if (!graph[src] || !graph[des]) {
            res.push(-1.0);
        }
        else {
            res.push(dfs(src, des, new Set(), graph))
        }
    }

    return res
};

function dfs(
    src: string,
    des: string,
    visited: Set<string>,
    graph: Record<string, Edge[]>
): number {
    if (src == des) return 1.0
    if (visited.has(src)) return -1.0
    visited.add(src);
    for (let edge of graph[src]) {
        let res = dfs(edge.des, des, visited, graph)
        if (res != -1.0) {
        return edge.val * res
        }
    }
    return -1.0
}
/**
{
  a: [ { des: 'b', val: 2 } ],
  b: [ { des: 'a', val: 0.5 }, { des: 'c', val: 3 } ],
  c: [ { des: 'b', val: 0.3333333333333333 } ]
}
 */

function buildGraph(equations: string[][], values: number[]): Record<string, Edge[]> {
    let graph: Record<string, Edge[]> = {}

    for (let i = 0; i < equations.length; i++) {
        let [src, des, val] = [equations[i][0], equations[i][1], values[i]];

        if (!graph[src]) graph[src] = []
        graph[src].push({ des, val })

        if (!graph[des]) graph[des] = []
        graph[des].push({ des: src, val: 1.0 / val })
    }
    return graph
}

type Edge = {
    des: string;
    val: number;
}