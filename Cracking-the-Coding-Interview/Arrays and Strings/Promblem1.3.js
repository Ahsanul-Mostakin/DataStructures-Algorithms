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
