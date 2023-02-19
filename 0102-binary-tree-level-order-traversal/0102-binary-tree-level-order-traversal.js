/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    let queue = []
    const finalQueue = [];
    if(!root) return []
    queue.push(root);
    while(queue.length > 0){
        let smallQ = []
        let length = queue.length
        while(length){
            let node = queue.shift()
            smallQ.push(node.val);
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
            length--;
        }
        finalQueue.push(smallQ)
    }
    
    return finalQueue
};