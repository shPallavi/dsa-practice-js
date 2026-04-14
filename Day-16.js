// Problem 1: Find Unique Vowels in a String
// Write a function that takes a string as input and returns all unique vowels present in the string.
// Consider both uppercase and lowercase vowels (a, e, i, o, u)
// Treat uppercase and lowercase vowels as the same (case-insensitive)
// The result should contain no duplicates

// Input: "Hello World"
// Output: ["e", "o"]

function duplucateStr(str) {
  let result = {};
  let vowels = "aeiouAEIOU";
  for (let char of str) {
    if (vowels.includes(char)) {
      result[char] = (result[char] || 0) + 1;
    }
  }
  return result;
}
console.log(duplucateStr("Hello World"));

function vowelsDuplicates(str) {
  let result = new Set();
  let vowels = "aeiouAEIOU";
  for (let char of str) {
    if (vowels.includes(char)) {
      result.add(char.toLowerCase());
    }
  }
  return [...result];
}
console.log(vowelsDuplicates("Hello World"));
