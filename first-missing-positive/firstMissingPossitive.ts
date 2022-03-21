function firstMissingPositive(nums: number[]): number {
  let swap = (i: number, j: number) => {
    let temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
  };

  for (let i = 0; i < nums.length; i++) {
    while (
      nums[i] > 0 &&
      nums[i] - 1 < nums.length &&
      nums[i] !== i + 1 &&
      nums[i] !== nums[nums[i] - 1]
    ) {
      swap(i, nums[i] - 1);
    }
  }

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== i + 1) {
      return i + 1;
    }
  }

  return nums.length + 1;
}

const A = [1, 3, 6, 4, 1, 2];

firstMissingPositive(A);
