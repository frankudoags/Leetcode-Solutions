class Solution:
    def maxIceCream(self, costs: List[int], coins: int) -> int:
        sorted_cost, ans = sorted(costs), 0
        for cost in sorted_cost:
            if coins >= cost:
                coins -= cost
                ans += 1
            else:
                break
        return ans
        