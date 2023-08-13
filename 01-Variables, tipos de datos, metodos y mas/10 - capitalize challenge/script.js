const myString = 'developer';

/* Primera solucion
let myNewSting = myString.split('');
myNewSting = myString[0].toUpperCase() + myString.slice(1, 20); */

/*Segunda forma de solucionarlo
let myNewSting = myString[0].toUpperCase() + myString.substring(1, 20);*/

//Forma mas optima
let myNewSting = `${myString[0].toUpperCase()}${myString.slice(1)}`;

console.log(myNewSting);