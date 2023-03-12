/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode() : val(0), next(nullptr) {}
 *     ListNode(int x) : val(x), next(nullptr) {}
 *     ListNode(int x, ListNode *next) : val(x), next(next) {}
 * };
 */
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
    TreeNode* convert(ListNode* start, ListNode* end) { 
        //check for null
        if(start == end) return nullptr;
        ListNode* slow = start;
        ListNode* fast = start;
        //use two pointers to find middle
        while(fast != end && fast->next != end) {
            slow = slow->next;
            fast = fast->next->next;
        }
        //use middle as root 
        TreeNode* root = new TreeNode(slow->val);
        //use recursion to construct root.left and root.right;
        root->left = convert(start, slow);
        root->right = convert(slow->next, end);
        //
        return root;
    }
    
    TreeNode* sortedListToBST(ListNode* head) {
        if(!head) return nullptr;
        return convert(head, nullptr);
    }
};