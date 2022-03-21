const romans = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

/**
 * @param {string} s
 * @return {number}
 */
// var romanToInt = function (s) {
//   let stack = s.split('').reverse().join('');

//   let prev = romans[stack[0]];
//   let result = [];
//   for (let i = 1; i < stack.length; i = i + 2) {
//     const letter = romans[stack[i]];
//     prev > letter ? result.push(prev - letter) : result.push(prev + letter);
//     prev = romans[stack[i + 1]];
//   }
//   if (stack.length % 2 !== 0) {
//     let index = stack.length - 1;
//     result.push(romans[stack[index]]);
//   }

//   result = result.reduce((acc, sum) => (acc += sum), 0);

//   return result;
// };

const romanToInt = (s) => {
  let result = [];
    let next = romans[s[1]];
    for (let i = 0; i < s.length; i++) {
    const actual = romans[s[i]];
        if (next > actual) {
            result.push(next - actual);
            i++;
        } else {
            result.push(actual);
        }
        next = romans[s[i + 2]];
      }
      result = result.reduce((acc, sum) => (acc += sum), 0);

      return result;
};

console.log(romanToInt('III'));
console.log(romanToInt('IV'));
console.log(romanToInt('IX'));
console.log(romanToInt('LVIII'));
console.log(romanToInt('MCMXCIV'));
console.log(romanToInt('MMMCMXCIX'));
console.log(romanToInt('MCDLXXVI'));


// function filterWords(arr, str) {
//   let result = [];
//   arr.forEach((elem) => {
//     let strArr = str.split('');
//     const letterArr = elem.split('');
//     let word = '';
//     for (let i = 0; i < letterArr.length; i++) {
//       const element = letterArr[i];
//       let index = strArr.indexOf(element);
//       let strLetter = strArr[index];
//       if (strLetter !== undefined) {
//         word += strLetter;
//       } else {
//         return;
//       }
//     }
//     result.push(word);
//   })

//   return result;
// }

// let result = filterWords(['mex', 'lux', 'tree'], 'asdadhmasdeaxluasdx');

// console.log(result);


// for (let i = 0; i < letter.length; i++) {
//   const lett = letter[i];
//   for (let j = 0; j < strArr.length; j++) {
//     const element = strArr[j];
//     if (lett === element) {
//       let index = strArr.indexOf(element);
//       strArr.splice(index, 1);
//       console.log({lett, element, strArr});
//       result.push(lett);
//     }
//   }
// }