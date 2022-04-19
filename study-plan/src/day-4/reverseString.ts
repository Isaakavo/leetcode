/* Write a function that reverses a string. The input string is given as an array of characters s.

You must do this by modifying the input array in-place with O(1) extra memory.

 

Example 1:
  Input: s = ["h","e","l","l","o"]
  Output: ["o","l","l","e","h"]

Example 2:
  Input: s = ["H","a","n","n","a","h"]
  Output: ["h","a","n","n","a","H"]
 
Constraints:
  1 <= s.length <= 105
  s[i] is a printable ascii character. */

/**
 Do not return anything, modify s in-place instead.
 */

function swap(str: string[], low: number, high: number) {
  const temp = str[high];
  str[high] = str[low];
  str[low] = temp;
}

function reverseString(s: string[]): void {
  let low = 0;
  let high = s.length - 1;

  while (low <= high) {
    swap(s, low, high);
    low++;
    high--;
  }
  console.log(s);
}

reverseString(['h', 'e', 'l', 'l', 'o']);
reverseString(['H', 'a', 'n', 'n', 'a', 'h']);
reverseString(['I', 's', 'a', 'a', 'k']);
