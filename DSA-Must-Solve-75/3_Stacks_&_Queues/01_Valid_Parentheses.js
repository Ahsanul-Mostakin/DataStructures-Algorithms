/* 
1. Valid Parentheses
Problem: Given a string s containing only '(', ')', '{', '}', '[', ']', return true if the parentheses are valid (properly nested), false otherwise.
*/
function isValidBrute(s) {
  while (s.includes("()") || s.includes("[]") || s.includes("{}")) {
    s = s.replace("()", "").replace("[]", "").replace("{}", "");
  }
  return s.length === 0;
}
// Optimal
function isValid(s) {
  const stack = [];
  const brackets = { "(": ")", "{": "}", "[": "]" };
  for (let char of s) {
    if (brackets[char]) {
      stack.push(char);
    } else if (stack.length === 0 || brackets[stack.pop()] !== char) {
      return false;
    }
  }
  return stack.length === 0;
}
console.log(isValidBrute("()[]{}"));
console.log(isValidBrute("(]"));
console.log(isValid("()[]{}"));
console.log(isValid("(]"));
