// collectStrings
// Write a function called collectStrings which accepts an object and
// returns an array of all the values in the object that have a typeof string

const obj = {
  stuff: "foo",
  data: {
    val: {
      thing: {
        info: "bar",
        moreInfo: {
          evenMoreInfo: {
            weMadeIt: "baz",
          },
        },
      },
    },
  },
};

function collectStrings(obj) {
  let result = [];
  for (let key in obj) {
    let value = obj[key];

    if (typeof value === "string") result.push(value);
    else if (
      typeof value === "object" &&
      value !== null &&
      !Array.isArray(value)
    ) {
      result = result.concat(collectStrings(value)); // recursion
    }
  }
  return result;
}

console.log(collectStrings(obj)); // ["foo", "bar", "baz"])
