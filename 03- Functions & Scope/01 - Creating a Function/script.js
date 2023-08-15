function sayHello(){
    console.log('Hello World');
}

sayHello(); //Llamando de la funcion para que se ejecute

function add(num1, num2){ //Se definieron 2 parametros en la funcoin
    console.log(num1 + num2);
}

add(5,10); //Le estamos pasando los argumentos a la funcion

function subtract(num1, num2){
    return num1 - num2; //con el return estamos devolviendo un valor y no se va a ejecutar lo que sigue
    console.log('Esto no se va a ejecutar');
}

// Para poder obtener el valor lo podemos asignar a una variable
const result = subtract(10,2);

console.log(result, 'O tambien podemos decir', subtract(20, 5));