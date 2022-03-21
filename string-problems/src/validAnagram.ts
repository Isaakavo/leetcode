/*
Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

Example 1:
  Input: s = "anagram", t = "nagaram"
  Output: true

Example 2:
  Input: s = "rat", t = "car"
  Output: false

Constraints:
  1 <= s.length, t.length <= 5 * 104
  s and t consist of lowercase English letters.

Follow up: What if the inputs contain Unicode characters? How would you adapt your solution to such a case?
 */

function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) return false;
  let original = {};
  let anagram = {};
  for (let i = 0; i < s.length; i++) {
    const element = s[i];
    const elementAnagram = t[i];
    original[element] = original[element] ? original[element] + 1 : 1;
    anagram[elementAnagram] = anagram[elementAnagram]
      ? anagram[elementAnagram] + 1
      : 1;
  }

  for (let i = 0; i < s.length; i++) {
    const element = s[i];
    if (original[element] !== anagram[element]) {
      return false;
    }
  }

  return true;
}

console.log(isAnagram('anagram', 'nagaram'));
console.log(isAnagram('rat', 'car'));
console.log(isAnagram('a', 'ab'));
