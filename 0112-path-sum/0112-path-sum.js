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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
    
    const dfs = (root, currSum = 0) => {
       if(!root) return false;
       currSum += root.val;
       if(!root.left && !root.right){
           return currSum == targetSum;
       }
       return dfs(root.left, currSum) || dfs(root.right, currSum)
    }

    return dfs(root)
};