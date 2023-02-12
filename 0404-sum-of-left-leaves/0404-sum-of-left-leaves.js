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
var sumOfLeftLeaves = function(root) {
 return traverse(root, false);
};

const traverse = (node, isLeft) => {
    if(!node) return 0;
    if(!node.left && !node.right) return isLeft ? node.val : 0;
    return traverse(node.left, true) + traverse(node.right, false);
}