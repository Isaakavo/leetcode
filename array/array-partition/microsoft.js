function createHash(S) {
  const hash = {};
  //I count how many occurrences are for every letter in the string and store them in a hash table
  for (let i = 0; i < S.length; i++) {
    const element = S[i];
    hash[element] = hash[element] ? (hash[element] += 1) : 1;
  }

  return hash;
}


function solution(S) {
  // write your code in JavaScript (Node.js 8.9.4)
  const hash = createHash(S);
  let result = '';

  //Count if a letterhas been places more than two times
  let letterCounter = 0;
  for (let i = 0; i < S.length; i++) {
    const element = S[i];
    //Check if the current letter has more than two letters
    if (hash[element] < 3) {
      //if yes it is added to the result string
      result += S[i];
    } else {
      //if not, I check if the current letter has been places more than two times
      if (letterCounter > 1) {
        letterCounter = 0;
        continue;
      }
      //if the letter hasn't been places more than two times I added to result
        result += S[i];
        letterCounter++;
    }
  }
}

// solution("eedaaad")
// solution("xxxtxxx")
solution('uuuuxaaaaxuuu');
