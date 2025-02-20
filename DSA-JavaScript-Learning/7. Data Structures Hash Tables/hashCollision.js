let user = {
    age: 25,
    name: 'Mostakin',
    magic: true,
    scream: function(){
        console.log('Hellooo');
    }
}

user.spell = 'Abra kadabra'; //O(1)
console.log(user.age); //O(1)
console.log(user); //O(1)
