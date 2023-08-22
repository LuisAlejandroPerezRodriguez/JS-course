// --> Challenge #1

/*
function getCelsius(Temp) {
    return ((Temp - 32) * 5) / 9;
} */

//Funcion flecha de F a C
const getCelsius = Temp => ((Temp - 32) * 5) / 9;
console.log(`The temperature is ${getCelsius(50)} \xB0C`);

//Challenge 2
const minMax = (Numbers) => {
 return Result = {
    Min: Math.min(...Numbers),
    Max: Math.max(...Numbers)
 };
}

console.log(minMax([1, 2, 3, 4, 5, 6]));

//--> Challenge 3
( function (length,width) {
console.log('The fuction is working');    
console.log(`The area of a rectangle with a length of ${length} and a width of ${width} is ${length * width}.`);
})(20,5);