class Solution:
    def minimumSum(self, num: int) -> int:
        nums = []
        while num:
            nums.append(num % 10)
            num //= 10
        nums.sort()
        return nums[0] * 10 + nums[2] + nums[1] * 10 + nums[3]
        