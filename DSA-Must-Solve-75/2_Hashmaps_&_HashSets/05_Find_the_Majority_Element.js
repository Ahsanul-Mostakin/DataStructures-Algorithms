/* 
5. Find the Majority Element
Problem: Given an array nums of size n, return the majority element that appears more than ⌊n/2⌋ times.
*/
function majorityElementBrute(nums) {
  const threshold = Math.floor(nums.length / 2);
  for (let i = 0; i < nums.length; i++) {
    let count = 0;
    for (let j = 0; j < nums.length; j++) {
      if (nums[i] === nums[j]) count++;
    }
    if (count > threshold) return nums[i];
  }
}
// Optimal
function majorityElementHash(nums) {
  const map = new Map();
  const threshold = Math.floor(nums.length / 2);
  for (let num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
    if (map.get(num) > threshold) return num;
  }
}
console.log(majorityElementBrute([3, 2, 3]));
console.log(majorityElementBrute([2, 2, 1, 1, 1, 2, 2]));
console.log(majorityElementHash([3, 2, 3]));
console.log(majorityElementHash([2, 2, 1, 1, 1, 2, 2]));
