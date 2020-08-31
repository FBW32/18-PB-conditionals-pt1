// =====xxxxx===== first question:
// Check if two given integer values are in the range 50 to 99 (this includes both 50 and 99). Print true if either of them are in the range.
console.log("first question:");

let x = 20;
let y = 29;
 
if (x >= 50 && x <= 99 , y >= 50 && y <= 99) {
    console.log("true");
} else {
    console.log("false");
}

// =====xxxxx===== second question:
// Check if three given integer values are in the range 50 to 99 (inclusive). Print true if one or more of them are in the range.
console.log("second question:");

let xx = 50;
let yy = 39;
let zz = 99;
if (xx >= 50 && xx <= 99) {
    console.log("true");
} else if ( yy >= 50 && yy <= 99) {
    console.log("true");
} else if (zz >= 50 && zz <= 99 ) {
    console.log("true");
}

// =====xxxxx===== third question:
// Check which one out of the three variables has the largest value and print it to the console.
console.log("third question:");

let a = 0.6;
let b = 10;
let c = 0.9;
console.log(Math.max(a,b,c));
  // or 
if (a > b){
    op = a ;
    result = "a is larger : ";
   } else if (b > a) { 
       op = b;
       result = "b is larger : ";
   } else if (a = b){
       result = "a and b are equal : ";
       op = a;
   }  
if (op > c) {
    result = result ;
    console.log(result + op);
   } else if (op < c ) {
    result = "c is larger : "
    console.log(result + c);
   } else if (op = c) {
       result = "they are all same value:"
       console.log(result + op);
   }

// =====xxxxx===== fourth question:
//Create a new string adding "Py" in front of a given string. If the given string begins with "Py" then print the original string.
console.log("fourth question:");

let string = "SDsyOriginal";
if(string.startsWith("Py") == true) {
console.log(string)
} else {
    string = "Py"+ string;
    console.log(string);
}

//=====xxxxx===== fifth question:
// Calculate the sum of the two integers. If the sum is in the range 50 to 80, print 65, otherwise print 80. 
console.log("fifth question:");

let num1 = 55;
let num2 = 47;
let sum = num1 + num2;

if (sum >= 50 && sum <= 80) {
    console.log(65)
} else {
    console.log(80);
}

//=====xxxxx===== sixth question:
// Check whether the sum of two integers is 8, or whether their difference is 8. If one of these is the case, print true.
console.log("sixth question:");

let firstNum = 15;
let secondNum = 7;
let sum6 = firstNum + secondNum;
let abs6 = firstNum - secondNum;
let absReversed = secondNum - firstNum;
if (sum6 == 8 || abs6 == 8 || absReversed == 8) {
console.log(true);
}

//=====xxxxx===== seventh question:
// Check whether either one of two integers is 15, or if their sum is 15. If one of these is the case, print true. 
console.log("seventh question:");

let intNum1 = 8;
let intNum2 = 7;
let sumNum = intNum1 + intNum2;
if (intNum1 === 15 || intNum2 === 15 || sumNum === 15) {
    console.log(true)
}

//=====xxxxx===== eighth question:
// Check whether one of two integers is a multiple of 7 or 11. If so, print true.
console.log("eighth question:");

remainder1 = intNum1 % 7;
remainder2 = intNum1 % 11;
remainder3 = intNum2 % 7;
remainder4 = intNum2 % 11;
if (remainder1== 0 || remainder2 ==0 || remainder3 ==0 || remainder4 ==0 ) {
    console.log(true)
}

//=====xxxxx===== ninth question:
// Calculate the sum of the two given integers. If the two values are the same, then print triple their sum. 
console.log("ninth question:");

let e = 5;
let f = 5;
let sum9 = e + f;
if (e === f) {
    console.log(sum9 * 3);
}

//=====xxxxx===== tenth question:
// Calculate the difference between a specified number and 19. Print double the difference if the specified number is greater than 19.
console.log("tenth question:");

let j = 67;
let sumJ = j - 19;
if (sumJ > 19) {
    console.log(sumJ);
}
