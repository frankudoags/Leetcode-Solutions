class Solution:
    def removeKdigits(self, num: str, k: int) -> str:
        stack = []
        
        for n in num:
            while stack and int(n) < int(stack[len(stack) - 1]) and k:
                stack.pop()
                k -= 1
            
            stack.append(n)
            
        while k:
            stack.pop()
            k -= 1
    
        if not stack:
            return "0"
        
        return str(int("".join(stack)))
        
                
        