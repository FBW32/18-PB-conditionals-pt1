// Programming Basics: Conditionals

// These exercises are aimed at making you more comfortable with using conditionals as well as operators. Use "if" statements to complete the following exercises. Print your results to the console.

// 1. Check if two given integer values are in the range 50 to 99 (this includes both 50 and 99). Print true if either of them are in the range.

let x = 22;
let y = 11;

if ((x >= 50 && x <= 99) || (y >= 50 && y <= 99))
{
    console.log('true');
}  else {
    console.log('false');
    
} // false

// 2. Check if three given integer values are in the range 50 to 99 (inclusive). Print true if one or more of them are in the range.

let val1 = 49;
let val2 = 99;
let val3 = 120;

if ((val1 >= 50 && val1 <= 99) || (val2 >= 50 && val2 <= 99) || (val3 >= 50 && val3 <= 99))
{
    console.log('true');
}  else {
    console.log('false');    
}  // true

// 3. Declare the variables a, b and c, and give them number values. Check which one out of the three variables has the largest value and print it to the console. Then change the values of the variables to see if your conditional still works. 

let a = 77;
let b = 14;
let c = 10;

if (a >= b && a >= c) {
    console.log(`the largest Number is: ${a}`);
} else if (b >= a && b >= c) {
    console.log(`the largest Number is: ${b}`);
} else {
    console.log(`the largest Number is: ${c}`);
} // the largest Number is 77

// 4. Create a new string adding "Py" in front of a given string. If the given string begins with "Py" then print the original string.

let givenString = 'lolololololo';
let newString = 'Py';

if (givenString.slice(0, 2) == "Py") {
    console.log(givenString);
} else {
    console.log(newString + givenString);
} // Pylolololololo

// 5. Calculate the sum of the two integers. If the sum is in the range 50 to 80, print 65, otherwise print 80. 

let numberOne = 33;
let numberTwo = 666;
let sum = numberOne + numberTwo;
console.log(sum); // 699

if(sum >= 50 && sum <= 80) {
    console.log('65');
} else {
    console.log('80');
} // 80



// 6. Check whether the sum of two integers is 8, or whether their difference is 8. If one of these is the case, print true.

let inteOne= 22;
let inteTwo = 14;
let sum1 = inteOne + inteTwo;
let difference = inteOne - inteTwo;

console.log(sum1); // 36
console.log(difference); // 8

if((sum1 === 8) || (difference === 8)){
    console.log('true');
} else{
    console.log('false');
} // true

// 7. Check whether either one of two integers is 15, or if their sum is 15. If one of these is the case, print true. 

let inte1 = 15;
let inte2 = 666;
let sum2 = inte1 + inte2;
console.log(sum2); // 681

if ((inte1 === 15) || (inte2 === 15) || (sum2 === 15)){
    console.log('true');
} else{
    console.log('false');
}  // true

// 8. Check whether one of two integers is a multiple of 7 or 11. If so, print true.

let inte3 = 777;
let inte4 = 666;

if ((inte3 % 7 === 0) || (inte3 % 11 === 0) || (inte4 % 7 === 0) || (inte4 % 11 === 0)){
    console.log('true');
} else{
    console.log('false');
} // true 

// 9. Calculate the sum of the two given integers. If the two values are the same, then print triple their sum. 

let inte5 = 666;
let inte6 = 666;
let sum3 = inte5 + inte6;
console.log(sum3); // 1332

if (inte5 === inte6){
    console.log(sum3 * 3);
} else {
    console.log('false');
} // 3996

// 10. Calculate the difference between a specified number and 19. Print double the difference if the specified number is greater than 19.

let specifiedNum = 66;
let difference2 = specifiedNum - 19;
console.log(difference2); // 47

if (specifiedNum > 19){
    console.log(difference2 * 2);
} else {
    console.log('false');
} // 94

