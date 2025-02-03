// Craete a function that reverse a strings;
//'Hi My name is Mostakin'
//nikatsoM si eman yM iH

function reverse(str){
    //check input

    if(!str || str.length < 2 || typeof str !== 'string'){
        return 'hmm that is not good'
    }
    
    const backwards = [];

    const totalItems = str.length - 1;

    for(let i = totalItems; i >= 0; i--){
        backwards.push(str[i]);
       
    }

    console.log(backwards);

    return backwards.join('');


}


function reverse2(str){
    
   return str.split('').reverse().join('');

}

const Reverse1 = reverse('Hi My name is Mostakin');

console.log(Reverse1);

const Reverse2 = reverse2('Hi My name is Mostakin');

console.log(Reverse2);


const reverse3 = str => str.split('').reverse().join('');
console.log(reverse3('Hi My name is Mostakin'));

