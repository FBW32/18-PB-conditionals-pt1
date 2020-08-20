// # Programming Basics: Conditionals

// These exercises are aimed at making you more comfortable with using conditionals as well as operators. Use "if" statements to complete the following exercises. Print your results to the console.

// 1. Check if two given integer values are in the range 50 to 99 (this includes both 50 and 99). Print true if either of them are in the range.
let num1 = 53;
let result;
if ( (50 <= num1) && (num1 <= 99)) {
    result = true;
}
else {
    result = false;
}
console.log(result); //true
//don't forget to add && only 50<= num1 <=99 will not work. 



// 2. Check if three given integer values are in the range 50 to 99 (inclusive). Print true if one or more of them are in the range.
let num2 = 24;
let num3 = 62;

let result2;
if ( (50 <= num1 && num1 <= 99) || (50 <= num2 && num2 <= 99) || (50 <= num3 && num3 <= 99)) {
    result2 = true;
}
else {
    result2 = false;
}
console.log(result); // true


// 3. Declare the variables a, b and c, and give them number values. Check which one out of the three variables has the largest value and print it to the console. Then change the values of the variables to see if your conditional still works. 
let a = 20;
let b = 21;
let c = 22;
let d = Math.max(a, b, c);
console.log(d);

a = 53;
b = 63;
c = 73;
e = Math.max(a, b, c);
console.log(e);


// 4. Create a new string adding "Py" in front of a given string. If the given string begins with "Py" then print the original string.
let f = "ton";
let g = "Py";
let h = g.concat(f);
console.log(h);
console.log(typeof h);// string

if (h.includes("Py")) {
    console.log(f);
}
else{
    console.log('false');
}

// 5. Calculate the sum of the two integers. If the sum is in the range 50 to 80, print 65, otherwise print 80. 

let num4 = 24;
let num5 = 162;
let result3;

if (50 <= (num4 + num5) && (num4 + num5) <= 99) {
    result3 = 65;
}
else {
    result3 = 80;
}
console.log(result3); //80

// 6. Check whether the sum of two integers is 8, or whether their difference is 8. If one of these is the case, print true.
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/abs

let num6 = 9;
let num7 = 1;
let result4;

if (((num6 + num7) == 8) || (Math.abs(num6 - num7) == 8)) {
    result4 = true;
}
else {
    result4 = false;
}
console.log(result4); // true


// 7. Check whether either one of two integers is 15, or if their sum is 15. If one of these is the case, print true. 
let num8 = 15;
let num9 = 1;
let result5;

if (((num8 + num9) == 15) || (num8 == 15) || ( num9 == 15)) {
    result5 = true;
}
else {
    result5 = false;
}
console.log(result5); // true

// 8. Check whether one of two integers is a multiple of 7 or 11. If so, print true.
let num10 = 51;
let num11 = 1;
let result6;

if (((num10 || num11) % 7 === 0) || ((num10 || num11) % 11 === 0)) {
    result6 = true;
}
else {
    result6 = false;
}
console.log(result6); // false


// 9. Calculate the sum of the two given integers. If the two values are the same, then print triple their sum. 
let num12 = 4;
let num13 = 4;
let num14 = num12 + num13;
let result7;

if (num12 === num13) {
    console.log(num14 * 3);
} 
else
console.log('2'); // 24

// 10. Calculate the difference between a specified number and 19. Print double the difference if the specified number is greater than 19.

let num15 = 25;

if (num15 <= 19) {
    console.log(19 - num15);
    }
  else
    {
     console.log((num15 - 19) * 2);
    }; //12


// 11. BONUS CHALLENGE: Play around with each of your results, i.e., make sure they are dynamic to different inputs; is there a more efficient way of writing your code?; etc. 
