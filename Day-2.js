// Write a function called maxSubarraySum which accepts an array of integers and a number called n.
// The function should calculate the maximum sum of n consecutive elements in the array.

// maxSubarraySum([1,2,5,2,8,1,5], 2) // 10
// maxSubarraySum([1,2,5,2,8,1,5], 4) // 17
// maxSubarraySum([4,2,1,6], 1) // 6
// maxSubarraySum([4,2,1,6,2], 4) // 13
// maxSubarraySum([], 4) // null

function maxSubArraySum(arr, num) {
  let maxSum = 0;
  let currentSum = 0;
  if (arr.length < num) return null;
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  currentSum = maxSum;
  for (let i = num; i < arr.length; i++) {
    currentSum = currentSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, currentSum);
  }
  return maxSum;
}

console.log(maxSubArraySum([1, 2, 5, 2, 8, 1, 5], 2));
console.log(maxSubArraySum([1, 2, 5, 2, 8, 1, 5], 4));
console.log(maxSubArraySum([4, 2, 1, 6], 1));
console.log(maxSubArraySum([4, 2, 1, 6, 2], 4));
console.log(maxSubArraySum([], 4));
