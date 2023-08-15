//Object are a common data stucture that holds key/value pairs

let x;

const person = {
    name: 'Luis Perez',
    age: 30,
    isAdmin: true,
    address: {
        street: '123 Main st',
        city: 'Boston',
        state: 'MA'
    },
    hobbies: ['Music', 'Sports']
};

//Formas para acceder a las propiedades 
x = person.name;// Me da el nombre de mi objeto persona
x = ['age'];
x = person.address.city;
x = person.hobbies[1];

//Modificar el valor
person.name = 'Juanito Perez'
person.isAdmin = false;
x = person;

//Agregar valores
person.hasChildren = false;

//Funciones
person.greet = function () {
    console.log(`Hello my name is ${this.name}`);
};

person.greet();

x = person;
console.log(x);