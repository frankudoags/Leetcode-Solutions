class Solution:
    def shuffle(self, nums: List[int], n: int) -> List[int]:
        r, arr = n , []
        
        for i in range(n):
            arr.append(nums[i])
            arr.append(nums[r])
            r += 1
        return arr
        