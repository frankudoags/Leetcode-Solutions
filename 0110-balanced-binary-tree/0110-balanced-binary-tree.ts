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

function isBalanced(root: TreeNode | null): boolean {
    return dfs(root) !== -1
};

function dfs(root: TreeNode | null): number {
    if (!root) return 0

    let leftHeight = dfs(root.left)


    let rightHeight = dfs(root.right)

    if(leftHeight == - 1 || rightHeight == -1 || Math.abs(rightHeight - leftHeight) > 1) {
        return -1
    }

    return Math.max(leftHeight, rightHeight) + 1
}