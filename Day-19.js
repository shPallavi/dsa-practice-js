// stringifyNumbers
// Write a function called stringifyNumbers which takes in an object and finds all
// of the values which are numbers and converts them to strings.Recursion would be a great way to solve this!

// The exercise intends for you to create a new object with the numbers converted
// to strings, and not modify the original.Keep the original object unchanged.

let obj = {
  num: 1,
  test: [],
  data: {
    val: 4,
    info: {
      isRight: true,
      random: 66,
    },
  },
};

function stringifyNumbers(obj) {
  let newObj = {};

  for (let key in obj) {
    let value = obj[key];

    if (typeof value === "number") {
      newObj[key] = value.toString();
    } else if (
      typeof value === "object" &&
      value !== null &&
      !Array.isArray(value)
    ) {
      newObj[key] = stringifyNumbers(value); // recursion
    } else {
      newObj[key] = value; // copy as it is
    }
  }

  return newObj;
}
console.log(stringifyNumbers(obj));
