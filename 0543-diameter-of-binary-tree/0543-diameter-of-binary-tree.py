# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def __init__(self):
            self.ans = 0
    
    def diameterOfBinaryTree(self, root: Optional[TreeNode]) -> int:
        def maxDepth(root):
            if not root: return 0
            left = maxDepth(root.left)
            right = maxDepth(root.right)
            new_ans = left + right
            self.ans = max(self.ans, new_ans)
            return max(left, right) + 1
        maxDepth(root)
        return self.ans
        