function boo(n){
    for (let i =0; i<n.length; i++){
        console.log('Mostaking');
    }
}

boo([1,2,3,4,5]); //O(1)

function arrayOfHiTimes(n){
    let hiArray = [];

    for (let i = 0; i<n ; i++){
        hiArray[i] = "Hi";
        console.log("Hi");
    }
    return hiArray;
}
arrayOfHiTimes(6); //O(n)