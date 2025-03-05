/* 
9. Valid Anagram
Problem: Given two strings `s` and `t`, return true if `t` is an anagram of `s`, false otherwise.
*/
function isAnagramBrute(s, t) {
  if (s.length !== t.length) return false;
  return s.split("").sort().join("") === t.split("").sort().join("");
}

// Optimal
function isAnagram(s, t) {
  if (s.length !== t.length) return false;
  const count = Array(26).fill(0);
  for (let i = 0; i < s.length; i++) {
    count[s.charCodeAt(i) - 97]++;
    count[t.charCodeAt(i) - 97]--;
  }
  return count.every((x) => x === 0);
}

console.log(isAnagramBrute("anagram", "nagaram"));
console.log(isAnagram("anagram", "nagaram"));
