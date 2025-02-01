//

function sort(s) {
    let content = s.split('');
    content.sort();
    return content.join('');
}

function permutation(s, t) {
    if (s.length !== t.length) {
        return false;
    }
    return sort(s) === sort(t);
}

console.log(permutation("abc", "cba"));
console.log(permutation("hello", "world"));
