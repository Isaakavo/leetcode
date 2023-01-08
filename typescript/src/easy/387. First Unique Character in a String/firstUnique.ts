/* 
Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

Example 1:
  Input: s = "leetcode"
  Output: 0

Example 2:
  Input: s = "loveleetcode"
  Output: 2

Example 3:
  Input: s = "aabb"
  Output: -1

Constraints:
1 <= s.length <= 105
s consists of only lowercase English letters.
*/

function firstUniqChar(s: string): number {
  let hashmap = {};
  let index: number = -1;

  for (let i = 0; i < s.length; i++) {
    const element = s[i];
    hashmap[element] = hashmap[element] ? hashmap[element] + 1 : 1;
  }

  for (let i = 0; i < s.length; i++) {
    const element = s[i];
    if (hashmap[element] === 1) {
      return i;
    }
  }

  return index;
}

firstUniqChar('leetcode');
firstUniqChar('loveleetcode');
firstUniqChar('aabb');
