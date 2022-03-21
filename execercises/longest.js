/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let longest = [];
  let longestIndex = 0;
  for(letter of s) {
    const current = longest.indexOf(letter);
    console.log(current);
    if (current !== -1) {
      longest.splice(0, current + 1);
    }
    console.log(longest);

    longest.push(letter);
    longestIndex = Math.max(longestIndex, longest.length);
  }

  return longestIndex;
};


console.log((lengthOfLongestSubstring("pwwkew")));