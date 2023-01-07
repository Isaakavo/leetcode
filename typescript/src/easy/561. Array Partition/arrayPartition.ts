/*
Given an integer array nums of 2n integers, group these integers into n pairs (a1, b1), (a2, b2), ..., (an, bn) such that the sum of min(ai, bi) for all i is maximized. Return the maximized sum.

Example 1:
  Input: nums = [1,4,3,2]
  Output: 4
Explanation: All possible pairings (ignoring the ordering of elements) are:
1. (1, 4), (2, 3) -> min(1, 4) + min(2, 3) = 1 + 2 = 3
2. (1, 3), (2, 4) -> min(1, 3) + min(2, 4) = 1 + 2 = 3
3. (1, 2), (3, 4) -> min(1, 2) + min(3, 4) = 1 + 3 = 4
So the maximum possible sum is 4.

Example 2:
  Input: nums = [6,2,6,5,1,2]
  Output: 9
Explanation: The optimal pairing is (2, 1), (2, 5), (6, 6). min(2, 1) + min(2, 5) + min(6, 6) = 1 + 2 + 6 = 9.
 
Constraints:

1 <= n <= 104
nums.length == 2 * n
-10⁴ <= nums[i] <= 10⁴
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function (nums) {
  const numberOfPairs = Math.trunc((2 + nums.length) / 2);
  const pairs = [];

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      pairs.push([nums[i], nums[j]]);
    }
  }

  let result = Number.MIN_SAFE_INTEGER;

  for (let i = 0; i < pairs.length; i += numberOfPairs) {
    let temp = 0;
    
    // const element = pairs[i];
    // const nextElement = pairs[i + 1];
    // const temp = Math.min(...element) + Math.min(...nextElement);
    // if (temp > result) {
    //   result = temp;
    // }
  }

  return result;
};

const nums = [1, 4, 3, 2];
const numbers = [6, 2, 6, 5, 1, 2];

console.log(arrayPairSum(nums));
console.log(arrayPairSum(numbers));
