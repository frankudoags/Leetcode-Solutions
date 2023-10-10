/**
 * Definition for Node.
 * class Node {
 *     val: number
 *     neighbors: Node[]
 *     constructor(val?: number, neighbors?: Node[]) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.neighbors = (neighbors===undefined ? [] : neighbors)
 *     }
 * }
 */

function cloneGraph(node: Node | null): Node | null {
    const visited: Map<Node, Node> = new Map();

    if (!node) return node
    const cloned_node: Node = new Node(node.val);
    visited.set(node, cloned_node);

    for (const neighbor of node.neighbors) {
        cloned_node.neighbors.push(
            dfs(neighbor, visited)
        )
    }

    return cloned_node;
};


function dfs(node: Node | null, visited: Map<Node, Node>): Node | null {
    if (!node) return null
    if (visited.has(node)) return visited.get(node)

    let clone = new Node(node.val)
    visited.set(node, clone)
    for (const neighbor of node.neighbors) {
        clone.neighbors.push(
            dfs(neighbor, visited)
        )
    }

    return clone
}
