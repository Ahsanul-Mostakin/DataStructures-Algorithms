/* 
5. Decode String
Problem: Given an encoded string s (e.g., "3[a]2[bc]"), return the decoded string (e.g., "aaabcbc").
*/
function decodeStringBrute(s) {
  while (s.includes("[")) {
    const match = s.match(/(\d+)\[([a-z]+)\]/);
    if (!match) break;
    const count = parseInt(match[1]);
    const str = match[2];
    s = s.replace(match[0], str.repeat(count));
  }
  return s;
}
// Optimal
function decodeString(s) {
  const stack = [];
  let currentNum = 0,
    currentStr = "";
  for (let char of s) {
    if (char >= "0" && char <= "9") {
      currentNum = currentNum * 10 + parseInt(char);
    } else if (char === "[") {
      stack.push([currentNum, currentStr]);
      currentNum = 0;
      currentStr = "";
    } else if (char === "]") {
      const [num, prevStr] = stack.pop();
      currentStr = prevStr + currentStr.repeat(num);
    } else {
      currentStr += char;
    }
  }
  return currentStr;
}

console.log(decodeStringBrute("3[a]2[bc]"));
console.log(decodeStringBrute("3[a2[c]]"));
console.log(decodeString("3[a]2[bc]"));
console.log(decodeString("3[a2[c]]"));
