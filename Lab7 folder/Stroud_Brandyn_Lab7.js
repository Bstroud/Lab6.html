//alert("JavaScript works!");

//Brandyn Stroud
//SDI Lab 7
//Functions, Loops, and Arrays
//5-19-2015

//global variables

var array1 = [10, 6, 7, 34, 78, 9, 23];
var array2 = [25, 100, 4, 22, 16, 105, 2, 7];
var array3 = [2, 3, 4, 1, 10, 27, 32, 51, 6, 8, 42];
var numArrays = [array1, array2, array3];
var returnedArray;

//function bubbleSort(argArray) {
//
//    var num1,
//        num2,
//        holder;
//
//    //loops through the array
//    for (var newElement in argArray) {
//
//        for (var element in argArray) {
//
//            element = parseInt(element);
//
//            // assign array elements to variables
//            num1 = argArray[element];
//            num2 = argArray[element + 1];
//
//            //compare to see which is greater
//            if (num1 > num2) {
//
//                holder = num2;
//                argArray[element] = num2;
//                argArray[element + 1] = num1;
//            }
//
//            console.log(argArray);
//        }
//
//    }
//
//    return argArray;
//
//}

function bubbleSort(array) {

    var swapped;

    do {

        swapped = false;

        for (var i = 0; i < array.length - 1; i++) {

            if (array[i] > array[i+1]) {
                var temp = array[i];
                array[i] = array[i+1];
                array[i+1] = temp;
                swapped = true;

            }

        }


    } while (swapped);
    return array;
}

console.log(bubbleSort(array1));
console.log(bubbleSort(array2));
console.log(bubbleSort(array3));

//Main code
//for ( var each in numArrays) {
//
//
//    returnedArray = bubbleSort(numArrays[each]);
//
//    console.log("Array number " + each + " sorted is " + returnedArray);
//
//}

















////global variables
//
//var numberArray = [25, 100, 4, 22, 16, 105, 2, 7];
//var returnArray = [];
//var userPrompt;
//
//userPrompt= prompt("Type 'numbers' to view numbers.");
//
//while (userPrompt != "numbers" && userPrompt != "numbers") {
//
//    userPrompt = prompt("That isn't the 'numbers.' Please press the 'numbers.");
//}
//
//
//function arrayNumbers() {
//
//    console.log("These " + numberArray + " are numbers.");
//}