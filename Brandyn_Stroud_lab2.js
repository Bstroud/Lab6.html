/**
 * Created by brandynstroud1 on 5/9/15.
 *
 Brandyn Stroud
 SDI 1505
 Lab 2
 Variables and Outputs
 */

// variables
var myName = "Brandyn Stroud";
var myAge = 21;
var myJob = "\"Student\"";
var employed = false;
var numOfYears = 0;

// Initial outputs
console.log("Hello my name is " + myName);
console.log("I am " + myAge);
console.log("I am a " + myJob);
console.log("I am " + employed);

employed = confirm("Are you still employed?\nClick OK for Yes, or Cancel for No.");
numOfYears = prompt("How many years have you aged? Please enter a number.");

// cast the string value as a number
numOfYears = parseFloat(numOfYears);

console.log("It's " + employed + "that I'm still employed.");
console.log("I am now " + myAge + numOfYears ".");