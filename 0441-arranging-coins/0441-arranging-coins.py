class Solution:
    def arrangeCoins(self, n: int) -> int:
        count = 1
        rows = 0
        
        while n > 0:
            if(n - count >= 0):
                n -= count
                count += 1
                rows += 1
            else:
                break
        
        return rows
        