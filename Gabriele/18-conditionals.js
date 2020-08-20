// 1. Check if two given integer values are in the range 50 to 99 (this includes both 50 and 99). Print true if either of them are in the range.

let firstInt = 51;
let secInt = 67;

if (firstInt >= 50 & firstInt <= 99 & secInt >= 50 & firstInt <= 99) 
{
    console.log('True. Both integers are in the given range');
} else 
{
    console.log('False. They are not in the range');
}  // True. Both integers are in the given range


// 2. Check if three given integer values are in the range 50 to 99 (inclusive). Print true if one or more of them are in the range.

let fiftyFive = 55;
let fortyEight = 48;
let eightyTwo = 82;
let lim1 = 50;  
let lim2 = 99;

if (fortyEight >= lim1 & fortyEight <= lim2  || fiftyFive >= lim1 & fiftyFive <= lim2 || eightyTwo >= lim1 & eightyTwo <= lim2) {
    console.log('true');
} else {
    console.log('false');
}



// 3. Declare the variables a, b and c, and give them number values. Check which one out of the three variables has the largest value and print it to the console. Then change the values of the variables to see if your conditional still works.

let a = 28;
let b = 67;
let c = 39;

if (a, b, c) {
    console.log(Math.max(a, b, c));
}  // 67.


a = 41;
b = 52;
c = 89;

if (a, b, c) {
    console.log(Math.max(a, b, c));
}   // 89   I changed the value as requested to check the conditional works


// 4. Create a new string adding "Py" in front of a given string. If the given string begins with "Py" then print the original string.

let originalStr = "ramid"
let newStr = ("Py" + `${originalStr}`);
// console.log(originalStr); // ramid
// console.log(newStr); // originalStr
if (newStr){
    console.log(newStr);
} // Pyramid 

// 5. Calculate the sum of the two integers. If the sum is in the range 50 to 80, print 65, otherwise print 80.

let sum = 28 + 67;
console.log(sum);
if (sum >80 & sum <= 80) {
    console.log(65);
} else {
    console.log(80);
} // 80

// 6. Check whether the sum of two integers is 8, or whether their difference is 8. If one of these is the case, print true.

let sum1 = 5 + 3;
let diff = 5 - 3;

if (sum1 === 8) {
    console.log(true);
} else {
    console.log(false);
} ; // true

if (diff === 8) {
    console.log(true);
} else {
    console.log(false);
} // false 


// 7. Check whether either one of two integers is 15, or if their sum is 15. If one of these is the case, print true.

if (12 === 15) {
    console.log(true);
} else {
    console.log(false);
}; // false
if (7.5 + 7.5 === 15) {
    console.log(true);
} else {
    console.log(false);
} // true 

// 8. Check whether one of two integers is a multiple of 7 or 11. If so, print true.

let number = 77;
let number2 = 36;

if (number % 7 === 0 || number % 11 === 0) {
    console.log(true);
} else {
    console.log(false);
};  // true 

if (number2 % 7 === 0 || number2 % 11 === 0) {
    console.log(true);
} else {
    console.log(false);
}; // false

// 9. Calculate the sum of the two given integers. If the two values are the same, then print triple their sum.

let newSum = 14 + 8;
if (newSum === 22) {
    console.log(newSum * 3);
} else {
    console.log();
}  // 66 

// 10. Calculate the difference between a specified number and 19. Print double the difference if the specified number is greater than 19

let diff2 = 39 - 19;
let result = 20;
if (diff2 > 19) {
    console.log(result * 2);
} else {
    console.log();
}; // 40