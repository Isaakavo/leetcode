function minDeletions(s) {
    const hash = {};
    const arr = [];
    let deletions = 0;
    for (let i = 0; i < s.length; i++) {
        const element = s[i];
        hash[element] = hash[element] ? (hash[element] += 1) : 1;
    }
    for (const key in hash) {
        if (Object.prototype.hasOwnProperty.call(hash, key)) {
            const element = hash[key];
            arr.push(element);
        }
    }
    arr.sort(function (a, b) {
        return b - a;
    });
    while (arr.length !== 0) {
        let freq = arr[0];
        arr.shift();
        if (arr.length === 0) {
            return deletions;
        }
        if (freq === arr[0]) {
            if (freq > 1) {
                arr.push(freq - 1);
                arr.sort(function (a, b) {
                    return b - a;
                });
            }
            deletions++;
        }
    }
    return deletions;
}
const s = 'aab';
const st = 'aaabbbcc';
const str = 'ceabaacb';
const stri = 'abcabc';
const strin = 'gagblhlbfjdagcjcccgjmncfleblmgoanoghedggmanoookejcafofbjnonggfjdmaclbikdidoaihoigbjccioijfnjljmbj';
// console.log(minDeletions(s));
// console.log(minDeletions(st));
// console.log(minDeletions(str));
// console.log(minDeletions(stri));
console.log(minDeletions(strin));
