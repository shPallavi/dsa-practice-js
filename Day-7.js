// Divide and Conquer - countZeroes
// Given an array of 1s and 0s which has all 1s first followed by all 0s, write a function
//     called countZeroes, which returns the number of zeroes in the array.

// countZeroes([1,1,1,1,0,0]) // 2
// countZeroes([1,0,0,0,0]) // 4
// countZeroes([0,0,0]) // 3
// countZeroes([1,1,1,1]) // 0
// Time Complexity - O(n)

// function countZeroes(arr) {
//   let count = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === 0) count++;
//   }
//   return count;
// }

function countZeroes(arr) {
  let left = 0;
  let right = arr.length - 1;
  let firstZeroIndex = -1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === 0) {
      firstZeroIndex = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  if (firstZeroIndex === -1) return 0;
  return arr.length - firstZeroIndex;
}

console.log(countZeroes([1, 1, 1, 1, 0, 0])); // 2
console.log(countZeroes([1, 0, 0, 0, 0])); // 4
console.log(countZeroes([0, 0, 0])); // 3
console.log(countZeroes([1, 1, 1, 1])); // 0
