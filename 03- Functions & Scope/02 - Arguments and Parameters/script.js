//Default params
function registerUser(user = 'Bot'){
    return user + ' is register';
}

console.log(registerUser());

//Rest Params
function sum(...numbers){ //Podemos meter infinidad de numeros
    let total = 0;

    for (const num of numbers){
        total +=num;
    }

    return total;
}

console.log(sum(1, 2, 3, 4, 5, 6, 100));

//Objects as params
function loginUser(user){
    return `The user ${user.name} with the id of ${user.id} is logged`;
}

const user = {
    name: 'Luis',
    id: 1
}

console.log(loginUser(user));
//Podemos hacer lo siguiente 
console.log(loginUser({
    id: 2,
    name: 'Rosa'
}));

function getRandom(arr = []) {
   const  ramdomIndex = Math.floor(Math.random() * arr.length);
   const number = arr[ramdomIndex];
   return console.log(number);
}

arr1 = [1,2,3,4,5,6,7,8,9,10];
getRandom(arr1);