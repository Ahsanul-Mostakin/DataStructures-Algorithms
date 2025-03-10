/* 
3. Ransom Note
Problem: Given two strings ransomNote and magazine, return true if ransomNote can be constructed from magazine (each letter can be used only once), false otherwise.
*/
function canConstructBrute(ransomNote, magazine) {
  let mag = magazine.split("");
  for (let char of ransomNote) {
    const index = mag.indexOf(char);
    if (index === -1) return false;
    mag[index] = "";
  }
  return true;
}
// Optimal
function canConstruct(ransomNote, magazine) {
  const map = new Map();
  for (let char of magazine) {
    map.set(char, (map.get(char) || 0) + 1);
  }
  for (let char of ransomNote) {
    if (!map.has(char) || map.get(char) === 0) return false;
    map.set(char, map.get(char) - 1);
  }
  return true;
}
console.log(canConstructBrute("a", "b"));
console.log(canConstructBrute("aa", "aab"));
console.log(canConstruct("a", "b"));
console.log(canConstruct("aa", "aab"));
