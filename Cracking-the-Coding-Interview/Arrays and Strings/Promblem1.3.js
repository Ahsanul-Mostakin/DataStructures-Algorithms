/* Write a method to replace all spaces in a string with '%20'. You may assume that the string 
has sufficient space at the end to hold the additional characters, and that you are given the "true" 
length of the string. (Note: if implementing in Java, please use a character array so that you can 
perform this operation in place.) 
EXAMPLE 
Input: 
Output: 
"Mr John Smith 
", 13 
"Mr%20John%20Smith"
*/
function replaceSpaces(str, trueLength) {
    let spaceCount = 0;

    for (let i = 0; i < trueLength; i++) {
        if (str[i] === ' ') {  
            spaceCount++;
        }
    }

    let index = trueLength + spaceCount * 2;  
    let charArray = str.split('');

    for (let i = trueLength - 1; i >= 0; i--) { 
        if (charArray[i] === ' ') {
            charArray[index - 1] = '0';
            charArray[index - 2] = '2';
            charArray[index - 3] = '%';
            index -= 3;  
        } else {
            charArray[index - 1] = charArray[i];
            index--;  
        }
    }

    return charArray.join('');
}

console.log(replaceSpaces("Mr John Smith    ", 13));  
