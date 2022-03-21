function firstMissingPositive(nums) {
    var swap = function (i, j) {
        var temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
    };
    for (var i = 0; i < nums.length; i++) {
        while (nums[i] > 0 &&
            nums[i] - 1 < nums.length &&
            nums[i] !== i + 1 &&
            nums[i] !== nums[nums[i] - 1]) {
            swap(i, nums[i] - 1);
        }
    }
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] !== i + 1) {
            return i + 1;
        }
    }
    return nums.length + 1;
}
var A = [1, 3, 6, 4, 1, 2];
firstMissingPositive(A);
//# sourceMappingURL=firstMissingPossitive.js.map