/* 
1. Generate Parentheses 
Problem: Given an integer n, generate all valid combinations of n pairs of parentheses.
*/
function generateParenthesisBrute(n) {
  function generateAll(current, pos, n) {
    if (pos === 2 * n) {
      if (isValid(current)) result.push(current);
      return;
    }
    generateAll(current + "(", pos + 1, n);
    generateAll(current + ")", pos + 1, n);
  }
  function isValid(s) {
    let balance = 0;
    for (let char of s) {
      if (char === "(") balance++;
      else balance--;
      if (balance < 0) return false;
    }
    return balance === 0;
  }
  const result = [];
  generateAll("", 0, n);
  return result;
}
// Optimal
function generateParenthesis(n) {
  const result = [];
  function backtrack(open, close, current) {
    if (current.length === 2 * n) {
      result.push(current);
      return;
    }
    if (open < n) backtrack(open + 1, close, current + "(");
    if (close < open) backtrack(open, close + 1, current + ")");
  }
  backtrack(0, 0, "");
  return result;
}
console.log(generateParenthesisBrute(3));
console.log(generateParenthesis(3));
