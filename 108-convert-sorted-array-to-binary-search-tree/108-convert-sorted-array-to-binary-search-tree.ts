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

function sortedArrayToBST(nums: number[]): TreeNode | null {
    const toBST = (nums: number[], start: number, end: number): TreeNode => {
        if(start > end) return null;
        const mid: number = Math.floor((start + end ) / 2);
        const root: TreeNode = new TreeNode(nums[mid]);
        root.left = toBST(nums, start, mid -1);
        root.right = toBST(nums, mid + 1, end);
        return root;
    }
    return toBST(nums, 0, nums.length -1);
};