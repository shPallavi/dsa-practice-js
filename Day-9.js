// 🧠 Problem Statement: First Non-Repeating Element
// Given an array of integers, find the first element that appears only once in the array.
// If no such element exists, return null (or -1 based on requirement).
// Find the first element that appears only once
// input: [1, 2, 3, 2, 1, 4]
// output: 3
// Input:  [1, 1, 2, 2, 3, 3]
// Output: null
// Input:  [7, 2, 2, 3, 3]
// Output: 7

function nonRepeating(arr) {
  let count = {};
  for (let num of arr) {
    count[num] = (count[num] || 0) + 1;
  }
  for (let num of arr) {
    if (count[num] === 1) return num;
  }
  return null;
}
console.log(nonRepeating([1, 2, 3, 2, 1, 4]));
console.log(nonRepeating([1, 1, 2, 2, 3, 3]));
console.log(nonRepeating([7, 2, 2, 3, 3]));
