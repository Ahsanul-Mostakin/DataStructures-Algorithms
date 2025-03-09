/* 
1. Two Sum (Using HashMap)
Problem: Given an array of integers nums and an integer target, return indices of two numbers that add up to target.
*/
function twoSumBrute(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) return [i, j];
    }
  }
  return [];
}
// Optimal
function twoSum(nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement)) return [map.get(complement), i];
    map.set(nums[i], i);
  }
  return [];
}
console.log(twoSumBrute([2, 7, 11, 15], 9));
console.log(twoSum([2, 7, 11, 15], 9));
