class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        hash_map = {}
        for i in range(len(nums)):
            if nums[i] in hash_map:
                return [hash_map[nums[i]], i]
            else:
                num_to_find = target - nums[i]
                hash_map[num_to_find] = i