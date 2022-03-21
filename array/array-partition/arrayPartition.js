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
