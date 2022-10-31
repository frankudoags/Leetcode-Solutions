class Solution {
    public int[] findErrorNums(int[] nums) {
    int dupe = 0, missing = 0, N = nums.length;
    for(int i = 0; i < N; i++){
        nums[(nums[i] - 1) % 10_000] += 10_000;
    }
    for(int i = 0; i < N; i++){
        if(nums[i] > 20_000) dupe = i + 1;
        if(nums[i] < 10001) missing = i + 1;
    }
        
    return new int[]{dupe, missing};
    }
}