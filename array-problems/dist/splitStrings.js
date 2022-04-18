/* Complete the solution so that it splits the string into pairs of two characters.
 If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

Examples:

* 'abc' =>  ['ab', 'c_']
* 'abcdef' => ['ab', 'cd', 'ef'] */
function solution(str) {
    let i = 0;
    let j = 1;
    const result = [];
    let pair = '';
    while (j <= str.length) {
        if (str[j] === undefined) {
            pair = str[i] + '_';
            result.push(pair);
            break;
        }
        pair = str[i] + str[j];
        result.push(pair);
        i = j + 1;
        j += 2;
    }
    return result;
}
console.log(solution('abc'));
console.log(solution('abcd'));
console.log(solution('abcdef'));
console.log(solution('abcdefg'));
console.log(solution('abcdefgh'));
console.log(solution('abcdefghi'));
