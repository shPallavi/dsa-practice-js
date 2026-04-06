// Divide and Conquer - sortedFrequency
// Given a sorted array and a number, write a function called sortedFrequency
// that counts the occurrences of the number in the array

// sortedFrequency([1,1,2,2,2,2,3],2) // 4
// sortedFrequency([1,1,2,2,2,2,3],3) // 1
// sortedFrequency([1,1,2,2,2,2,3],1) // 2
// sortedFrequency([1,1,2,2,2,2,3],4) // -1
// Time Complexity - O(n)

function sortedFrequency(arr, num) {
  let count = 0;
  for (let val of arr) {
    if (val === num) count++;
  }
  return count === 0 ? -1 : count;
}

console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 2));
console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 3));
console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 1));
console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 4));
