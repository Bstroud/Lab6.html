/**
 * Created by brandynstroud1 on 5/22/15.
 */

var stringList = "1,2,3,4,5,6,7";
var sep1 = ",";
var sep2 = "/";

function replaceComma(list, seperator1, seperator2){

    var newString = list.replace(/,/g, seperator2);

    return newString;
}

console.log("These are numbers: " + replaceComma(stringList, sep1, sep2));





























//var email = "1234@yahoo.com";


//function emailCheck(passedEmail) {
//
//    var valid;
//
//    if (passedEmail.indexOf(".") !== -1 && passedEmail.indexOf("@")  !== -1) {
//
//        if (passedEmail.indexOf(" ") > 0 ) {
//            valid = false;
//        } else {
//            valid = true;
//        }
//
//    } else {
//
//        valid = false;
//
//    }
//
//    return valid;
//}
//
//console.log("The email address is valid: " + emailCheck(email));