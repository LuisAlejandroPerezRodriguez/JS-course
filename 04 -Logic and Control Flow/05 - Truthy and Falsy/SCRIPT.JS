/* Falsy Vlues o valores que son falsos:
- false
- 0
- "" or '' {Empty string}
- null
- undefined
-NaN
*/

/* Truthy Values:
- Everyting else that is not falsy
- true
- '0' (0 in a string)
- ' ' (space in a string)
- 'false' (false in a string)
- [] (empty array)
- {} (empty object)
- function () {} (empty fuction)
*/

// Truthy and falsy caveats
const children = 3;

if (!isNaN(children)) {
    console.log(`You have ${children} children`);
} else {
    console.log(`Please enter number of children`);
}

// Checking for ampty arrays
const post = ['Post One'];

if  (post.length > 0) {
    console.log('List Post');
} else {
    console.log('No post To List');
}

// Cheking for empty objects
const user = {
    name: 'Brad'
};

if (Object.keys(user).length > 0){
    console.log('List User');
} else {
    console.log('No user');
}

// Loose Equality (==)
console.log(false === 0);
console.log('' === 0);
console.log(null === undefined);