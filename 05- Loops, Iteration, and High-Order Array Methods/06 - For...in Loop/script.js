const colorObj = {
  color1: 'red',
  color2: 'blue',
  color3: 'orange',
  color1: 'green',
};

for (const key in colorObj) {
  console.log(key, colorObj[key]);
}

const coloArr = ['red', 'blue', 'yellow', 'green'];

for (const key in coloArr) {
  console.log(coloArr[key]);
}
