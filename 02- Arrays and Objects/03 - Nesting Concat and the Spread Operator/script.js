let x;


//Concatenacion de arreglos
const fruits = ['apple', 'pear', 'orange'];
const barries = ['strawberry', 'blueberry', 'rasberry'];

//fruits.push(barries) //Anidando mis arreglos
//x = fruits[3][2]; //Entrando a mi segundo aregglo y apuntando hacia la rasberry

const allFruits = [fruits, barries];

x = allFruits[0][2];

x = fruits.concat(barries); // agregar los elementos de un arreglo a otro

// Spread Operator (...)
x = [...fruits, ...barries];

// Flatten Arrays
const arr = [1, 2, [3, 4], 5, [6, 7], 8];
x = arr.flat();

// Static Methods on Array Object
x = Array.isArray(fruits);//Me dice si es un arreglo

x = Array.from('12345');//Me convierte esa entrada en un arreglo

const a = 1;
const b = 2;
const c = 3;

x = Array.of(a, b, c);//Me crea un arreglo con las variables especificadas
console.log(x);