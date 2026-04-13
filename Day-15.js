// capitalizeFirst
// Write a recursive function called capitalizeFirst.
//  Given an array of strings, capitalize the first
//  letter of each string in the array.

// capitalizeFirst(['car','taco','banana']); // ['Car','Taco','Banana']

function capitalizeFirst(arr) {
  if (arr.length === 0) return [];
  let first = arr[0];
  let capitalize = first[0].toUpperCase() + first.slice(1);
  return [capitalize].concat(capitalizeFirst(arr.slice(1)));
}

console.log(capitalizeFirst(["car", "taco", "banana"])); // ['Car','Taco','Banana'])
