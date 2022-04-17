var number;

do{
    try{
    number = parseInt(prompt());// NaN
    if(isNaN(number)){
        throw new Error("Please enter a valid Integer");
    }
}catch(error){
    console.log(error);
}
}while(isNaN(number));



function Factorial(number){
    if(number <= 1){
        return 1;
    }

    return number * Factorial(number - 1);
}

let total = Factorial(number);

console.log(total);
