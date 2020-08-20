/* [`$*,|z] */
/* 1 1. Check if two given integer values are in the range 50 to 99 (this includes both 50 and 99).
Print true if either of them are in the range.
2. Check if three given integer values are in the range 50 to 99 (inclusive).
Print true if one or more of them are in the range.
 */
let num1 = 99;
let num2=56;
if(((num1>=50)&&(num1<=99))&&((num2>=50)&&(num2<=99))){
    console.log(`The value of num1 and num2 in the range 50 to 99`); // [The value of num1 and num2 in the range 50 to 99]
}else{
    console.log("false");
}

/* 3  Declare the variables a, b and c, and give them number values.
Check which one out of the three variables has the largest value and print it to the console.
Then change the values of the variables to see if your conditional still works.  */

let a=10;
let b=20;
let c=30;
if ((a>b)&&(a>c)){
    console.log(`the largest Number is ${a}`);
}else{
    if(b>c){
        console.log(`the largest Number is ${b}`);
    }
    else{
        console.log(`the largest Number is ${c}`);
    }
}

// expacted return [the largest Number is 30] it can solved with else if{} statement.

/* 4. Create a new string adding "Py" in front of a given string.
If the given string begins with "Py" then print the original string. */

let str="thon";
if((str.charAt(0)==="p")&&(str.charAt(1)==="y")){
    console.log(str);
}else{
    console.log(`py${str}`);
} 
// expacted return [python]

/* 5. Calculate the sum of the two integers.
If the sum is in the range 50 to 80, print 65, otherwise print 80. let int1=56; */

let int2 = 15;
let sum= int1+int2;
let sub = int2-int1;
if((sum>=50) && (sum<=80)){
    console.log(65);
}else{
    console.log(80);
}
//expacted return [65]

/* 6. Check whether the sum of two integers is 8, or whether their difference is 8.
If one of these is the case, print true. */

if((sum===8)||(sub===8)){
    console.log("true");
}
// expacted return [ ]

/* 7. Check whether either one of two integers is 15, or if their sum is 15.
If one of these is the case, print true.  */

if((sum===15)||(int1===15)||(int2===15)){
    console.log("true");
}
//expacted return [True]

/* 8. Check whether one of two integers is a multiple of 7 or 11.
If so, print true.
*/
if(((int1%7===0)||(int1%11===0))&&((int2%7===0)||(int2%11===0))){
    console.log("True");
} 
//expacted return [ the condition in this case it will not give value back ]

/* 9. Calculate the sum of the two given integers.
If the two values are the same, then print triple their sum.
*/

if (int1===int2){
    console.log("the triple sum = " + sum*3);  
}
//expacted return [ the condition in this case it will not give value]

/* 10. Calculate the difference between a specified number and 19.
Print double the difference if the specified number is greater than 19. */
let number = 97;
let subNumber = number-19;
if(subNumber>19){
    console.log(subNumber*3);
}
    //expacted return [ 234 ]
///////////////////////////////////////////////