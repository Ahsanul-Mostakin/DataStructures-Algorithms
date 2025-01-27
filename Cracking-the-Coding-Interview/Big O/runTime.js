function foo(array){
    let sum =0;
    let product = 1;

    for(let i = 0; i<array.length; i++){
        sum += array[i];

    }
    for(let i = 0; i<array.length; i++){
        product *= array[i];
    }

    console.log(sum + " ,"+ product);
}

foo([1,2,3,4,5])

//O(n)+O(n)=O(2n)
//Runtime Complexity: O(n)