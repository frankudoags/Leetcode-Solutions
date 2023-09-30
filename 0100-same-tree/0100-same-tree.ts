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

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
    const queue: [TreeNode[]] = [[p, q]];

    while (queue.length) {
        const [p, q] = queue.shift();
        if (!p && !q) return true;
        if (!p || !q) return false;
        if (p.val !== q.val) return false;

        if (p.left || q.left) queue.push([p.left, q.left]);
        if (p.right || q.right) queue.push([p.right, q.right]);
    }

    return true
};