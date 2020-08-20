// Programming Basics: Conditionals

/* 1. Check if two given integer values are in the range 50 to 99 (this includes both 50 and 99). Print true if either of them are in the range. */
let x = 45;
let y = 75;
if((x >= 50 && x <= 99) || (y >=50 && x <=99)){
    console.log('true');
} else{
    console.log('false');
}
// true

/* 2. Check if three given integer values are in the range 50 to 99 (inclusive). Print true if one or more of them are in the range. */
let a1 = 20;
let b1 = 30;
let c1 = 30;
if((a1 <=50 && a1 >=99) || (b1 <= 50 && b1 >= 99) || (c1 <= 50 && c1 >=99)){
    console.log('true');
} else {
    console.log('false');
}
// false

/* 3. Declare the variables a, b and c, and give them number values. Check which one out of the three variables has the largest value and print it to the console. Then change the values of the variables to see if your conditional still works. */
let a = 40;
let b = 80;
let c = 70;
let result;
if(a > b)
{
    result = a;
    console.log('a is the largest value: ', a);
} else{
    result = b;
    console.log('b is the largest value: ', b);
}
if (c > result){
    result = c;
    console.log('c is the largest value: ', c);
}

/* 4. Create a new string adding "Py" in front of a given string. If the given string begins with "Py" then print the original string. */

let givenString = "thon";
if (givenString.charAt(0) === "p" && givenString.charAt(1) === "y"){
    console.log(givenString);
} else {
    console.log(`py${givenString}`);
}
// python

/* 5. Calculate the sum of the two integers. If the sum is in the range 50 to 80, print 65, otherwise print 80. */
let num1 = 40;
let num2 = 50;
let sum = num1 + num2;
console.log(sum); // 90
if((sum >= 50) && (sum <= 80)){
    console.log('Sum is in the given range', 65);
}else{
    console.log('Sum is not in the given range', 80);
}
// Sum is not in the given range 80

/* 6. Check whether the sum of two integers is 8, or whether their difference is 8. If one of these is the case, print true. */
let n1 = 12;
let n2 = 4;
let sum1 = n1 + n2;
let difference = n1 - n2;
console.log(sum1); // 16
console.log(difference); // 8
if((sum1 === 8) || (difference === 8)){
    console.log('true');
} else{
    console.log('false');
}
// true

/* 7. Check whether either one of two integers is 15, or if their sum is 15. If one of these is the case, print true. */
let n3 = 4;
let n4 = 6;
let sum2 = n3 + n4;
console.log(sum2); // 10
if ((n3 === 15) || (n4 === 15) || (sum2 === 15)){
    console.log('true');
} else{
    console.log('false');
}
// false

/* 8. Check whether one of two integers is a multiple of 7 or 11. If so, print true. */
let integer1 = 21;
let integer2 = 40;
if ((integer1 % 7 === 0) || (integer1 % 11 === 0) || (integer2 % 7 === 0) || (integer2 % 11 === 0)){
    console.log('true');
} else{
    console.log('false');
}
// true

/* 9. Calculate the sum of the two given integers. If the two values are the same, then print triple their sum. */
let num3 = 32;
let num4 = 32;
let sum3 = num3 + num4;
console.log(sum3); // 64
if(num3 === num4){
    console.log(sum3 * 3);
} else {
    console.log('false');
}
// 192

/* 10. Calculate the difference between a specified number and 19. Print double the difference if the specified number is greater than 19. */
let num5 = 20;
let diff = num5 - 19;
console.log(diff); // 1
if(num5 > 19){
    console.log((diff * 2));
} else {
    console.log('false');
}
// 2

