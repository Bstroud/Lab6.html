/**
 * Created by brandynstroud1 on 5/21/15.
 */

//alert("js works!");

// global variable
var ourString;
var returnString;

//functions
function intialCaps(argString) {

    //local varables
    var newString;
    var strArray;
    var currentWord;
    var newWord = " ";

    //Uppercase everything
    newString = argString.toUpperCase();

    strArray = newString.split(" ");

    for (var each in strArray) {

        currentWord = strArray[each];

        for (var char in strArray[each]) {


            if (char != 0){

                currentChar = currentWord[char].toLowerCase();
                newWord = newWord + currentChar;

            } else {
                newWord = newWord + currentWord[0];
            }


        }

        newWord = newWord + " ";
    }

    return newWord;


}

ourString = prompt("Enter a string to initial cap: ", "i am batman");

returnString = intialCaps(ourString);

console.log(returnString);