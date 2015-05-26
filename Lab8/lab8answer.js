/**
 * Created by brandynstroud1 on 5/23/15.
 */

////Brandyn Stroud
////SDI
////5-22-2015
////Lab8 Answer

//date object

function goodDates() {

    var myDate = "5/23/2015";

    console.log(myDate);

    var newDate = new Date(2015, 4, 32);
    var secondDate = new Date(myDate);


    console.log(newDate);
    console.log(secondDate);

    dateDiff = newDate - secondDate;

    dateDiff = Math.abs(dateDiff / 1000/ 60 / 60 / 24);

    console.log(dateDiff);
}


function mathMethods(argPrompt){

    while (isNaN(argPrompt)){

        argPrompt = prompt("Enter a number: ");
    }

    var newAge = parseInt(argPrompt);

    console.log(newAge);
}



//main code
goodDates();



//var myPrompt = prompt("Enter your age:" );
//
//mathMethods(myPrompt);
//


































////global variable
//var myEmail = "Bstroud@fullsail.edu";
//var emailTrueOrFalse;
//var returnedString;
//var stringList = "a, b, c, d";
//var first = ",";
//var second = "/";
////problem function
////first function: check an email address
//function checkEmail(argemail) {
//
//    var goodEmail = false;
//    var atSymbol = argemail.indexOf("@");
//    var dotSymbol = argemail.indexOf(".");
//    var noSpace = argemail.indexOf(" ");
//    var lastAt = argemail.lastIndexOf("@");
//
//    //checking for @ symbol
//    if (atSymbol === lastAt && atSymbol != -1) {
//
//        goodEmail = true;
//
//
//    } else {
//
//        goodEmail = false;
//    }
//
//    if (dotSymbol > -1 && dotSymbol > atSymbol) {
//
//        goodEmail = true
//    } else {
//
//        goodEmail = false
//    }
//
//    if (noSpace == -1) {
//
//        goodEmail = true
//    } else{
//
//        goodEmail = false
//    }
//
//
//    return goodEmail
//
//}
//
//
//
////Problem 2
////split a string at a specified seperator and replace it with a new seperator
//function stringSep(oldString, firstSep, newSep) {
//
//    var newString = "";
//
//    for (var i = 0; i < oldString.length; i++) {
//
//        newString = oldString.replace(",", "/");
//
//        console.log(oldString);
//
//    }
//
//
//    return oldString;
//
//}
////main code
////emailTrueOrFalse = checkEmail(myEmail);
////
////console.log("It is " + emailTrueOrFalse + " that this is valid.");
//returnedString = stringSep(stringList, first, second);