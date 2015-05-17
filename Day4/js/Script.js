/**
 * Created by brandynstroud1 on 5/12/15.
 *
 */



// 99 bottles of Soda on the wall

for (var pop = 99; pop >=1; pop--) {
    if (pop === 1) {
        console.log(pop + " bottles of pop on the wall");
        console.log(pop + " bottles of pop!");
    } else {
        console.log(pop + " bottles of pop on the wall");
        console.log(pop + " bottles of pop!");
    }

    console.log("Take one down, pass it around,");

    if (pop > 2) {
        console.log((pop - 1) + " bottles of pop on the wall.");
    } else if (pop == 1) {

        console.log((pop - 1) + " bottles of pop on the wall.");

    } else {
        console.log((pop - 1) + " bottle of pop on the wall.")

    }
    console.log((pop - 1) + " bottle of pop on the wall.");

    console.log(" ");

}

























//
//alert("JavaScript Works!");
//
//// variables
//// one for first name
//// one for last name
//var firstName = "Brandyn",
//    lastName = "Stroud",
//    yourFirstName,
//    yourLastName;
//
//
//// prompts
//// ask the user for first name
//// ask the user for last name
//yourFirstName = prompt("Enter a name:", "Type your first name here");
//yourLastName = prompt("Enter a name:", "Type your last name here");
//
//if (yourFirstName === firstName || yourLastName === lastName) {
//    console.log("You are correct, sir!");
//
//} else {
//    console.log("Try Again.")
//}