// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

/**
 *
 * @param {string} str
 * @returns
 */
function vowels(str) {
  const matches = str.match(/[aeiou]/gi);
  return matches ? matches.length : 0;
  // let count = 0;
  // const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
  // for (let character of str) {
  //   if (vowels.has(character.toLowerCase())) {
  //     count++;
  //   }
  // }
  // return count;
}

module.exports = vowels;
