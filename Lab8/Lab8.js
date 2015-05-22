/**
 * Created by brandynstroud1 on 5/21/15.
 */

//Brandyn Stroud
//5-21-2015
//SDI Lab 8
//Working with Strings

////global variable
//var myEmail = "b2stroud@fullsail.iii";
//returnedString;
////function
//function charAtFunction(emailArg) {
//
//    //local variables
//    var atSymbol = emailArg.indexOf("@");
//    var dot = emailArg.lastIndexOf(".");
//    var space = emailArg.indexOf(" ");
//    var atSymbolCheck = emailArg.lastIndexOf("@");
//    var correct;
//
//    //if else
//
//    if ((atSymbol >= 0) && (space === -1) && (dot >= 0) && (dot > atSymbol) && (atSymbolCheck == atSymbol)) {
//        correct = "Email is correct"
//
//    }else{
//
//        correct = "Email is correct"
//
//    }
//
//    //return
//    return correct
//}
//
////main code
//var returnedString = charAtFunction(myEmail);
//console.log(returnedString = myEmail);

//global variable
var letterArray = ["a b c d"];

//function

function splString(strLetters, sectionOff) {

    var arrayString = strLetters.split(sectionOff);

    console.log("The string is " + strLetters);
    return arrayString;

}

var space = " ";

splString(letterArray, space);