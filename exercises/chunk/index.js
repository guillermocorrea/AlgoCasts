// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

/**
 * T: O(n), S: O(n)
 * @param {number[]} array
 * @param {number} size
 * @returns {any[]}
 */
function chunk(array, size) {
  // SOL 3
  const result = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;

  // SOL 2 recursive
  // const result = [];
  // chunkRecursive(array, [], result, size, 0);
  // return result;

  // SOL 1 iterative
  // const result = [];
  // let subarray = [];
  // for (let i = 0; i < array.length; i++) {
  //   subarray.push(array[i]);
  //   if (subarray.length === size) {
  //     result.push(subarray);
  //     subarray = [];
  //   }
  // }
  // if (subarray.length > 0) {
  //   result.push(subarray);
  // }
  // return result;
}

function chunkRecursive(array, subarray, result, size, currIdx) {
  if (currIdx === array.length) {
    if (subarray.length > 0) {
      result.push(subarray);
    }
    return;
  }
  subarray.push(array[currIdx]);
  if (subarray.length === size) {
    result.push(subarray);
    subarray = [];
  }
  chunkRecursive(array, subarray, result, size, currIdx + 1);
}

module.exports = chunk;
