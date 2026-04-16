// capitalizeWords
// Write a recursive function called capitalizeWords.
// Given an array of words, return a new array containing
// each word capitalized.

// let words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']

function capitalizeWords(arr) {
  if (arr.length === 0) return [];
  let first = arr[0].toUpperCase();
  return [first].concat(capitalizeWords(arr.slice(1)));
}

console.log(capitalizeWords(["i", "am", "learning", "recursion"]));
