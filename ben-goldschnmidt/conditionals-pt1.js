// Programming Basics: Conditionals
// These exercises are aimed at making you more comfortable with using conditionals as well as operators. Use "if" statements to complete the following exercises. Print your results to the console.


// QUESTION 1
console.log(" ")
console.log("QUESTION 1")
// Check if two given integer values are in the range 50 to 99 (this includes both 50 and 99). Print true if either of them are in the range.
// INPUT:
// integer 1
// integer 2

// OUTPUT:
// true - range is within(and including) 50 to 90 
// false - range is not within(and including) 50 to 90 


let inrange1;
let integer1 = 10;
let integer2 = 20;

if (((integer1 >= 50) && (integer1 <= 90)) || (integer2 >= 50) && (integer2 <= 90)) {
    inrange1 = true;
}
else {
    inrange1 = false;
}
console.log(inrange1);
// true



// QUESTION 2
console.log(" ")
console.log("QUESTION 2")
// Check if three given integer values are in the range 50 to 99 (inclusive). Print true if one or more of them are in the range.
// INPUT:
// integer 3
// integer 4
// integer 5

// OUTPUT:
// true - range is within(and including) 50 to 90 
// false - range is not within(and including) 50 to 90

let inrange2;
let integer3 = 30;
let integer4 = 40;
let integer5 = 50;

if (
    ((integer3 >= 50) && (integer3 <= 90)) ||
    ((integer4 >= 50) && (integer4 <= 90)) ||
    ((integer5 >= 50) && (integer5 <= 90))) {
    inrange2 = true;
}
else {
    inrange2 = false;
}
console.log(inrange2);




// QUESTION 3
console.log(" ")
console.log("QUESTION 3")
// Declare the variables a, b and c, and give them number values. Check which one out of the three variables has the largest value and print it to the console. Then change the values of the variables to see if your conditional still works.
// INPUT:
// variable a
// variable b
// variable c

// OUTPUT:
// true - range is within(and including) 50 to 90 
// false - range is not within(and including) 50 to 90

let result1;
let result2;
let result3;
let a = 10;
let b = 20;
let c = 30;

if (a > b) {
    result1 = "a has the biggest value";
}
else {
    result1 = "a is not bigger than b"
}
console.log(result1)
//

if (b > c) {
    result2 = "b has the biggest value";
}
else {
    result2 = "b is not bigger than c";
}
console.log(result2)
//

if (c > a) {
    result3 = "c has the biggest value";
}
else {
    result3 = "c is not bigger than a";
}
console.log(result3)
//




// QUESTION 4
console.log(" ")
console.log("QUESTION 4")
// Create a new string adding "Py" in front of a given string. If the given string begins with "Py" then print the original string.
// INPUT:
// givenString
// newString

// OUTPUT 
// if newString begins with PY, print- original string
// else, print- newString

let givenString1 = "as in Python?";
let newStr1 = "Py as in Python?";

if (givenString1.includes("Py")) {
    console.log(givenString1)
}
else {
    console.log("Given string does not begin with Py!")
};



// QUESTION 5
console.log(" ")
console.log("QUESTION 5")
// Calculate the sum of the two integers. If the sum is in the range 50 to 80, print 65, otherwise print 80.

// INPUT 
// 1st integer
// 2nd integer

// OUTPUT 
// if sum is within the range 50 --> 65, print 65
// else, print 80

let resultQ5;
let integerQ5_1 = 30;
let integerQ5_2 = 70;
let sumQ5 = integerQ5_1 + integerQ5_2;

if ((sumQ5 > 50) && (sumQ5 < 80)) {
    resultQ5 = "65";
}
else {
    resultQ5 = "80";
}
console.log(resultQ5)




// QUESTION 6
console.log(" ")
console.log("QUESTION 6")
// Check whether the sum of two integers is 8, or whether their difference is 8. If one of these is the case, print true.

// INPUT 
// 1st integer
// 2nd integer

// OUTPUT 
// if sum is 8, or difference is 8, print- true
// else, print- false

let resultQ6;
let integerQ6_1 = 4;
let integerQ6_2 = 4;
let sumQ6 = integerQ6_1 + integerQ6_2;
let difQ6 = integerQ6_1 - integerQ6_2;

