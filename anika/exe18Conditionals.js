// *******************EXERCISE CONDITIONALS *************************

// # Programming Basics: Conditionals

// These exercises are aimed at making you more comfortable with using conditionals as well as operators. Use "if" statements to complete the following exercises. Print your results to the console.

// 1. Check if two given integer values are in the range 50 to 99 (this includes both 50 and 99). Print true if either of them are in the range.

// If one given integer value OR other given integer value is in the range of
// 50 to 99, print true.
// Inputs:
// integer value 1
// integer value 2

let Q1Integer = 84;
let Q1Integer2 = 197;

if (
  (Q1Integer >= 50 && Q1Integer <= 99) ||
  (Q1Integer2 >= 50 && Q1Integer2 <= 99)
) {
  console.log(true);
} // true

// 2. Check if three given integer values are in the range 50 to 99 (inclusive). Print true if one or more of them are in the range.

// If one of three given integer values is in the range of
// 50 to 99, print true.

// Inputs:
// integer value 1
// integer value 2
// integer value 3

// Output:
// true

let Q2Integer = 84;
let Q2Integer2 = 197;
let Q2Integer3 = 55;

if (
  (Q2Integer >= 50 && Q2Integer <= 99) ||
  (Q2Integer2 >= 50 && Q2Integer2 <= 99) ||
  (Q2Integer3 >= 50 && Q2Integer3 <= 99)
) {
  console.log(true);
} // true

// 3. Declare the variables a, b and c, and give them number values. Check which one out of the three variables has the largest value and print it to the console. Then change the values of the variables to see if your conditional still works.

// let a = 22;
// let b = 4;
// let c = 8;

let a = 2;
let b = 44;
let c = 88;

// If a is greater than b and c, print "a is largest value".
// If b is greater than a and c, print "b is largest value".
// If c is greater than a and b, print "c is largest value".
// Input:
// a
// b
// c

if (a > b && a > c) {
  console.log("a is largest value");
}
if (b > a && b > c) {
  console.log("b is largest value");
}
if (c > a && c > b) {
  console.log("c is largest value");
}
// c is largest value

// 4. Create a new string adding "Py" in front of a given string. If the given string begins with "Py" then print the original string.

let varQ4Given = "nobody knows";

let varQ4New = varQ4Given.replace("n", "Pyn");
console.log(varQ4New); // Pynobody knows

// 5. Calculate the sum of the two integers. If the sum is in the range 50 to 80, print 65, otherwise print 80.

// If integer value 1 + integer value 2 is in the range of 50 to 80, print 65.
// Else, print 80.

//Inputs:
// integer value 1
// integer value 2
// Outputs:
// 65
// 80

if (Q1Integer + Q1Integer2 >= 50 && Q1Integer + Q1Integer2 <= 80) {
  console.log(65);
} else {
  console.log(80);
}
// 80

// 6. Check whether the sum of two integers is 8, or whether their difference is 8. If one of these is the case, print true.

let Q6 = Math.floor(Math.random() * 10);
let Q62 = Math.floor(Math.random() * 10);
console.log(Q6); // 2
console.log(Q62); // 5

let varQ6 = 5;
let varQ62 = 2;

// If varQ6 + varQ62 = 8 OR if difference between the two is 8, print true.
// Input:
// integer values 1
// integer value 2
// Output:
// true

let varQ6Bigger;
let varQ6Smaller;

if (varQ6 > varQ62) {
  varQ6Bigger = varQ6;
} else {
  varQ6Bigger = varQ62;
}
if (varQ6 < varQ62) {
  varQ6Smaller = varQ6;
} else {
  varQ6Smaller = varQ62;
}
if (varQ6 + varQ62 === 8 || varQ6Bigger - varQ6Smaller === 8) {
  console.log(true);
}

console.log(`Bigger number is ${varQ6Bigger}`);
console.log(`Smaller number is ${varQ6Smaller}`);

// 7. Check whether either one of two integers is 15, or if their sum is 15. If one of these is the case, print true.

let Q7 = Math.floor(Math.random() * 10);
let Q72 = Math.floor(Math.random() * 10);
console.log(Q7); // 1
console.log(Q72); // 6

let Q7Integer = 1;
let Q72Integer = 6;

// If Q7Integer OR Q72Integer is 15 OR if the Q7Integer + Q72Integer is 15,
// print true.
// Input:
// integer values 1
// integer value 2
// Output:
// true

if (Q7Integer === 15 || Q72Integer === 15 || Q7Integer + Q72Integer === 15) {
  console.log(true);
}

// 8. Check whether one of two integers is a multiple of 7 or 11. If so, print true.

let Q8Random = Math.floor(Math.random() * 100);
let Q82Random = Math.floor(Math.random() * 100);
console.log(Q8Random); // 98
console.log(Q82Random); // 20

let Q8 = 98;
let Q82 = 20;

// If Q8 % 7 === 0 OR Q8 % 11 === 0 OR Q82 % 7 === 0 OR Q82 % 11 === 0,
// print true.
// Input:
// integer values 1
// integer value 2
// Output:
// true

if (Q8 % 7 === 0 || Q8 % 11 === 0 || Q82 % 7 === 0 || Q82 % 11 === 0) {
  console.log(true);
}
// true

// 9. Calculate the sum of the two given integers. If the two values are the same, then print triple their sum.

let Q9 = 98;
let Q92 = 20;

// If Q9 === Q92, print (Q9 + Q92) * 3
// Input:
// sum of two integers
// Output:
// sum * 3

let sum = Q9 + Q92;

if (Q9 === Q92) {
  console.log(sum * 3);
}

// 10. Calculate the difference between a specified number and 19. Print double the difference if the specified number is greater than 19.

let Q10Random = Math.floor(Math.random() * 100);
console.log(Q10Random); // 86

let diff = 86 - 19;

// If 86 > 19, print diff * 2

if (86 > 19) {
  console.log(diff * 2);
} // 134
