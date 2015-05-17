/**
 * Created by brandynstroud1 on 5/16/15.
 */

//// Arrays & Functions
//
////functions
//
////global variable
//
//var returnedAverage;
//
//function myAverageFunction() {
//
//    //local variables
//
//    var average=0;
//    var addNum=0;
//    var numberArray=[5, 6, 12, 14, 23, 35, 50];
//
//    // for loop to loop through the elements of the array
//
//    for (var i=0; i< numberArray.length; i++){
//
//        addNum += numberArray[i];
//
//    }
//    //average of the total
//    average = addNum / numberArray.length;
//
//    //return the final average
//    return Math.round(average);
//}
//
//returnedAverage = myAverageFunction();
//
//console.log("The average is " + returnedAverage + ".");

























//function myArray() {
    var pirateNames = ["Blackbeard", "Captain Kidd", "Captain Morgan", "Captain Jack Sparrow"];

    for (var i = 0; i = pirateNames.length; i++){

        if (pirateNames[i] === "Captain Morgan") {
            console.log(pirateNames[i] + "is my favorite pirate.")
        }
    }
    console.log("The length of the array is " + pirateNames.length);

    pirateNames.push("Barbosa,", "Black bart", "Davey Jones");

    console.log(pirateNames);





//myArray();




























////alert("JAVASCRIPT WORKS!");
//
//// global variables
//var num1;
//var num2;
//var operation;
//var finalAnswer;
//
//// math functions
//function add(add1,add2) {
//    return add1 + add2;
//
//};
//
//function subtract(sub1, sub2) {
//    return sub1 - sub2;
//
//};
//
//function multiply(multi1, multi2){
//    return multi1 * multi2;
//
//};
//
//function division(div1, div2) {
//    var outcome;
//    if (div2===0) {
//    outcome = "Error";
//
//    }else{
//        outcome = div1 / div2;
//    }
//
//    alert("here")
//    return outcome;
//
//};
//
//function finalOutput() {
//    console.log(num1 + " " + operation + " " + num2 + "=" + finalAnswer);
//}
//
//// main code
//num1 = parseFloat(prompt("Enter first number"));
//num2 = parseFloat(prompt("Enter second number"));
//operation = prompt("Enter the math operation you would like to perform", "+,-,*,/");
//
//if (operation==="+"){
//   finalAnswer = add(num1,num2)
//    finalOutput();
//
//
//}else if(operation==="-"){
//    finalAnswer = subtract(num1,num2);
//    finalOutput();
//
//
//}else if(operation==="*"){
//   finalAnswer =  multiply(num1,num2);
//    finalOutput();
//
//
//}else if(operation==="/"){
//  finalAnswer = division(num1,num2);
//    finalOutput();
//
//
//}else{
//    console.log("Try Again.");
//}
