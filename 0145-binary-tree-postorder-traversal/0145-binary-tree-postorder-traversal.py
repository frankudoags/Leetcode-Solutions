class Solution:
    def postorderTraversal(self, root: Optional[TreeNode]) -> List[int]:
        res, stack = [], []
        node = root
        while node or stack:
            while node:
                stack.append((node, 2)) 
                stack.append((node, 1))
                node = node.left
                
            node, seen = stack.pop()
            if seen == 2:
                res.append(node.val) ###
                node = None
            else:
                node = node.right
        
        return res