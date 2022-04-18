/*

Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
Note that you must do this in-place without making a copy of the array.

Example 1:
  Input: nums = [0,1,0,3,12]
  Output: [1,3,12,0,0]

Example 2:
  Input: nums = [0]
  Output: [0]
 
Constraints:
  1 <= nums.length <= 104
  -231 <= nums[i] <= 231 - 1
  */
/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums) {
    let i = 0;
    let j = 1;
    while (j < nums.length) {
        const el = nums[i];
        const nextEl = nums[j];
        if (el === 0 && nextEl !== 0) {
            const temp = el;
            nums[i] = nums[j];
            nums[j] = temp;
            i++;
        }
        j++;
        if (el !== 0) {
            i++;
        }
    }
    console.log(nums);
}
moveZeroes([0, 1, 0, 3, 12]);
moveZeroes([0, 1, 0, 3, 12, -1, -3, 0]);
moveZeroes([1, 0, 1]);
