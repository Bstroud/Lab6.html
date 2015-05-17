/**
 * Created by brandynstroud1 on 5/14/15.
 */


// variable

var numbOne;
var numbTwo;
var numbReturn;
var add;
var sub;
var multi;
var div;
var opValue;

//Functions

//Operation

function operation(operation){

    var op = " ";
    operation = prompt("Choose your operation. Add +, Subtract -, Multiply *, Divide /.");
    op = operation;
    return op;

}

//Addition

function addition(firstNumb,secondNumb){
    var numb1;
    var numb2;
    numb1 = firstNumb;
    numb2 = secondNumb;
    numbReturn = (numb1 + numb2);
    return numbReturn
}

//Subtraction

function subtraction(firstNumb,secondNumb){
    var numb1;
    var numb2;
    numb1 = firstNumb;
    numb2 = secondNumb;
    numbReturn = (numb1 - numb2);
    return numbReturn
}

//Multiplication

function multiplication(firstNumb,secondNumb){
    var numb1;
    var numb2;
    numb1 = firstNumb;
    numb2 = secondNumb;
    numbReturn = (numb1 * numb2);
    return numbReturn
}

//Division

function division(firstNumb,secondNumb){
    var numb1;
    var numb2;
    numb1 = firstNumb;
    numb2 = secondNumb;
    numbReturn = (numb1 / numb2);
    return numbReturn
}


//Main code

opValue = operation();

if((opValue === "subtract")||(opValue ==="-")) {

    numbOne = parseFloat(prompt("Enter your first number:"));
    numbTwo = parseFloat(prompt("Enter your second number:"));
    sub = subtraction(firstNum,secondNum);
    console.log("The answer is :");
}else{
    console.log("This is incorrect, try again.")

} if((opValue === "+")||(opValue === "add")){
    numbOne = parseFloat(prompt("Enter your first number:"));
    numbTwo = parseFloat(prompt("Enter your second number:"));
    add = addition(firstNum,secondNum);
    console.log("The answer is :");

}else if((opValue === "*")||(opValue === "multiply")){
    numbOne = parseFloat(prompt("Enter your first number:"));
    numbTwo = parseFloat(prompt("Enter your second number:"));
    multi = multiplication(firstNum,secondNum);
    console.log("The answer is :");

}else if((opValue === "/")||(opValue === "divide")){
    numbOne = parseFloat(prompt("Enter your first number:"));
    numbTwo = parseFloat(prompt("Enter your second number:"));
    div = division(firstNum,secondNum);
    console.log("The answer is :");
}else if((firstNum > 0) && (secondNum > 0)){
    console.log("The answer is :");
}else if((firstNum === 0) && (secondNum === 0)){
    console.log("The answer is :");
}else if(numbTwo === 0){
    console.log("Can't divide by 0.");
    console.log("The answer is :");
}
