/*Is Unique: Implement an algorithm to determine if a string has all unique characters. What if you 
cannot use additional data structures? */

sol: 1

function isUniqueChars(str){
    if(str.length>128) return false;

    let char_set = new Array(128).fill(false);
    for(let i =0; i < str.length; i++){
        let val = str.charCodeAt(i);

        if(char_set[val]) {
            return false;
        }
        char_set[val] = true;
    }
    return true;
}

let str = "A";
console.log(str.charAt(0));
console.log(str.charCodeAt(0));