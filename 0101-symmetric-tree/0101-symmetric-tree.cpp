/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
 * };
 */
class Solution {
public:
    bool isTreeSymmetric(TreeNode* left, TreeNode* right) {
        if(left == nullptr && right == nullptr)
            return true;
        if(left == nullptr && right != nullptr)
            return false;
        if( left != nullptr && right == nullptr)
            return false;
        if(left -> val != right -> val)
            return false;
        return isTreeSymmetric(left -> left, right -> right)
            && isTreeSymmetric(left -> right, right -> left);
        
    }
    bool isSymmetric(TreeNode* root) {
        return isTreeSymmetric(root -> left, root -> right);
    }
};