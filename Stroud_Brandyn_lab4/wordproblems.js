/**
 * Created by brandynstroud1 on 5/12/15.
 */

// Word Problem 1

// variables
var movieTicket = 12.00;
var discountTicket = 5.00;
var age;

// prompt for age

var age = prompt("Enter your age: ");

if(age <= 10 || age >= 55){
    movieTicket = movieTicket - discountTicket
    console.log("The price you have to pay " + discountTicket +(" dollars."));
}
else {
    console.log("Sorry you don't qualify for a discount. Please pay the regular price. ");
}

console.log("Have a nice day!");

// Word Problem 2

var tire1;
var tire2;
var tire3;
var tire4;

// prompts

var tire1 = prompt("What is the tire pressure for the 1st tire?");
var tire2 = prompt("What is the tire pressure for the 2nd tire?");
var tire3 = prompt("What is the tire pressure for the 3rd tire?");
var tire4 = prompt("What is the the tire pressure for the 4th tire?");

if (tire1 === tire2 || tire3 === tire4) {
    console.log("Congrats! Your tires are even!");
} else {
    console.log("Evenly pressurize your tires.")
}
