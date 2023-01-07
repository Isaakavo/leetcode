/* 
Given two binary strings a and b, return their sum as a binary string.

Example 1:
  Input: a = "11", b = "1"
  Output: "100"

Example 2:
  Input: a = "1010", b = "1011"
  Output: "10101"
 

Constraints:
  1 <= a.length, b.length <= 104
  a and b consist only of '0' or '1' characters.
  Each string does not contain leading zeros except for the zero itself.
  
*/
function addBinary(a: string, b: string): string {
  let ptra = a.length;
  let ptrb = b.length;
  let carry = '';
  let result = '';
  while (ptra >= 0 && ptrb >= 0) {
    ptra--;
    ptrb--;
    const aItem = a[ptra];
    const bItem = b[ptrb];
    if (aItem === '1' && bItem === '1') {
      if (carry) {
        result = '1' + result;
        continue;
      }
      result = '0' + result;
      carry = '1';
    } else {
      if (carry) {
        result = '1' + result;
        carry = '';
        continue;
      }
      result = ((aItem > bItem )? aItem : bItem) + result;
    }
  }

  return result;
}

console.log(addBinary('11', '1'));
console.log(addBinary('10', '1'));
console.log(addBinary('1010', '1011'));
console.log(addBinary('1111', '1111'));
