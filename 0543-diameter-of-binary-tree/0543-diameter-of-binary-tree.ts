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

function diameterOfBinaryTree(root: TreeNode | null): number {
    let max = 0;
    
    function maxDepth(root: TreeNode | null) {
        if(!root) return 0;
        let left = maxDepth(root.left);
        let right = maxDepth(root.right);
        //compare old max, with new max, where new max,
        max = Math.max(max, left + right);
        return Math.max(left, right) + 1;
    }
    maxDepth(root);
    return max;
};