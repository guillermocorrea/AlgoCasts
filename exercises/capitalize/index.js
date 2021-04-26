// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

/**
 * T: O(n) S: O(n)
 * @param {string} str
 * @returns {string}
 */
function capitalize(str) {
  // let result = [];
  // for (let i = 0; i < str.length; i++) {
  //   if (i === 0 || str[i - 1] === ' ') {
  //     result.push(str[i].toUpperCase());
  //   } else {
  //     result.push(str[i]);
  //   }
  // }
  // return result.join('');

  // let result = '';
  // let isFirstLetter = true;
  // for (let character of str) {
  //   if (isFirstLetter) {
  //     result += character.toUpperCase();
  //     isFirstLetter = false;
  //     continue;
  //   }
  //   isFirstLetter = character === ' ';
  //   result += character;
  // }
  // return result;

  // Best solution
  const words = str.split(' ');
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substr(1);
  }
  return words.join(' ');
}

module.exports = capitalize;
