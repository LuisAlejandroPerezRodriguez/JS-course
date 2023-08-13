/* In this video, we will cover type coercion in JavaScript, which is the process of converting one data type to another. We will explore implicit and explicit type coercion and learn how to avoid common pitfalls when working with type coercion.
*/

let x;

x = 5 + '5';
x = 5 + Number('5');
x = 5 * '5';
x = 5 + null;
x = Number(null);
x = Number(true);
x = Number(false);
x = 5 + true;
x = 5 + false;
x = 5 + undefined;

console.log(x, typeof x);