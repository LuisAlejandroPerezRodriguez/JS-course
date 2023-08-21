/*
function add(a, b){
    return a + b;
}
*/

//Arrow fuction syntax
const add = (a,b) => {
    return a + b;
}

//Implicit Return
const subtract = (a,b) => a - b;

//Can leave off () with a single param
const double = a => a * 2;

//Returning an object
const createObj = () => ({
    name: 'Brad',
});

//Arrow fuction in a callback
const numbers = [1,2,3,4,5];

numbers.forEach(n => console.log(n));
console.log(add(10,2));
console.log(subtract(50,25));
console.log(double(10));
console.log(createObj());