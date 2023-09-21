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
 * @return {number}
 */
var minDepth = function(root) {
        if(!root) return 0;
    // if(root.right !== null && root.left !== null){
    //     return 1 + Math.min(minDepth(root.left), minDepth(root.right));
    // } else {
    //     return 1 + Math.max(minDepth(root.left), minDepth(root.right));
    // }

    let queue = [root];
    let height = 0;

    while(queue.length > 0){
        let len = queue.length;
        height++;
        for(let i = 0; i < len; i++){
            let node = queue.shift();
            if(!node.left && !node.right) return height;
            if(node.left) queue.push(node.left)
            if(node.right) queue.push(node.right)
        }
    }
};