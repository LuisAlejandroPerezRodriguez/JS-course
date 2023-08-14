let x;
const arr = [12, 45, 60, 80];
const arr2 = [20, 60, 43, 23];

arr.push(100);//Me agrega un valor al arreglo
arr.pop();//Elimina el ultimo valor del arreglo
arr.unshift(99);//Agrega un valir al inicio del arreglo
arr.shift();//elimina el primer valor del arreglo
arr.reverse();//invierte el arreglo

x = arr2.includes(20);//me indica si el valor esta dentro del arreglo

x = arr2.indexOf(34);//Me dice en que posicion se encuentra el valor especificado y si no esta me da un -1

x = arr2.slice(1, 3);//Me devuelve un fragmento especificado el arreglo y no manipula el arreglo
//Lo que nos dice es mira voy a iniciar en la posicion 1 del arreglo y voy a terminar en el objeto 3 del arreglo

//x = arr2.splice(1, 2);//Lo mismo que el otro pero si me manipula el arreglo y se queda asi 
//En este caso como se modifico el arreglo empiezo en la nueva posicion 0 que es 60 y termino en el objeto 2 que es 43

//x = arr2.splice(1, 1) // Quitar un elemento del arreglo en este caso quite el 60

x = arr2.splice(1, 2).reverse().toString().charAt(0);
console.log(x)