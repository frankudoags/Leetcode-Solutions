class Solution:
    def reverse(self, x: int) -> int:
        poof = True if x > 0 else False
        x = abs(x)
        rev = 0
        
        while x > 0: 
            rev = (rev * 10) + (x % 10)
            x = x // 10
            
            
        if poof: 
            if(rev > ( ( 2**31 ) -1 ) ):
                return 0
        else:
            if(rev > ( 2**31  ) ):
                return 0
        
        return rev if poof else -1 * rev
        
        