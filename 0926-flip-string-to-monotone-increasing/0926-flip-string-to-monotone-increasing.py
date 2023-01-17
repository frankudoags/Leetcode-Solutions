class Solution:
    def minFlipsMonoIncr(self, s: str) -> int:
        ones, zeroes = 0, 0
        for c in s:
            if c == '1':
                ones += 1
            else:
                zeroes += 1
            zeroes = min(zeroes, ones)
        return zeroes
            
        