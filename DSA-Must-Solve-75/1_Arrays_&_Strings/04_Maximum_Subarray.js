/* 
4. Maximum Subarray (Kadane’s Algorithm)
Problem: Given an integer array `nums`, find the contiguous subarray with the largest sum and return that sum.
*/
function maxSubArrayBrute(nums) {
  let maxSum = -Infinity;
  for (let i = 0; i < nums.length; i++) {
    let sum = 0;
    for (let j = i; j < nums.length; j++) {
      sum += nums[j];
      maxSum = Math.max(maxSum, sum);
    }
  }
  return maxSum;
}
// Optimal
function maxSubArray(nums) {
  let maxSum = nums[0],
    currentSum = nums[0];
  for (let i = 1; i < nums.length; i++) {
    currentSum = Math.max(nums[i], currentSum + nums[i]);
    maxSum = Math.max(maxSum, currentSum);
  }
  return maxSum;
}
console.log(maxSubArrayBrute([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
