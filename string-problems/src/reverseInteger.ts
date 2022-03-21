/*  
  Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

  Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

  Example 1:
    Input: x = 123
    Output: 321

  Example 2:
    Input: x = -123
    Output: -321

  Example 3:
    Input: x = 120
    Output: 21

  Constraints:

  -231 <= x <= 231 - 1
*/
function reverse(x: number): number {
  let MAX_VALUE = Number.MAX_SAFE_INTEGER / 10;
  let MIN_VALUE = Number.MIN_SAFE_INTEGER / 10;
  let rev = 0;
  while (x !== 0) {
    let pop = x % 10;
    x = Math.round(x /= 10);
    if (rev > MAX_VALUE || (rev === MAX_VALUE && pop > 7)) return 0;
    if (rev < MIN_VALUE || (rev === MIN_VALUE && pop < -8)) return 0;
    rev = rev * 10 + pop;
  }
  return rev;
}

console.log(reverse(123));
console.log(reverse(-123));
console.log(reverse(1534236469));
console.log(1534236469 > Number.MAX_VALUE);
