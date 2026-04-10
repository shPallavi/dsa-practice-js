// Day 12 – Recursion Practice Problem
//  Problem: Reverse a String Using Recursion

// Write a recursive function called reverse which accepts a string as input and
// returns a new string with the characters in reverse order.

function reverse(str) {
  if (str.length <= 1) return str;
  return reverse(str.slice(1)) + str[0];
}

console.log(reverse("Hello"));
