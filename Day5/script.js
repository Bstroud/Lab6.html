/**
 * Created by brandynstroud1 on 5/14/15.
 */

//alert (Javascript works);

//global variables

var globalname ="Btwo";
var returnedValueVariable;
var checkedName;

// fun with functions

function nameFetcher() {

    var myName = prompt("Enter your name:", "Brandyn");

    return myName;

}

function nameChecker(nameArgument) {


    if (nameChecker === "Jamelle ") {
        trueName = true;
        return true;
    } else {
        trueName = false
    }

    return trueName;

}

// main code


returnedValueVariable = nameFetcher();

nameChecker(returnedValueVariable);

checkedName = nameChecker(returnedValueVariable);

console.log("nameChecker returned " + checkedName + ".");

if (checkedName === true) {
    console.log("Greetings and welcome.");
} else {
    console.log("Try Again!");
}



















//// loops
//
//var tireOne;
//var tireTwo;
//var tire3;
//var tire4;
//var TirePressure;
//var tireLocation;
//
//for (var i = 0; i < 4; i++) {
//
//    if (i === 0) {
//        //first time through the loop
//        tireOne = TirePressure
//    } else if (i === 1) {
//        //second time through the loop
//        tireTwo = TirePressure
//    } else if (i === 2) {
//        tire3 = TirePressure
//        tireLocation = "rear right"
//    }else {
//        tire4 = TirePressure
//        tireLocation = "rear left"
//    }
//
//
//    TirePressure = parseFloat(prompt("What is the tire pressure of the " + tireLocation + "tire?"));
//}
//
//if (tireOne === tireTwo && tire3 === tire4) {
//    console.log("Tire pressure is good");
//} else{
//    console.log("Check tires.");
//}
























//
//var fullPrice = 12;
//var discount = 5;
//var age;
//
//age = parseInt(prompt("Enter the customer's age: "));
//
//if (age >= 55 || age < 10) {
//    console.log("Your discount price is $" + (fullPrice - discount) + ".");
//} else {
//    console.log("No discount for you. Please pay $" + fullPrice + ".");
//}
//
//var frontRight = parseFloat(prompt("enter the PSI for the front right tire: "));
//var frontLeft = parseFloat(prompt("enter the PSI for the front left tire: " ));
//var rearRight = parseFloat(prompt("enter the PSI for the rear right tire: " ));
//var rearLeft = parseFloat(prompt("enter the PSI for the rear left tire: "));
//
//if (frontRight === frontLeft && rearRight === rearLeft) {
//    console.log("Your tire pressures are equal in the front and the rear.")
//} else {
//    console.log("Check your tires.")
//}