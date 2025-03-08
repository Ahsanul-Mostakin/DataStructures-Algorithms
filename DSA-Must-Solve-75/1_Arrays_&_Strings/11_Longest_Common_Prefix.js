/* 
11. Longest Common Prefix
Problem: Given an array of strings `strs`, find the longest common prefix among them.
*/
function longestCommonPrefixBrute(strs) {
  if (strs.length === 0) return "";
  let prefix = strs[0];
  for (let i = 1; i < strs.length; i++) {
    while (strs[i].indexOf(prefix) !== 0) {
      prefix = prefix.slice(0, -1);
      if (prefix === "") return "";
    }
  }
  return prefix;
}
// Optimal
function longestCommonPrefix(strs) {
  if (strs.length === 0) return "";
  for (let i = 0; i < strs[0].length; i++) {
    const char = strs[0][i];
    for (let j = 1; j < strs.length; j++) {
      if (i >= strs[j].length || strs[j][i] !== char) {
        return strs[0].slice(0, i);
      }
    }
  }
  return strs[0];
}

console.log(longestCommonPrefixBrute(["flower", "flow", "flight"]));
console.log(longestCommonPrefix(["flower", "flow", "flight"]));
