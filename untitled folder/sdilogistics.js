/**
 * Created by brandynstroud1 on 5/12/15.
 */
//  NAME:  Brandyn Stroud
//  DATE:  5/12/2015
// Scalable Data Infrastructures
// Day 4 Lab
//  Assignment 1
//  Using logical operators

var p;
var q;
var r;

p = confirm("First value:  Click OK for true or Cancel for false.");
q = confirm("Second value:  Click OK for true or Cancel for false.");

if (p && q) {
    console.log("With " + p + " and " + q + ", the outcome is TRUE.");
} else {
    console.log("With " + p + " and " + q + ", the outcome is FALSE.");
};