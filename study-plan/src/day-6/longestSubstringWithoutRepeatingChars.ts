/* Given a string s, find the length of the longest substring without repeating characters.

Example 1:
  Input: s = "abcabcbb"
  Output: 3
  Explanation: The answer is "abc", with the length of 3.

Example 2:
  Input: s = "bbbbb"
  Output: 1
  Explanation: The answer is "b", with the length of 1.

Example 3:
  Input: s = "pwwkew"
  Output: 3
  Explanation: The answer is "wke", with the length of 3.

Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
 
Constraints:
  0 <= s.length <= 5 * 104
  s consists of English letters, digits, symbols and spaces. */

function lengthOfLongestSubstring(s: string): number {
  let result = [];
  let index = 0;

  for (let i = 0; i < s.length; i++) {
    const element = s[i];
    const current = result.indexOf(element);
    if (current !== -1) {
      result.splice(0, current + 1);
    }
    result.push(element);
    index = Math.max(index, result.length);
  }
  return index;
}

console.log(lengthOfLongestSubstring('abcabcbb'));
console.log(lengthOfLongestSubstring('bbbbb'));
console.log(lengthOfLongestSubstring('pwwkew'));
