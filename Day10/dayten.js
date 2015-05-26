/**
 * Created by brandynstroud1 on 5/26/15.
 */

//global var
var numArray = [3, 6, 7, 9, 23, 42, 22, 50];
var currentNum = 21;
var returnedNum;



//function
function findNumber(argArray, argNumber) {

    //local var
    var nextGreatest = 0;

    for (var i = 0; i < argArray.length; i++){

        console.log(argArray[i]);
    }

}
//main code
returnedNum = findNumber(numArray, currentNum);
console.log("The next highest number is " + returnedNum);





















////global var
//var returnedNumber;
//
//
////function
//function yearsBetween(){
//
//    //local var
//    var yearEntered = parseInt(prompt("What year would you like to use: "));
//
//    var today = new Date();
//
//    today = today.getFullYear();
//
//    console.log(today);
//
//    var difference = today - yearEntered;
//
//return difference
//}
//
//
////main code
//returnedNumber = yearsBetween();
//console.log("THe difference in years is " + returnedNumber);





















////global variable
//var firstNumber = prompt("Please enter a number: ");
//var returnedNumber;
//
//var numToFormat = prompt("Enter a number to format: ");
//var numOfDecimals = prompt("Enter the number of decimals places:");
//
//var dateOne = new Date("5/23/2015");
//var dateTwo = new Date("5/23/2112");
//var HOrD ;
//
////problem function
//function decFormat(argNumber, decPlaces){
//
//    return argNumber.toFixed(decPlaces);
//}
//
//
//
//
//
////problem 2
//function convertedNumber(argNumber) {
//
//    if (isNaN(argNumber)) {
//
//        argNumber = prompt("No, I said enter a number: ");
//
//    }
//
//    return parseFloat(argNumber);
//
//}
//
//
////problem 3
//function dateDiff(firstDate, secondDate, hoursOrDays){
//
//    var difference = Math.abs(firstDate - secondDate);
//
//    if (hoursOrDays === "Hours") {
//
//        difference =Math.abs(difference/1000/60/60);
//    }else{
//        difference = difference/1000/60/60/24;
//
//    }
//
//    return difference
//
//
//}
//////main code
//returnedNumber = convertedNumber(firstNumber);
//console.log("The returned number is ", returnedNumber );
//console.log("The formatted number is ", returnedNumber);
//returnedNumber = dateDiff(dateOne, dateTwo, HOrD);
//
//console.log( "The difference in " + HOrD + " between " + dateOne.toDateString() + " and " + dateTwo.toDateString());
//
