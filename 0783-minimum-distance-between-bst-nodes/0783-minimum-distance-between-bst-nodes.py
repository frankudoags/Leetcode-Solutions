# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def __init__(self):
            self.arr = []
            
    def minDiffInBST(self, root: Optional[TreeNode]) -> int:
            
        def inorder(root):
            if not root: return
            inorder(root.left)
            self.arr.append(root.val)
            inorder(root.right)
        
        def minDiff(arr):
            if not root: return 0
            inorder(root)
            
            res = 111111111111111111111
            for i in range(1, len(self.arr)):
                res = min(res, (self.arr[i] - self.arr[i - 1]))
            
            return res
        
        
        return minDiff(root)
            
            
            
        
        