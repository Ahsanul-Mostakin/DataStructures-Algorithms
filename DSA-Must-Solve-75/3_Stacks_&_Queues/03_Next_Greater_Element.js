/* 
3. Next Greater Element
Problem: Given two arrays nums1 and nums2, for each element in nums1, find the next greater element in nums2 (to its right). Return [-1] if none exists.
*/
function nextGreaterElementBrute(nums1, nums2) {
  const result = [];
  for (let num of nums1) {
    let found = false,
      nextGreater = -1;
    for (let i = 0; i < nums2.length; i++) {
      if (nums2[i] === num) {
        found = true;
      } else if (found && nums2[i] > num) {
        nextGreater = nums2[i];
        break;
      }
    }
    result.push(nextGreater);
  }
  return result;
}
// Optimal
function nextGreaterElement(nums1, nums2) {
  const map = new Map();
  const stack = [];
  for (let num of nums2) {
    while (stack.length > 0 && stack[stack.length - 1] < num) {
      map.set(stack.pop(), num);
    }
    stack.push(num);
  }
  return nums1.map((num) => map.get(num) || -1);
}

console.log(nextGreaterElementBrute([4, 1, 2], [1, 3, 4, 2]));
console.log(nextGreaterElement([4, 1, 2], [1, 3, 4, 2]));
