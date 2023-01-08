/* 

A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters,
it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.

Example 1:
  Input: s = "A man, a plan, a canal: Panama"
  Output: true
  Explanation: "amanaplanacanalpanama" is a palindrome.

Example 2:
  Input: s = "race a car"
  Output: false
  Explanation: "raceacar" is not a palindrome.

Example 3:
  Input: s = " "
  Output: true
  Explanation: s is an empty string "" after removing non-alphanumeric characters.
  Since an empty string reads the same forward and backward, it is a palindrome.

Constraints:
1 <= s.length <= 2 * 105
s consists only of printable ASCII characters.

*/

function validPalindrome(s: string): boolean {
  let replacedString = s.toLowerCase().replace(/[^a-z0-9]/gi, '');
  let backPointer = replacedString.length - 1;

  for (let i = 0; i < replacedString.length; i++) {
    if (replacedString[i] !== replacedString[backPointer]) {
      return false;
    }
    backPointer--;
  }

  return true;
}

console.log(validPalindrome('A man, a plan, a canal: Panama'));
console.log(validPalindrome('race a car'));
console.log(validPalindrome(' '));
console.log(validPalindrome('Dogma I am God'));
console.log(validPalindrome('Dogma I am'));
