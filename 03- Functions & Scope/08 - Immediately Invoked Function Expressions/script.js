(function (){
    const user = 'Luis';
    console.log(user);
    const hello = () => console.log('Hello from te IIFE');
    hello(); 
})

(function (name) {
console.log('Hello' + name);
})('Shawn');