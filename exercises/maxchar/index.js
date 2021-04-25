const assert = require("assert");

// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// T: O(n), S: O(n)
function maxChar(str) {
  const freqMap = {};
  let mostFreqChar,
    mostFreqCharCount = 0;
  for (let character of str) {
    freqMap[character] = freqMap[character] + 1 || 1;
    if (freqMap[character] > mostFreqCharCount) {
      mostFreqCharCount = freqMap[character];
      mostFreqChar = character;
    }
  }
  return mostFreqChar;
}

assert.strictEqual(maxChar("a"), "a");
assert.strictEqual(maxChar("abcdefghijklmnaaaaa"), "a");
assert.strictEqual(maxChar("ab1c1d1e1f1g1"), "1");

module.exports = maxChar;
