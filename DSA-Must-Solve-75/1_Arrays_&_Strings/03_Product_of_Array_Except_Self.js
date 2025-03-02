/* 
3. Product of Array Except Self
Problem: Given an integer array `nums`, return an array where each element is the product of all elements except itself, without using division.
*/
function productExceptSelfBrute(nums) {
  const result = [];
  for (let i = 0; i < nums.length; i++) {
    let product = 1;
    for (let j = 0; j < nums.length; j++) {
      if (i !== j) product *= nums[j];
    }
    result[i] = product;
  }
  return result;
}
// Optimal
function productExceptSelf(nums) {
  const result = new Array(nums.length);
  result[0] = 1;
  for (let i = 1; i < nums.length; i++) {
    result[i] = result[i - 1] * nums[i - 1];
  }
  let rightProduct = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    result[i] *= rightProduct;
    rightProduct *= nums[i];
  }
  return result;
}
console.log(productExceptSelfBrute([1, 2, 3, 4]));
console.log(productExceptSelf([1, 2, 3, 4]));
