// 01.  Check if two given integer values are in the range 50 to 99 (this includes both 50 and 99). Print true if either of them are in the range.


// if true is 50 equal to or less that 99 print true its within range , else print false you are out of range.

let range = 75;
let rangePos = "true you are within range";
let rangeNeg = " False your are out of range";
let loP = (range >= 50);
let upP = (range <= 99);

if (loP || upP){
    console.log(rangePos); 
} else{
    console.log(rangeNeg);
} 
//true you are within range

//2. Check if three given integer values are in the range 50 to 99 (inclusive). Print true if one or more of them are in the range.

// print true if one or more is present


let int1 = 70;
let int2 = 60;
let int3 = 89;
let rangeInt = (int1 || int2 || int3);

if ((rangeInt = loP) == (rangeInt = upP)){
    console.log("Its True");
} else{
    console.log("its False");
}
// Its True

// 3. Declare the variables a, b and c, and give them number values. Check which one out of the three variables has the largest value and print it to the console. Then change the values of the variables to see if your conditional still works. 

// print "largest value" if greater than other

let a = 36;
let b = 63;
let c = 90;
//let testR = (a || b || c)
//let largest = 90;


if (a > b && a > c){
  console.log('the largest is a',a);
}else if (b > a && b > c){
    console.log('the largest is b',b);
} else if (c > a && c > b){
    console.log('the largest is c',c);
}  //the largest c 90

//4. Create a new string adding "Py" in front of a given string. If the given string begins with "Py" then print the original string.

// print if the string begins with Py 

let oldStr = "doctor";
let newStr = "Pydoctor";
let pStr = "Py";

if (pStr === newStr.substr(0,2)){
    console.log(oldStr);
} else console.log("no");  // doctor


//5. Calculate the sum of the two integers. If the sum is in the range 50 to 80, print 65, otherwise print 80. 

//print 65 if it falls within range
//print 80 if otherwise

let num1 = 25;
let num2 = 40;

let numSum = num1+num2;
let noNum = 80;
//let range2 = (>= 50 && <= 80);

if ( numSum >= 50 || numSum >= 80){
    console.log(numSum);
} else{
    console.log(noNum);
} //65


//6. Check whether the sum of two integers is 8, or whether their difference is 8. If one of these is the case, print true.

//  print: true if sum  or subtraction is 8

let dee = 12;
let eed = 4;

let sub = dee - eed;
let add = dee + eed;

if (8 === sub || 8 === add){
    console.log("True");
} else{
    console.log("False");
}  // true


//7. Check whether either one of two integers is 15, or if their sum is 15. If one of these is the case, print true. 
// print true if one integer or their sum is 15.

let numInt = 8;
let int4 = 7;
let intSum = numInt + int4;
let tesN = 15;

if (tesN === numInt || tesN === int4 || tesN === intSum){
    console.log("true");
} else{
    console.log("false");
}  //true

//8. Check whether one of two integers is a multiple of 7 or 11. If so, print true.
// print true if one of integer is multiple of 7 or 11.

let spNum = 5;
let spNum2 = 6;
let spTs = (spNum || spNum2);

if (spTs % 7 === 0 || spTs % 11 === 0){
    console.log("True");
} else{
    console.log("false");
}  // false

//9. Calculate the sum of the two given integers. If the two values are the same, then print triple their sum. 
// print 3x the sum if same

let val1 = 36;
let val2 = 52;
let valSum = val1 + val2;
let valAn = (valSum || valSum || valSum)
if (valSum === val1 || valSum === val2){
    console.log(valAn);
} else{
    console.log("no Match");
}  //no Match

//10. Calculate the difference between a specified number and 19. Print double the difference if the specified number is greater than 19.
// print double the difference if greater than 19

let spNum3 = 54;
let refNum = 19;
let difNum = spNum3 - refNum;
let resNum = [difNum , difNum]

if ( difNum > refNum){
    console.log(resNum);
} else{
    console.log("less value");
}  // [ 35, 35 ]


