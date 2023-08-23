// Loop through arrays
const items = ['Book', 'table', 'chair', 'kite'];
const users = [{ name: 'brad' }, { name: 'Kate' }, { name: 'Steve' }];

for (let item of items) {
  console.log(item);
}

for (let user of users) {
  console.log(user);
}

//Loop over string
const str = 'Hello World';

for (const letter of str) {
  console.log(letter);
}

//Loop over Maps
const map = new Map();
map.set('name', 'Jhon');
map.set('age', 30);

for (const [key, value] of map) {
  console.log(key, value);
}
