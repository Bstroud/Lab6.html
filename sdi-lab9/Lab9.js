//Brandyn Stroud
//SDI Lab 9
//Number and Date Objects
//5-23-2015







////Problem 1
//
////global variables
//var NumString;
//
////function
//function number(theNumber) {
//
//    var num = 3.4143;
//    var n = num.toPrecision(4);
//
//
//    console.log("Answer equals " + n);
//
//}
//
//
//
////main code
//number();




//// Problem 2
//
////global variable
//var shoeSize;
//
//// function
//
//function size(numberSize){
//
//    var lengthOfFoot = prompt("Enter your shoe size: ");
//
//    for (i = 0; i < lengthOfFoot.length; i++){
//        if (lengthOfFoot[i] > 0 ){
//            console.log("Thanks you for your submission");
//        } else {
//            console.log("Please enter a number.")
//        }
//    }
//}
//
//size();

//Problem 3

//global variable
var theDate;

//function
function myDate(argDate){

    var today = "5/23/2015";
console.log("today is " + today);


    var newDate = new Date(2018, 5, 6);
    var olderDate = new Date(today);

    //console.log(newDate);
    //console.log(olderDate);

    dateDiff = newDate - olderDate;

    dateDiff = Math.abs(newDate) - Math.abs(olderDate);

    dateDiff = Math.abs(dateDiff / 1000 / 60 / 60 / 60 / 24);

    console.log("The difference in the dates is " + dateDiff);

}

myDate();