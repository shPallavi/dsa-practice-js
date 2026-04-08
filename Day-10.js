// 🔹 Problem Statement
// Write a function flatten(arr) that takes a nested array
// and returns a new array flattened into a single level.

// 🔹 Built-in Method
const input = [1, [2, 3], [4, [5, 6]]];
console.log(input.flat(Infinity));
// Output: [1, 2, 3, 4, 5, 6]

// 🔹 Recursion
function flatten(arr) {
  let result = [];
  for (let item of arr) {
    if (Array.isArray(item)) {
      result = result.concat(flatten(item));
    } else {
      result.push(item);
    }
  }
  return result;
}
console.log(flatten([1, [2, 3], [4, [5, 6]]]));
console.log(flatten([1, [2, 3]]));
console.log(
  flatten([
    [1, 2],
    [3, 4],
  ]),
);
console.log(flatten([1, 2, 3]));
