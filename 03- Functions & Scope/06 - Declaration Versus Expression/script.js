console.log(addDollarSign(100));

//Function declaration
function addDollarSign(value){
    return '$' + value;
}

//Fuction expression
//console.log(addPlusSign(20)); //No puedo hacerlo porque tengo que declararlo
const addPlusSign = function (value){
    return '+' + value;
};

console.log(addPlusSign(20));