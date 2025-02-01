//Check Permutation: Given two strings, write a method to decide if one is a permutation of the 
//other.


// sol:1

// function sort(s) {
//     let content = s.split('');
//     content.sort();
//     return content.join('');
// }

// function permutation(s, t) {
//     if (s.length !== t.length) {
//         return false;
//     }
//     return sort(s) === sort(t);
// }

// console.log(permutation("abc", "cba"));
// console.log(permutation("hello", "world"));



sol:2

function permutation(s, t) {
    if (s.length !== t.length) {
        return false;
    }

    let letters = new Array(128).fill(0); 
    let s_array = s.split('');

    for (let c of s_array) {
        letters[c.charCodeAt(0)]++;
    }

    for (let i = 0; i < t.length; i++) {
        let c = t.charCodeAt(i);
        letters[c]--;
        if (letters[c] < 0) {
            return false;
        }
    }

    return true;
}


console.log(permutation("abc", "cba"));  
console.log(permutation("hello", "world"));  



