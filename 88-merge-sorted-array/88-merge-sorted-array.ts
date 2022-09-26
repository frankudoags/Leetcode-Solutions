/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
        if(nums1.length > 1) {
        for(let i = nums1.length - 1; i >= m; i--) {
            if(nums1[i] === 0) nums1.pop();
            else break;
        }
    }
    else {
        if(nums1[0] === 0) nums1.pop();
    }
    for(let i = 0; i < nums2.length; i++) {
        nums1.push(nums2[i]);
    }
    nums1.sort((a, b) => a - b);
};

/**Check that the length of the array nums1 is greater 
    than zero to avoid cases like [0],
    if it is, loop over it from the end to m and remove all the filler
    zero values.
    After also check if the length is less than 1,
    and check that the number is not zero, if it is, remove it.
    Then fill in num1 with all num2 elements
    Then sort num1 in incremental order
*/