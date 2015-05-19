/**
 * Created by brandynstroud1 on 5/19/15.
 */

//alert("JavaScript Works.");

// global variable
var numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
var returnedArray = [];
var userPrompt;


userPrompt = prompt("Enter 'odd' to return odd numbers or 'even' to return even numbers");

while (userPrompt != "odd" && userPrompt != "even") {

    userPrompt = prompt("Hey stupid! Enter 'odd' or 'even'");
}


//function
function evenArray(argArray, oddOrEven) {

    //local variable
    var newArray = [];
    var modNum;
    var zeroOrOne;

    if (oddOrEven === "odd") {
        zeroOrOne = 1;

    }else{
        zeroOrOne = 0
    }

    for (var i = 0; i < argArray.length; i++) {

        modNum = argArray[i] % 2;

        if (modNum === zeroOrOne) {

            newArray.push(argArray[i]);
        }
    }

    return newArray;
}


//main code
returnedArray = evenArray(numberArray,userPrompt);

console.log("the " + userPrompt + " numbers array is " + returnedArray);




































////Lab6 review
//
////function
//function authorFunction(){
//
//    //local arrays
//    var authors = ["Charles Dickens", "William Shakespeare", "Mark Twain", "Hunter S. Thomson"];
//    var titles = [ "Oliver Twist", "Hamlet", "Tom Sawyer", "Fear and Loathing in Las Vegas"];
//
//    // for loop to go through the array items
//    // output each element
//    for (var i = 0; i < authors.length; i++){
//
//        console.log(authors[i] + " wrote " + titles + ".");
//    }
//
//    //use an array method to alter the arrays
//    authors.push("Dorothy Allison");
//    titles.push("Bastard Out of Carolina");
//
//    //do a final output of the change
//    console.log("I added " + authors[i] + " who wrote " + titles[i] + ".")
//}
//
////main code
//authorFunction();