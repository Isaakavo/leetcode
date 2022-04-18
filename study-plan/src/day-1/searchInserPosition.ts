/* 
Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.
You must write an algorithm with O(log n) runtime complexity.

Example 1:
  Input: nums = [1,3,5,6], target = 5
  Output: 2

Example 2:
  Input: nums = [1,3,5,6], target = 2
  Output: 1

Example 3:
  Input: nums = [1,3,5,6], target = 7
  Output: 4
 
Constraints:
  1 <= nums.length <= 104
  -104 <= nums[i] <= 104
  nums contains distinct values sorted in ascending order.
  -104 <= target <= 104
*/

function searchInsert(nums: number[], target: number): number {
  if (target === 0) return 0;
  let left = 0;
  let right = nums.length - 1;
  let mid: number;

  while (true) {
    mid = Math.floor((left + right) / 2);
    const element = nums[mid];

    if (right - left <= 1) {
      if (target <= nums[left]) {
        return left;
      } else if (target <= nums[right]) {
        return right;
      } else {
        return right + 1;
      }
    }
    if (element > target) {
      right = mid;
    } else if (element < target) {
      left = mid;
    } else {
      return mid;
    }
  }
}

console.log(searchInsert([1], 0));
console.log(searchInsert([1], 2));
console.log(searchInsert([1, 3, 4, 5, 10], 0));
console.log(searchInsert([1, 3, 5, 6], 0));
console.log(searchInsert([1, 3, 5, 6], 5));
console.log(searchInsert([1, 3, 5, 6], 2));
console.log(searchInsert([1, 3, 5, 6], 7));
