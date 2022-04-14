/*
  Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.

  Example 1:
    Input: nums = [-4,-1,0,3,10]
    Output: [0,1,9,16,100]
    Explanation: After squaring, the array becomes [16,1,0,9,100].
    After sorting, it becomes [0,1,9,16,100].

  Example 2:
    Input: nums = [-7,-3,2,3,11]
    Output: [4,9,9,49,121]
    Explanation: After squaring, the array becomes [49,9,4,9,121].
 
  Constraints:
    1 <= nums.length <= 104
    -104 <= nums[i] <= 104
    nums is sorted in non-decreasing order.

    Follow up: Squaring each element and sorting the new array is very trivial, could you find an O(n) solution using a different approach?
*/
// Using O(n)
function sortedSquares(nums) {
    let low = 0;
    let high = nums.length - 1;
    let ptr = nums.length - 1;
    const ans = [];
    while (low <= high) {
        if (Math.abs(nums[low]) > nums[high]) {
            ans[ptr] = nums[low] * nums[low];
            low++;
        }
        else {
            ans[ptr] = nums[high] * nums[high];
            high--;
        }
        ptr--;
    }
    return ans;
}
// Using brute force
// function sortedSquares(nums: number[]): number[] {
//   for (let i = 0; i < nums.length; i++) {
//     const sqrElement = nums[i] * nums[i];
//     nums[i] = sqrElement;
//   }
//   return nums.sort((a, b) => a - b);
// }
console.log(sortedSquares([-4, -1, 0, 3, 10]));
console.log(sortedSquares([-7, -3, 2, 3, 11]));
