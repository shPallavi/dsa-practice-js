// Party of Couples
// Difficulty: EasyAccuracy: 50.5%Submissions: 86K+Points: 2
// You are given an integer array arr[] of size n, representing n number of people
// in a party, each person is denoted by an integer. Couples are represented by
// the same number ie: two people have the same integer value, it means they are a couple.
// Find out the only single person in the party of couples.
// Note: It is guarantee that there exist only one single person in the party.

// Input: arr[] = [1, 2, 3, 2, 1]
// Output: 3
// Explaination: Only the number 3 is single.
// Input: arr[] = [1, 2, 3, 5, 3, 2, 1, 4, 5, 6, 6]
// Output: 4
// Explaination: 4 is the only single.
// Input: arr[] = [1, 1, 3, 3, 2]
// Output: 2

function findSinglePerson(arr) {
  let single = 0;
  for (let num of arr) {
    single ^= num;
  }
  return single;
}
console.log(findSinglePerson([1, 2, 3, 2, 1]));
console.log(findSinglePerson([1, 2, 3, 5, 3, 2, 1, 4, 5, 6, 6]));
console.log(findSinglePerson([1, 1, 3, 3, 2]));
