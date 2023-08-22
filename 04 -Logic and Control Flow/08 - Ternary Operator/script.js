const age = 20;

//Using an if statement
if (age >= 18) {
    console.log('You can vote!');
} else {
    console.log('You can not vote');
}

// Using a ternary operator
age >= 18 ? console.log('You can vote') : console.log('You can not vote!');
// ?: es como el if, : es el else 

// Assigning a conditional value to a variable
const canVote = age >= 18 ? true : false;
const canVote2 = age >= 18 ? 'You can vote' : 'You can not vote';

console.log(canVote);
console.log(canVote2);

const auth = true;

// Multiple statements
const redirect = auth ? (alert('Welcome to the dashbaord'), '/dashboard') : (alert ('Acess Denied'), '/Login');
console.log(redirect);