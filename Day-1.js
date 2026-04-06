// 🚀 Day 1 of My DSA Journey

// 🔹 Problem:
// Given a sorted array, find a pair whose sum equals a target value.

// Problem: Pair with Target Sum

// Given a sorted array and a target sum, find a pair whose sum equals the target.

// Return the pair or undefined.

// Examples:
// pairSum([1,2,3,4,6], 6)   // [2,4]
// pairSum([2,5,9,11], 11)   // [2,9]

// Constraints:
// - Sorted array
// - O(n) time

function pairSum(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === target) return [arr[left], arr[right]];
    else if (sum > target) right--;
    else left++;
  }
  return undefined;
}

console.log(pairSum([1, 2, 3, 4, 6], 6));
console.log(pairSum([2, 5, 9, 11], 11));
