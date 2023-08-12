// 1. operadores aritmeticos
let x;
x = 5 + 2;
x = 5 - 2;
x = 5 * 2;
x = 5 / 2;
x = 5 % 2;

// 2. Concatenacion
x = 'hello' + ' World';

//3. Exponente
x = 2 ** 3; //--> 2^3

//4. Incremento
x = 1;
//x++;
x = x + 1;

//4. Decremento
x = 2;
//x--;
x = x - 1;

//5. Assigment Operators
x = 10;
x += 5; //--> x=x+5
x -= 5;
x *= 5;
x /= 5;
x %= 5;
x **= 5;

//6. Comparison Operators

x = 2 == '2'; //2 es igual a 2 (Este operador no evalua si son el mismo tipo de variable.)
x = 2 === 2; // 2 es igual a 2 (este operador evalua si es el mismo tipo de variable.)
x = 2 != 2; //2 no es igual a 2 (Este operador no evalua si son el mismo tipo de variable.)
x = 2 !== 2; // 2 no es igual a 2 (este operador evalua si es el mismo tipo de variable.)

x = 10 > 5;
x = 10 < 5;
x = 10 >= 5;
x = 10 <= 5;

console.log(x);

