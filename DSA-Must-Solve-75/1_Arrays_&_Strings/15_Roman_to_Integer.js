/* 
15. Roman to Integer
Problem: Given a Roman numeral string `s`, convert it to an integer (I=1, V=5, X=10, L=50, C=100, D=500, M=1000).
*/
function romanToIntBrute(s) {
  const values = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
  let result = 0;
  const arr = s.split("");
  for (let i = 0; i < arr.length; i++) {
    if (i + 1 < arr.length && values[arr[i]] < values[arr[i + 1]]) {
      result += values[arr[i + 1]] - values[arr[i]];
      i++;
    } else {
      result += values[arr[i]];
    }
  }
  return result;
}
// Optimal
function romanToInt(s) {
  const values = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
  let result = 0;
  for (let i = 0; i < s.length; i++) {
    if (i + 1 < s.length && values[s[i]] < values[s[i + 1]]) {
      result -= values[s[i]];
    } else {
      result += values[s[i]];
    }
  }
  return result;
}

console.log(romanToIntBrute("MCMXCIV"));
console.log(romanToInt("MCMXCIV"));
