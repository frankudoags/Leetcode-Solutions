class Solution:
    def singleNonDuplicate(self, nums: List[int]) -> int:
        l, r = 0, len(nums) - 1
        
        while l < r :
            mid = (l + r) // 2
            #check if mid is odd and set to even if it is
            if mid % 2 == 1 :
                mid -= 1
            if nums[mid] != nums[mid + 1]:
                r = mid
            else:
                l = mid + 2
        
        return nums[l]


'''
Let's look at an example array [3,3,4,4,5,6,6,7,7].
We look at indicies             0,  2,  4,  6,  8 
and check if the number is equal to the number on its right.
at the single number(5), the number stops matching the number at it's right
'''
                
        