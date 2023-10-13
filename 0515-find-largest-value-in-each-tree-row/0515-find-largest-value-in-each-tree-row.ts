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

function largestValues(root: TreeNode | null): number[] {
    if (!root) return []
    if (!root.left && !root.right) return [root.val]
    let queue: TreeNode[] = [root];
    let res = [];
    while (queue.length) {
        let [temp, max] = [[], -Infinity];
        for (let i = 0; i < queue.length; i++) {
            let elem = queue[i]
            max = Math.max(max, elem.val);
            if (elem.left) temp.push(elem.left)
            if (elem.right) temp.push(elem.right)
        }
        queue = temp;
        res.push(max);
        max = -Infinity;
    }

    return res;
};