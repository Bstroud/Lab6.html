/**
 * Created by brandynstroud1 on 5/9/15.
 */

// alert("Javascript works");

//iniial variable

var myName = Stroud
var newName = "";
var lastName = Stroud
// prompt for user
newName = prompt('Please enter your name:');

// Create our first conditional
if (newName === myName) {

    lastName = prompt('Please enter your last name:');

    if (lastName === "Stroud") {

        // if first name is correct and last name is correct
        console.log('Greetings, ' + myName + lastName);

    } else {

        // if first name is correct and last name is incorrect
        console.log("You came to the wrong hood!");

    }

} else {
    //if first name is wrong
    console.log("Run yo pockets, bruh!");

    // this is the code that runs if the conditional is true
    console.log('Greetings, ' = myName);
} else {
    // this code runs if the conditional is false
    console.log("Intruder alert!");

}

// new variable for data type tests
var myNumber = 0;
var secondnumber = 5;

myNumber = prompt('Enter the number 5.');

if (myNumber === secondnumber) {
    console.log('They match exactly!');


}