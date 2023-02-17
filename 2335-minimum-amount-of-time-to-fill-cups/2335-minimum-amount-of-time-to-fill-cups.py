class Solution:
    def fillCups(self, amount: List[int]) -> int:
        a = sum(amount)
        b = a // 2 + a % 2;
        c = max(amount)
        return max(b, c)
        