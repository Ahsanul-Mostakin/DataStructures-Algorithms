/* 
4. Combination Sum 
Problem: Given an array of distinct integers candidates and a target integer target, return all unique combinations of candidates that sum to target. Candidates can be used multiple times.
*/
function combinationSumBrute(candidates, target) {
  const result = [];
  function generate(current, sum, start) {
    if (sum === target) {
      result.push([...current]);
      return;
    }
    if (sum > target) return;
    for (let i = start; i < candidates.length; i++) {
      current.push(candidates[i]);
      generate(current, sum + candidates[i], i);
      current.pop();
    }
  }
  generate([], 0, 0);
  return result;
}
// Optimal
function combinationSum(candidates, target) {
  const result = [];
  function backtrack(current, sum, start) {
    if (sum === target) {
      result.push([...current]);
      return;
    }
    if (sum > target) return;
    for (let i = start; i < candidates.length; i++) {
      current.push(candidates[i]);
      backtrack(current, sum + candidates[i], i);
      current.pop();
    }
  }
  backtrack([], 0, 0);
  return result;
}

console.log(combinationSumBrute([2, 3, 6, 7], 7));
console.log(combinationSum([2, 3, 6, 7], 7));
// [[2, 2, 3], [7]]
