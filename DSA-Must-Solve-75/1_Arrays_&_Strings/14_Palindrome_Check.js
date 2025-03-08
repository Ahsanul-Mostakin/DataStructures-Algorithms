/* 
14. Palindrome Check
Problem: Given a string `s`, return true if it is a palindrome (ignoring non-alphanumeric characters and case).
*/
function isPalindromeBrute(s) {
  s = s.toLowerCase().replace(/[^a-z0-9]/g, "");
  return s === s.split("").reverse().join("");
}
// Optimal
function isPalindrome(s) {
  s = s.toLowerCase();
  let left = 0,
    right = s.length - 1;
  while (left < right) {
    while (left < right && !/[a-z0-9]/.test(s[left])) left++;
    while (left < right && !/[a-z0-9]/.test(s[right])) right--;
    if (s[left] !== s[right]) return false;
    left++;
    right--;
  }
  return true;
}
console.log(isPalindrome("A man, a plan, a canal: Panama"));
