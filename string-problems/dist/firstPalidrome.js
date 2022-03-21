function firstPalindrome(words) {
    for (let i = 0; i < words.length; i++) {
        const element = words[i].split('').reverse().join('');
        if (element === words[i]) {
            return words[i];
        }
    }
    return '';
}
let words = ['abc', 'car', 'ada', 'racecar', 'cool'];
console.log(firstPalindrome(words));
words = ["notapalindrome", "racecar"];
console.log(firstPalindrome(words));
words = ["def", "ghi"];
console.log(firstPalindrome(words));
