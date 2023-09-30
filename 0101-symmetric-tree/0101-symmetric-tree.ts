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

function isSymmetric(root: TreeNode | null): boolean {
    if(!root) return true;
    let q1 = [root.left], q2 = [root.right];
    while (q1.length > 0 && q2.length > 0) {
        let node1 = q1.shift()
        let node2 = q2.shift()

        if(!node1 && !node2) continue

        if(!node1 || !node2 || node1.val != node2.val) return false

        q1.push(node1.left)
        q1.push(node1.right)
        q2.push(node2.right)
        q2.push(node2.left)
    }

    return true
};