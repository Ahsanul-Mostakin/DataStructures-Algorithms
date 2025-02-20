const strings = 

['a', 'b' , 'c', 'd'];
// 0    1     2   3
//4*4 =16 bytes of storages

//console.log(strings[2]);


//push

strings.push('e'); //O(1)



//pop opposite of push

strings.pop();
strings.pop(); //O(1)



//unshift

strings.unshift('x'); //O(n)


//slice

strings.splice(2,0, 'mostakin'); //O(n) 

console.log(strings);
