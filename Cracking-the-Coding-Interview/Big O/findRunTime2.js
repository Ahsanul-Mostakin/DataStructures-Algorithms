function printPairs(array){
    for(let i = 0; i<array.length; i++){
        for(let j = 0; j<array.length; j++){
            console.log(array[i] + " ,"+ array[j]);
        }
    }
}

printPairs([1,2,3,4])


//The total number of iterations of the print statement is n * n = n².
//O(n²)

Object(n)