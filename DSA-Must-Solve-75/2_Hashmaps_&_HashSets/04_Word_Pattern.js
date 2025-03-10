/* 
4. Word Pattern
Problem: Given a pattern string (e.g., "abba") and a string s of words, return true if s follows the same pattern (bijective mapping).
*/
function wordPatternBrute(pattern, s) {
  const words = s.split(" ");
  if (pattern.length !== words.length) return false;
  for (let i = 0; i < pattern.length; i++) {
    for (let j = i + 1; j < pattern.length; j++) {
      if (pattern[i] === pattern[j] && words[i] !== words[j]) return false;
      if (pattern[i] !== pattern[j] && words[i] === words[j]) return false;
    }
  }
  return true;
}
// Optimal
function wordPattern(pattern, s) {
  const words = s.split(" ");
  if (pattern.length !== words.length) return false;
  const charToWord = new Map();
  const wordToChar = new Map();
  for (let i = 0; i < pattern.length; i++) {
    const char = pattern[i];
    const word = words[i];
    if (charToWord.has(char)) {
      if (charToWord.get(char) !== word) return false;
    } else if (wordToChar.has(word)) {
      if (wordToChar.get(word) !== char) return false;
    } else {
      charToWord.set(char, word);
      wordToChar.set(word, char);
    }
  }
  return true;
}
console.log(wordPatternBrute("abba", "dog cat cat dog"));
console.log(wordPatternBrute("abba", "dog cat cat fish"));

console.log(wordPattern("abba", "dog cat cat dog"));
console.log(wordPattern("abba", "dog cat cat fish"));
