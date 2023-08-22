//la sentenciaif funciona igual que en los otros lenguajes de programacion

const x = 10, y = 20;

if (true){
    console.log('Esto se va a ejecutar');
}

if (y > x){
    console.log(`${y} es mayor que ${x}`);
}

if (y === x){
    console.log('Son numeros identicos');
} else {
    console.log('No son los mismos numeros');
}

//Forma corta de hacer un if
if (true) console.log('#1'), console.log('Okey');