/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {

  function max(a, b, c) {
    return Math.max(Math.max(a, b), c);
  }

  const crossSubArray = (nums, low, mid, high) => {
    let leftSum = Number.MIN_SAFE_INTEGER;
    let sum = 0;
    for (let i = mid; i >= low; i--) {
      sum += nums[i];
      if (sum > leftSum) {
        leftSum = sum;
      }
    }

    let rightSum = Number.MIN_SAFE_INTEGER;
    sum = 0;
    for (let j = mid + 1; j <= high; j++) {
      sum += nums[j];
      if (sum > rightSum) {
        rightSum = sum;
      }
    }

    return Math.max(Math.max(leftSum, leftSum + rightSum), rightSum);
  };

  const recursive = (nums, low, high) => {
    if (low === high) {
      return nums[low];
    } else {
      let mid = Math.floor((low + high) / 2);
      return max(
        recursive(nums, low, mid),
        recursive(nums, mid + 1, high),
        crossSubArray(nums, low, mid, high)
      );
    }
  };

  return recursive(nums, 0, nums.length - 1);
};

// const nums = [-2,1,-3,4,-1,2,1,-5,4];
// const nums = [1];
const nums = [1, -2, -2, -1];
// const nums = [-1,-1,-2,-2];
console.time('init');
console.log(maxSubArray(nums));
console.timeEnd('init');
console.log('finish');
