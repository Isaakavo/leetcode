function plusOne(digits) {
    // create a pointer at the end of the array
    var ptr = digits.length;
    // iterate over the array in reverse order
    while (ptr > 0) {
        ptr -= 1;
        // if digit is 9, carry the 1 again
        if (digits[ptr] === 9) {
            digits[ptr] = 0;
        }
        // otherwise add it
        else {
            digits[ptr] += 1;
            return digits;
        }
    }
    var arr = [1].concat(digits);
    return [1].concat(digits);
}
// plusOne([1,2,3]);
// plusOne([9]);
// plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]);
plusOne([9, 9, 9]);
//# sourceMappingURL=main.js.map