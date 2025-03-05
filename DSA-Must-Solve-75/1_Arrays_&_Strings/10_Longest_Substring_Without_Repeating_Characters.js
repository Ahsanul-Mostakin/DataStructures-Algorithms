/* 
10. Longest Substring Without Repeating Characters
Problem: Given a string `s`, find the length of the longest substring without repeating characters.
*/
function lengthOfLongestSubstringBrute(s) {
  let maxLen = 0;
  for (let i = 0; i < s.length; i++) {
    for (let j = i; j < s.length; j++) {
      const substr = s.slice(i, j + 1);
      if (new Set(substr).size === substr.length) {
        maxLen = Math.max(maxLen, substr.length);
      }
    }
  }
  return maxLen;
}
// Optimal
function lengthOfLongestSubstring(s) {
  const map = new Map();
  let maxLen = 0,
    start = 0;
  for (let end = 0; end < s.length; end++) {
    if (map.has(s[end])) {
      start = Math.max(start, map.get(s[end]) + 1);
    }
    map.set(s[end], end);
    maxLen = Math.max(maxLen, end - start + 1);
  }
  return maxLen;
}
console.log(lengthOfLongestSubstringBrute("abcabcbb"));
console.log(lengthOfLongestSubstring("abcabcbb"));
