class Solution:
    def binaryGap(self, n: int) -> int:
        bi = bin(n)[2:]
        maxi = 0
        i = 0
        j = 0
        
        for x in range(1, len(bi)):
            if bi[x] == '1':
                i = j
                j = x
                maxi = max(maxi, j - i)
                
        return maxi
        