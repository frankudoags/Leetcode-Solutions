class Solution:
    def mySqrt(self, x: int) -> int:
        if x < 2: return x;
        l, r = 1, x
    
        while l < r :
            mid = floor((l + r ) / 2);
            if mid*mid == x:
                return mid
            if mid*mid > x:
                r = mid
            else:
                l = mid + 1

        return l - 1
