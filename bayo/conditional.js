// 23.08.2020

// EXECISE 1
// Check if two given integer values are in the range 50 to 99 (this includes both 50 and 99). Print true if either of them are in the range.

let firstNum = 30;
let secondNum = 3;
if (firstNum >= 50 && 99) {
    range = true;
} else if (secondNum >= 50 && 99) {
    range = true;
} else {
    range = false;
} 
 console.log(range);  // false


//  // EXERCISE 2

// // Check if three given integer values are in the range 50 to 99 (inclusive). Print true if one or more of them are in the range.

// let num1 = 4;
// let num2 = 20;
// let num3 = 50;
// if (num1 >= 50 && 99) {
//   numRange = true;
// } if (num2 >= 50 && 99){
//     numRange = true;
// } else if (num3 >= 50 && 99){
//     numRange = true;
// } else {
//     numRange = false;
// }

// console.log(numRange); // true


// EXERCISE 3
// Declare the variables a, b and c, and give them number values. Check which one out of the three variables has the largest value and print it to the console. Then change the values of the variables to see if your conditional still works.


let a = 43;
let b = 22;
let c = 33;
if (a>b && a>c) { 
   console.log(a);
}
   else if(b>a && b>c){
       console.log(b);
   } else {
       console.log(c);
   }   // Yes conditional still works.

// EXERCISE 4
// Create a new string adding "Py" in front of a given string. If the given string begins with "Py" then print the original string.







// EXERCISE 5
// Calculate the sum of the two integers. If the sum is in the range 50 to 80, print 65, otherwise print 80.


let numb1 = 58;
let numb2 = 12;
if (numb1 + numb2 > 50 && 80) {
    sum = 65;
    if ( numb1 + numb2 < 50 && 80){
        sum = 65;
    }
} else {
    sum = 80
} console.log(sum);

// // EXERCISE 6
// // Check whether the sum of two integers is 8, or whether their difference is 8. If one of these is the case, print true.




// // EXERCISE 7
// // Check whether either one of two integers is 15, or if their sum is 15. If one of these is the case, print true. 

let firInt = 15;
let secInt = 6;
if (firInt + secInt === 15) {
    sum = true;
    console.log(sum);
} if (firInt || secInt === 15) {
    sum = true;
} console.log(sum);



// EXERCISE 8
// Check whether one of two integers is a multiple of 7 or 11. If so, print true.

let num5 = 21;
let num4 = 3;
if (num5 || num4 * 7 || 11 === num5 || num4){
    sum = true;
} console.log(sum);



// EXERCISE 9
// Calculate the sum of the two given integers. If the two values are the same, then print triple their sum.

let nun1 = 20;
let nun2 = 20;
let summ = nun1 + nun2;
console.log(summ);
 if (nun1 === nun2) {
     console.log(summ * 3);
} 


// EXERCISE 10
// Calculate the difference between a specified number and 19. Print double the difference if the specified number is greater than 19.


let numm1 = 30;
let diffs = numm1 - 19;
if (numm1 > 19) {
    console.log((diffs * 2));
}



// FINISHED