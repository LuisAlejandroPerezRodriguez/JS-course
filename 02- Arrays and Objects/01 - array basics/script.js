// Arrays are a special type of 'object' and a data structure in Js that stores multiple values

let x; //to access to a position

//Array literal
const numbers = [12, 34, 56, 90];
const mixed = [12, 'hola', true, null];

//Array Constructor
const fruits = new Array('manzana', 'pera', 'banana');

x = numbers[0]; // Para acceder a la posicion 0 del arreglo de numeros

x = numbers[0] + numbers[2];

x = `My favorite fruit is a ${fruits[0]}`;

x = numbers.length; //tamano del arreglo

fruits[2] = 'fresa'; // Para cambiar un valor

//fruits.length = 2; // Me ensena 2 posciones 
fruits[fruits.length] = 'limon' // Agregar un elemto nuevo
x = fruits;
console.log(x);