/* 
12. Group Anagrams
Problem: Given an array of strings `strs`, group all anagrams together.
*/
function groupAnagramsBrute(strs) {
  const result = [];
  const used = new Set();
  for (let i = 0; i < strs.length; i++) {
    if (used.has(i)) continue;
    const group = [strs[i]];
    used.add(i);
    for (let j = i + 1; j < strs.length; j++) {
      if (!used.has(j) && isAnagram(strs[i], strs[j])) {
        group.push(strs[j]);
        used.add(j);
      }
    }
    result.push(group);
  }
  return result;
  function isAnagram(s, t) {
    return s.split("").sort().join("") === t.split("").sort().join("");
  }
}
// Optimal
function groupAnagrams(strs) {
  const map = new Map();
  for (let str of strs) {
    const key = str.split("").sort().join("");
    if (!map.has(key)) map.set(key, []);
    map.get(key).push(str);
  }
  return Array.from(map.values());
}
console.log(groupAnagramsBrute(["eat", "tea", "tan", "ate", "nat", "bat"]));
console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
