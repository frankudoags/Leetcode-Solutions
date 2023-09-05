/**
 * Definition for Node.
 * class Node {
 *     val: number
 *     next: Node | null
 *     random: Node | null
 *     constructor(val?: number, next?: Node, random?: Node) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *         this.random = (random===undefined ? null : random)
 *     }
 * }
 */


function copyRandomList(head: Node | null): Node | null {
    //hashmap to track if a node has been created by mapping it's ref in head
    //to it's ref in the deep copy
    const map: Map<Node, Node> = new Map();
    
    // helper function to perform recursive cloning
    function clone(node: Node | null) {
        //if node is null, return null;
        if(!node) return null;
        //check if deep copy clone of the node exists and return it if it does
        if(map.has(node)){
            return map.get(node);
        }
        
        //create the deep copy clone
        let new_node = new Node(node.val);
        
        //set old ref to new deepcopy clone
        map.set(node, new_node);
        
        //find new deep copy next by recursively exploring the original node's next
        new_node.next = clone(node.next);
        //do same for random
        new_node.random = clone(node.random);
        
        //return generated node
        return new_node;
    }
    
    
    //call helper function and return generated deep copy
    return clone(head);
    
};