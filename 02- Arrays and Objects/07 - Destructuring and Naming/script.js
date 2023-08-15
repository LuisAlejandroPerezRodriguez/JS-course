const fristName = 'Luis';
const lastName = 'Perez';
const age = 30;

const person = {
    fristName,
    lastName,
    age
};

// Destructuring
const todo = {
    id: 1,
    title: 'Take out trash',
    user: {
        name: 'Randy'
    }
}
const {id:todoId,title, user:{name}} = todo;

// Destructure arrays
const numbers = [23,67,33,48,54];
const [first, second, ...rest] = numbers;
console.log(todoId);
console.log(first,second, rest);
console.log(person);