/* Given a string s, reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

Example 1:
  Input: s = "Let's take LeetCode contest"
  Output: "s'teL ekat edoCteeL tsetnoc"

Example 2:
  Input: s = "God Ding"
  Output: "doG gniD"
 

Constraints:
  1 <= s.length <= 5 * 104
  s contains printable ASCII characters.
  s does not contain any leading or trailing spaces.
  There is at least one word in s.
  All the words in s are separated by a single space. */

function reverseWords(s: string): string {
  let result = [];
  let strArr = s.split(' ')
  for (let index = 0; index < strArr.length; index++) {
    const element = [...strArr[index]];
    let i = 0;
    let j = element.length - 1;
    while (i <= j) {
      const temp = element[j];
      element[j] = element[i];
      element[i] = temp;
      i++;
      j--;
    }
    result.push(element.join(''));
  }

  return result.join(' ');
}

console.log(reverseWords("Let's take LeetCode contest"));
console.log(reverseWords('God Ding'));
