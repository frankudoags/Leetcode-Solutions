class Solution:
    def minimumOperations(self, nums: List[int]) -> int:
        nums = sorted(nums)
        count, sumor = 0, 0
        for i in range(len(nums)):
            if not nums[i]: continue
            if nums[i] - sumor > 0:
                count += 1
                sumor += nums[i] - sumor
                
            nums[i] = nums[i] - sumor
            
        return count
                
            