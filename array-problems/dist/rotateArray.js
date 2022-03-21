/*

Given an array, rotate the array to the right by k steps, where k is non-negative.

Example 1:
  Input: nums = [1,2,3,4,5,6,7], k = 3
  Output: [5,6,7,1,2,3,4]
  Explanation:
  rotate 1 steps to the right: [7,1,2,3,4,5,6]
  rotate 2 steps to the right: [6,7,1,2,3,4,5]
  rotate 3 steps to the right: [5,6,7,1,2,3,4]

Example 2:
  Input: nums = [-1,-100,3,99], k = 2
  Output: [3,99,-1,-100]
  Explanation:
  rotate 1 steps to the right: [99,-1,-100,3]
  rotate 2 steps to the right: [3,99,-1,-100]

Constraints:
  1 <= nums.length <= 105
  -231 <= nums[i] <= 231 - 1
  0 <= k <= 105

*/
//Using extra space
function rotateExtraSpace(nums, k) {
    let newNums = [];
    for (let i = k + 1; i < nums.length; i++) {
        newNums.push(nums[i]);
    }
    for (let i = 0; i <= k; i++) {
        newNums.push(nums[i]);
    }
    nums = newNums;
}
/**
  Do not return anything, modify nums in-place instead.
 */
function rotate(nums, k) {
    if (k === 0)
        return;
    for (let i = 0; i < k; i++) {
        let j = nums.length - 1;
        let temp = nums[j];
        for (; j > 0; j--) {
            nums[j] = nums[j - 1];
        }
        nums[0] = temp;
    }
    console.log(nums);
}
rotate([1, 2, 3, 4, 5, 6, 7], 3);
rotate([-1, -100, 3, 99], 2);
rotate([1, 2], 3);
rotate([1, 2, 3], 2);
