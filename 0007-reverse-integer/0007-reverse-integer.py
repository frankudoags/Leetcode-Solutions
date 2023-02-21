class Solution:
    def reverse(self, x: int) -> int:
        rev = 0
        sign = 1 if x >=0 else -1
        x = x*sign
        while x > 0:
            rev = rev * 10 + x % 10
            x = x//10
        
        rev = rev*sign
        if rev > -(2**31) and rev <=(2**31 - 1):
            return rev
        else:
            return 0
        