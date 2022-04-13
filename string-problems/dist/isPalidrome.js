/*
Given an integer x, return true if x is palindrome integer.

An integer is a palindrome when it reads the same backward as forward.

For example, 121 is a palindrome while 123 is not.
 

Example 1:
  Input: x = 121
  Output: true
  Explanation: 121 reads as 121 from left to right and from right to left.

Example 2:
  Input: x = -121
  Output: false
  Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.

Example 3:
  Input: x = 10
  Output: false
  Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
 

Constraints:
  -231 <= x <= 231 - 1
*/
function isPalindromeWithoutConverting(x) {
    if (x < 0 || (x % 10 === 0 && x !== 0)) {
        return false;
    }
    let revertedNumber = 0;
    while (x > revertedNumber) {
        revertedNumber = revertedNumber * 10 + (x % 10);
        x = Math.floor(x / 10);
    }
    return x === revertedNumber || x === Math.floor(revertedNumber / 10);
}
function isPalindrome(x) {
    let xArrayReversed = x.toString().split("").reverse();
    let xArray = x.toString().split("");
    for (const i of xArray) {
        let poped = xArrayReversed.shift();
        if (poped === "-" || i !== poped) {
            return false;
        }
    }
    return true;
}
console.log(isPalindrome(121));
console.log(isPalindrome(-121));
console.log(isPalindrome(10));
console.log(isPalindromeWithoutConverting(121));
console.log(isPalindromeWithoutConverting(-121));
console.log(isPalindromeWithoutConverting(10));
console.log(isPalindromeWithoutConverting(12321));
console.log(isPalindromeWithoutConverting(11));
