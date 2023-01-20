# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def findTilt(self, root: Optional[TreeNode]) -> int:
        def dfs(node):
            if not node: return [0, 0]
            t1, s1 = dfs(node.left)
            t2, s2 = dfs(node.right)
            return [t1 + t2 +abs(s1-s2), s1 + s2 + node.val]
        
        return dfs(root)[0]

'''
[0, 3]
[0, 5]

[2, 3+5+2] = [2, 10]
[0, 7]
[0,0]
[7, 0+7+9] = [7, 16]

[]
'''