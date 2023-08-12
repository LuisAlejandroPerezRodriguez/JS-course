// En js hay 2 tipos de datos primitive y refrence
/*
primitive:
String
Number
Boolean
Null
Undefined
Symbol
BigInt

refrence:
Objects literals
arrays
fuctions

por lo general los reference son tratados como objetos
*/

// Primitive Type:

//String
const fristName = ' Luis Alejandro'

// Number
const age = 23
const Temp = 92.3

// Boolean
const HaveKids = false;

// Null
const NumberOfHouse = null;

//Undifine
let score = undefined;

//Symbol
const id = Symbol('id');

//BigInt
const n = 9000000000000000n;

// Reference type :

//Objects literals
const person = {
    name: 'brad'
}

//arrays
const numbers = [1, 2, 3, 4, 5];

//fuctions
function sayHello() {
    console.log("Hello");
}

const output = numbers;
console.log(output, typeof output);