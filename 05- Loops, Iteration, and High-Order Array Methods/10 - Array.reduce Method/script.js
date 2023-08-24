const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sum = number.reduce(function (acumulator, currentValue) {
  return acumulator + currentValue;
}, 0);

const sum2 = number.reduce((acc, cur) => acc + cur, 0);

// Shopping cart example (objects)
const cart = [
  { id: 1, name: 'Product 1', price: 130 },
  { id: 2, name: 'Product 2', price: 150 },
  { id: 3, name: 'Product 3', price: 200 },
];

const total = cart.reduce(function (acc, product) {
  return acc + product.price;
}, 0);

console.log(total);
