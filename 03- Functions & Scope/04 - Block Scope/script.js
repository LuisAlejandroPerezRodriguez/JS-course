//Los bloques son conocidos como if, for,where and so on...

let x = 100;

if (true){
    console.log(x);
    const n = 200; //Esto es un block scope
    console.log(n); 
}

//No puedo acceder des afuera al block scope 
//console.log(n); // Me sale un error de que no esta defenido 

for (let i = 0; i <= 10; i++) {
    console.log(i);
} 

//consolge.log(i); //I no esta definido

if (true) {
    const a = 500;
    let b = 600;
    var c = 700;
}

console.log(c); //Puedo acceder a la variable definida en el bloque
// Pero no es lo recomendable