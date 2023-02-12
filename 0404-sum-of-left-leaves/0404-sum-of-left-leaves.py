# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def sumOfLeftLeaves(self, root: Optional[TreeNode]) -> int:
        def check(node, isLeft = False):
            if not node: return 0
            if not node.left and not node.right:
                return node.val if isLeft else 0
            return check(node.left, True) + check(node.right, False)
        return check(root)
        