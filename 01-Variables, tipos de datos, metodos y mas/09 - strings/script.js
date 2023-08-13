let x;
const name = 'Luis';
const age = '31';

//Concatenacion
x = 'hello, my name is ' + name + ' and I am ' + age + ' years old';

//Template literals 
x = `Hello, my name is ${name} and I am ${age} years old`

// String properties and methods
// cuando usamos propiedades o metodos Js trata los strings como objetos hace un new string('...');
const s = 'Hello World'
x = s.length //--> me da el tamano del string
x = s[0] //--> accesder a un caracter mediante la posicion
x = s.__proto__; //Ver todos los metodos y propiedades
x = s.toUpperCase(); //Pone el string en mayuscula
x = s.toLowerCase(); //Pone el string en minuscula
x = s.charAt(0) // --> me da el caracter en la posicion especificada
x = s.indexOf('e');//--> me da la posicion en la que se encuentra un caracter
x = s.substring(0, 5)//me da caracteres del recorrido de las posiciones especificadas
x = s.slice(-11, -6)//Es parecido a sub string pero con numeros negativos
x = '       Hello World'
x = s.trim(); //elimina el espacio innecesario
x = s.replace('World', 'XD') //Remplaza una parte especifica del string por otra
x = s.includes('Hell') // Me dara true or false si la cade especificada se encuentra en el string
x = s.valueOf(); // lo que contiene el string
x = s.split('');//Me separa el string en lo especificado y me lo convierte en un arreglo
console.log(x);