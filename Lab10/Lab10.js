/**
 * Created by brandynstroud1 on 5/26/15.
 */

//Brandyn Stroud
//SDI Lab 10
//Problem-Solving
//5-26-2015

//global var
var numArray = Math.random();
var returnedRandom;

//function
function randomNum(numbers) {

//local var

    numString = ["21", " 3", " 17", " 18", " 12"];

    var numbers = prompt("Enter your lottery number.");

    if (numString == numbers) {

        console.log("Congratulations!!! You're a millionaire.")

    }else{

        if (numString != numbers) {

            console.log("Loser!")
        }
    }

}




//main code
returnedRandom = randomNum(numArray);
