const assert = require("assert");

// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  // T: O(n), S: O(n)
  let mostCommonCharacter = "";
  let mostCommonCharacterFreq = 0;
  const frequency = {};
  for (let character of str) {
    if (frequency[character] !== undefined) {
      frequency[character]++;
    } else {
      frequency[character] = 1;
    }
    // How to handle equal frequencies?
    if (frequency[character] >= mostCommonCharacterFreq) {
      mostCommonCharacterFreq = frequency[character];
      mostCommonCharacter = character;
    }
  }
  return mostCommonCharacter;
}

assert.strictEqual(maxChar("a"), "a");
assert.strictEqual(maxChar("abcdefghijklmnaaaaa"), "a");
assert.strictEqual(maxChar("ab1c1d1e1f1g1"), "1");

module.exports = maxChar;
