// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

/**
 * T: O(n^2), S: O(1)
 * @param {number} n
 */
function steps(n) {
  for (let i = 1; i <= n; i++) {
    console.log('#'.repeat(i).padEnd(n, ' '));
  }
  // stepsRecursive(n, '', 1);
}

// function stepsRecursive(n, partial, currRow) {
//   partial += partial.length < currRow ? '#' : ' ';
//   if (partial.length === n) {
//     console.log(partial);
//     partial = '';
//     if (currRow >= n) {
//       return;
//     }
//     currRow++;
//   }
//   stepsRecursive(n, partial, currRow);
// }

module.exports = steps;
