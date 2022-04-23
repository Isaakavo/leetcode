/* Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise.

In other words, return true if one of s1's permutations is the substring of s2.

Example 1:
  Input: s1 = "ab", s2 = "eidbaooo"
  Output: true
  Explanation: s2 contains one permutation of s1 ("ba").

Example 2:
  Input: s1 = "ab", s2 = "eidboaoo"
  Output: false
 

Constraints:
  1 <= s1.length, s2.length <= 104
  s1 and s2 consist of lowercase English letters. */

function checkInclusion(s1: string, s2: string): boolean {
  if (s1.length > s2.length) {
    return false;
  }

  let hashmap: { [key: string]: number } = {};

  const map: Map<string, number> = new Map();
  for (const char of s2) {
    map.set(char, map.get(char) + 1 || 1);
    hashmap[char] = hashmap[char] + 1 || 1;
  }

  let start = 0;
  let lettersToContain = map.size;
  for (let end = 0; end < s2.length; end++) {
    const char = s2[end];
    if (map.has(char)) {
      map.set(char, map.get(char) - 1);
      if (map.get(char) === 0) {
        lettersToContain--;
      }
    }
    if (end - start + 1 === s1.length) {
      if (lettersToContain === 0) {
        return true;
      }
      const startChar = s2[start++];
      if (map.has(startChar)) {
        map.set(startChar, map.get(startChar) + 1);
        if (map.get(startChar) === 1) {
          lettersToContain++;
        }
      }
    }
  }

  return false;
}

console.log(checkInclusion('ab', 'eidbaooo'));
console.log(checkInclusion('ab', 'eidboaoo'));
