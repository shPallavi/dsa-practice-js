// Frequency Counter / Multiple Pointer - findPair
// Given an unsorted array and a number n, find if there exists a pair
// of elements in the array whose difference is n. This function should
// return true if the pair exists or false if it does not.

// Part 1 - solve this with the following requirements:
// Time Complexity Requirement - O(n)

function findPair(arr, target) {
  target = Math.abs(target);
  const set = new Set();
  for (let num of arr) {
    if (set.has(num + target) || set.has(num - target)) {
      return true;
    }
    set.add(num);
  }
  return false;
}

console.log(findPair([6, 1, 4, 10, 2, 4], 2));
console.log(findPair([8, 6, 2, 4, 1, 0, 2, 5, 13], 1));
console.log(findPair([4, -2, 3, 10], -6));
console.log(findPair([6, 1, 4, 10, 2, 4], 22));
console.log(findPair([], 0));
console.log(findPair([5, 5], 0));
console.log(findPair([-4, 4], -8));
console.log(findPair([-4, 4], 8));
console.log(findPair([1, 3, 4, 6], -2));
console.log(findPair([0, 1, 3, 4, 6], -2));
console.log(findPair([1, 2, 3], 0));
