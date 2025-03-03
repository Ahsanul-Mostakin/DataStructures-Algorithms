/* 
5. Find the Duplicate Number
Problem: Given an array `nums` with `n + 1` integers between 1 and `n`, find the duplicate number.
*/

function findDuplicateBrute(nums) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) return nums[i];
    }
  }
  return -1;
}
// Optimal
function findDuplicate(nums) {
  let slow = nums[0],
    fast = nums[0];
  do {
    slow = nums[slow];
    fast = nums[nums[fast]];
  } while (slow !== fast);
  slow = nums[0];
  while (slow !== fast) {
    slow = nums[slow];
    fast = nums[fast];
  }
  return slow;
}
console.log(findDuplicateBrute([1, 3, 4, 2, 2]));
console.log(findDuplicate([1, 3, 4, 2, 2]));
