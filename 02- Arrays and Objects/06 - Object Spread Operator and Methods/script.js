let x;

const obj1 = {a: 1, b:2};
const obj2 = {c: 3, d: 4};

const obj3 = {...obj1, ...obj2}; //Asignando las propiedades de obj1 y 2 a obj3
const obj4 = Object.assign({}, obj1, obj2);//Lo mismo que arriba

const arr = [
    {id : 1, name: 'Buy milk'},
    {id : 2, name: 'take out trash'},
    {id : 3, name: 'Pickup kids'}
];

x = arr[0].name;

x = Object.keys(obj1); //Las propiedades del objeto indicado se vuelven elementos de un arreglo
x = Object.keys(obj3).length
x = Object.values(obj3);// Un arreglo con los valores de las propiedades del objeto
x = Object.entries(obj3);// Crea un arreglo de las keys del objeto que a su vez tienen arreglos con los valores de las keys
x = obj3.hasOwnProperty('age');
console.log(x);