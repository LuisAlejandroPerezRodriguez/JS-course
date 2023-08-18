const x = 100;//Global scope

console.log(x, 'in global');

function run(){
    console.log(x, 'in a fuction');
}

run();

if(true){
    console.log(x, 'in block');
}

function add(){
    const y = 50; //Funtion scope
    const x = 1; //Sobre escibiendo la x
    console.log(y+x);
}
add();