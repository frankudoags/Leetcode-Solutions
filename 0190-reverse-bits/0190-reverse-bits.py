class Solution:
    def reverseBits(self, n: int) -> int:
        rev = 0
        for _ in range(32):
            ##left shift old rev bits by one to create a new space and 
            #accomodate the new bit gotten from the and operation of n and 1 
            rev = (rev << 1) + (n & 1)
            #right shift n by 1 to pop out old bit
            n = n >> 1
        return rev