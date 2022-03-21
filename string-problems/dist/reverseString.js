/*
  Write a function that reverses a string. The input string is given as an array of characters s.
  You must do this by modifying the input array in-place with O(1) extra memory.

  Example 1:
    Input: s = ["h","e","l","l","o"]
    Output: ["o","l","l","e","h"]

  Example 2:
    Input: s = ["H","a","n","n","a","h"]
    Output: ["h","a","n","n","a","H"]
*/
function reverseString(s) {
    let j = s.length - 1;
    for (let i = 0; i < s.length / 2; i++) {
        const temp = s[i];
        s[i] = s[j];
        s[j] = temp;
        j--;
    }
}
reverseString(['h', 'e', 'l', 'l', 'o']);
reverseString(['H', 'a', 'n', 'n', 'a', 'h']);
reverseString(['s', 'i']);
