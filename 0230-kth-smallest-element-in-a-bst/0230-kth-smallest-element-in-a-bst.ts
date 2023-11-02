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

function kthSmallest(root: TreeNode | null, k: number): number {
    let arr = [];

    function dfs(node: TreeNode | null){
        if(!node || arr.length >= k ) return
        dfs(node.left)
        arr.push(node.val)
        dfs(node.right)
        return
    }
    dfs(root)
    return arr[k - 1]
};