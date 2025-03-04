/* 
7. Next Permutation
Problem: Given an array `nums`, rearrange it into the lexicographically next greater permutation. If not possible, sort in ascending order.
*/
// Optimal
function nextPermutation(nums) {
  let i = nums.length - 2;
  while (i >= 0 && nums[i] >= nums[i + 1]) i--;
  if (i >= 0) {
    let j = nums.length - 1;
    while (j >= 0 && nums[j] <= nums[i]) j--;
    [nums[i], nums[j]] = [nums[j], nums[i]];
  }
  let left = i + 1,
    right = nums.length - 1;
  while (left < right) {
    [nums[left], nums[right]] = [nums[right], nums[left]];
    left++;
    right--;
  }
}
let nums = [1, 2, 3];
nextPermutation(nums);
console.log(nums);
