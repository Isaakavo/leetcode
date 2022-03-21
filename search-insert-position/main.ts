function searchInsert(nums: number[], target: number): number {
  let mid = Math.floor(nums.length / 2);
  let prev = mid - 1;
  while (mid !== -1 && mid < nums.length) {
    const element = nums[mid];
    if (element === target) {
      return mid;
    }
    if (element > target) {
      if (nums[prev] < target) {
        return mid;
      }
      mid--;
      prev--;
    } else {
      mid++;
    }
  }
  return mid < 0 ? 0 : mid;
}

searchInsert([1, 3, 5, 6], 5);
searchInsert([1, 3, 5, 6], 4);
searchInsert([1, 3, 5, 6], 2);
searchInsert([1, 3, 5, 6], 7);
searchInsert([1, 3, 5, 6], 0);
searchInsert([1], 2);
