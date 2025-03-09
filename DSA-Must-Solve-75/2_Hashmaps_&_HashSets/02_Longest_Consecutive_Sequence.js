/* 
2. Longest Consecutive Sequence
Problem: Given an unsorted array of integers nums, return the length of the longest consecutive sequence.
*/
function longestConsecutiveBrute(nums) {
  if (nums.length === 0) return 0;
  nums.sort((a, b) => a - b);
  let maxLen = 1,
    currentLen = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === nums[i - 1] + 1) {
      currentLen++;
      maxLen = Math.max(maxLen, currentLen);
    } else if (nums[i] !== nums[i - 1]) {
      currentLen = 1;
    }
  }
  return maxLen;
}
// Optimal
function longestConsecutive(nums) {
  const set = new Set(nums);
  let maxLen = 0;
  for (let num of nums) {
    if (!set.has(num - 1)) {
      let currentNum = num;
      let currentLen = 1;
      while (set.has(currentNum + 1)) {
        currentNum++;
        currentLen++;
      }
      maxLen = Math.max(maxLen, currentLen);
    }
  }
  return maxLen;
}

console.log(longestConsecutive([100, 4, 200, 1, 3, 2]));
