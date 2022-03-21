// /**
//  * @param {number} x
//  * @return {number}
//  */
// var reverse = function(x) {
//   if (x === 0) return 0;
//   let numberString = x.toString();
//   let stack = [];
//   for (i = 0; i< numberString.length ; i++) {
//     stack.push(numberString[i]);
//   }

//   numberString = '';
//   let stackLenght = stack.length;
//   for (i = 0; i < stackLenght; i++) {
//     if(stack[i] === '-') continue;
//     numberString += stack.pop();
//     console.log(numberString);
//   }
//   const reverseN = Number(numberString);
//   return reverseN > 0x7FFFFFFF ? 0 : (Math.sign(x) === 1 ? reverseN : -Math.abs(reverseN)); 
// };


// console.log(reverse(1534236469))
let reverseN = 0;
let n = 153;
while (n) {
  reverseN = reverseN*10 + (n % 10);
  n = Math.floor(n/10);
  console.log(reverseN);
  console.log(n);
}