/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function levelOrder(root: TreeNode | null): number[][] {
    if(!root) return [];

    const queue = [root];
    const ans: number[][] = [];
    while(queue.length){
        let small_q = [];
        let len = queue.length;
        for(let i = 0; i < len; i++){
            let node = queue.shift();
            if(node.left) queue.push(node.left)
            if(node.right) queue.push(node.right)
            small_q.push(node.val);
        }
        ans.push(small_q);
    }

    return ans
};