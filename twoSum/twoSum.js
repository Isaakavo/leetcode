/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// var twoSum = function (nums, target) {
//   let result = [];
//   let sum = 0;
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = 1; j < nums.length; j++) {
//       sum = nums[i] + nums[j];
//       if (i === j) continue;
//       if (sum === target) {
//         result.push(i, j);
//         return result;
//       }
//     }
//   }
// };

let twoSum = (nums, target) => {
  let result = [];
  let i = 0;
  let j = 1;
  let sum = 0;
  while (i < nums.length) {
    sum = nums[i] + nums[j];
    if (sum === target) {
      result.push(i, j);
      return result;
    } else {
      j++;
      if (j === nums.length) {
        i++;
        j = i + 1;
      }
    }
  }

  return result;
}

console.log(twoSum([2,7,11,15], 9));
console.log(twoSum([3,2,4], 6));
console.log(twoSum([3, 3], 6));
console.log(twoSum([2,5,5,11], 10));