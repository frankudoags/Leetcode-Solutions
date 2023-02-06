class Solution:
    def searchInsert(self, nums: List[int], target: int) -> int:
        l, r = 0, len(nums) - 1
        mid = 0
        while l <= r:
            mid = ceil((l + r)/ 2)
            if nums[mid] == target:
                return mid
            if nums[mid] > target:
                r = mid - 1
            else:
                l = mid + 1
            
        if nums[mid] < target: 
            return mid + 1
        return mid
        