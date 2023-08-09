class Solution:
    def minimizeMax(self, nums: List[int], p: int) -> int:
        def count_valid_pairs(nums: List[int], threshold: int) -> int:
            i, pairs = 0, 0;

            while i < len(nums) - 1:
                if (nums[i + 1] - nums[i]) <= threshold:
                    i += 1;
                    pairs += 1;

                i += 1;

            return pairs
        
        #sort nums to ensure elements are arranged with a little
        #abs difference as possible
        nums.sort();
        
        left, right = 0, nums[len(nums) - 1] - nums[0];
        
        while left < right :
            mid = left + (right - left) // 2;
            if count_valid_pairs(nums, mid) >= p:
                right = mid;
            else:
                left = mid + 1;
        
        return left
    
