// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

/**
 * T: O(n + m), S: O(n + m)
 * @param {string} stringA
 * @param {string} stringB
 * @returns {boolean}
 */
function anagrams(stringA, stringB) {
  const cleanA = cleanStr(stringA);
  const cleanB = cleanStr(stringB);
  if (cleanA.length !== cleanB.length) {
    return false;
  }
  const charMapA = buildMap(cleanA);
  const charMapB = buildMap(cleanB);

  for (let charA in charMapA) {
    if (charMapA[charA] !== charMapB[charA]) {
      return false;
    }
  }
  return true;
}

const cleanStr = (str) => str.replace(/[^\w]/g, '').toLowerCase();

function buildMap(str) {
  const map = {};
  for (let character of str) {
    map[character] = map[character] + 1 || 1;
  }
  return map;
}

module.exports = anagrams;