if ((sumQ6 == 8) || (difQ6 == 8)) {
    resultQ6 = true;
}
else {
    resultQ6 = false;
}
console.log(resultQ6)
// true



// QUESTION 7
console.log(" ")
console.log("QUESTION 7")
// Check whether either one of two integers is 15, or if their sum is 15. If one of these is the case, print true.

// INPUT 
// 1st integer
// 2nd integer

// OUTPUT 
// if integerQ7_1 or integerQ7_2 is 15, or sum is 15 is true, print- true
// else, print false

let resultQ7;
let integerQ7_1 = 4;
let integerQ7_2 = 4;
let sumQ7 = integerQ7_1 + integerQ7_2;

if (((integerQ7_1 == 15) || (integerQ7_2 == 15)) || (sumQ7 == 15)) {
    resultQ7 = true;
}
else {
    resultQ7 = false;
}
console.log(resultQ7)



// QUESTION 8
console.log(" ")
console.log("QUESTION 8")
// Check whether one of two integers is a multiple of 7 or 11. If so, print true.

// INPUT 
// 1st integer
// 2nd integer

// OUTPUT 
// if 1 out of 2 integers == % 7 or % 11, if so print- true
// else, print- false

let resultQ8;
let integerQ8_1 = 100;
let integerQ8_2 = 221;

if (((integerQ8_1 % 7 === 0) || (integerQ8_1 % 11 === 0)) ||
    ((integerQ8_2 % 7 === 0) || (integerQ8_2 % 11 === 0))) {
    resultQ8 = true;
}
else {
    resultQ8 = false;
}
console.log(resultQ8)




// QUESTION 9
console.log(" ")
console.log("QUESTION 9")
// Calculate the sum of the two given integers. If the two values are the same, then print triple their sum.

// INPUT 
// 1st integer
// 2nd integer

// OUTPUT 
// if integerQ9_1 equals integerQ9_2, then print- sumQ9 x 3
// else, print- false

let resultQ9;
let integerQ9_1 = 100;
let integerQ9_2 = 50;
let sumQ9 = integerQ9_1 + integerQ9_2;

if (integerQ9_1 == integerQ9_2) {
    resultQ9 = sumQ9 * 3;
}
else {
    resultQ9 = "integerQ9_1 does not have the same value as integerQ9_2";
}
console.log(resultQ9);




// QUESTION 10
console.log(" ")
console.log("QUESTION 10")
// Calculate the difference between a specified number and 19. Print double the difference if the specified number is greater than 19.

// INPUT 
// specified number
// the number 19

// OUTPUT 
// if specified number > 19, print- 2 x (differences)
// else, print- "Specified number is not greater than 19!"

let resultQ10;
let integerQ10_1_specified = 18;
let integerQ10_2_given = 19;

if (integerQ10_1_specified > integerQ10_2_given) {
    let difQ10 = (integerQ10_1_specified - integerQ10_2_given);
    resultQ10 = difQ10 * 2;
}
else {
    resultQ10 = "Specified number is not greater than 19!";
}
console.log(resultQ10);




// QUESTION 11
console.log(" ")
console.log("QUESTION 11")
// BONUS CHALLENGE: Play around with each of your results, i.e., make sure they are dynamic to different inputs; is there a more efficient way of writing your code?; etc.


// for QUESTION 3 --> nested version

let resultQ3_1;
let resultQ3_2;
let resultQ3_3;
let a_1 = 10;
let b_1 = 20;
let c_1 = 30;

if (a_1 > b_1) {
    resultQ3_1 = "a has the biggest value";
}
else {
    resultQ3_1 = "a is not bigger than b";
    if (b_1 > c_1) {
        resultQ3_2 = "b has the biggest value";
    }
    else {
        resultQ3_2 = "b is not bigger than c";
        if (c_1 > a_1) {
            resultQ3_3 = "c has the biggest value";
        }
        else {
            resultQ3_3 = "c is not bigger than a";
        }
    }
}
console.log(resultQ3_1)
//

console.log(resultQ3_2)
//

console.log(resultQ3_3)
//