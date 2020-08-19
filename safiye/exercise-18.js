let num1 = 20;
let num2 = 50;
let num3 = 100;
//1
if ((num1 <= 99 && num1 >= 50) || (num2 <= 99 && num2 >= 50)) {
  console.log("true");
}
//2
if (
  (num1 <= 99 && num1 >= 50) ||
  (num2 <= 99 && num2 >= 50) ||
  (num3 <= 99 && num3 >= 50)
) {
  console.log("true");
}
//3
let a = 10;
let b = 20;
let c = 5;
if (a > b && a > c) {
  console.log(a);
}
if (b > a && b > c) {
  console.log(b);
}
if (c > a && c > b) {
  console.log(c);
}
//4
let myString = "ton";
let newString = "Py" + myString;
if (myString.slice(0, 2) == "Py") {
  console.log(myString);
} else {
  console.log("Your new string is:" + newString);
}
//5
//let num1 = 20;
//let num2 = 50;
let sum = num1 + num2;
if (sum >= 50 && sum <= 80) {
  console.log(65);
} else {
  console.log(80);
}
//6
num1 = 7;
num2 = 15;
let sub = num1 - num2;
if (sub < 0) {
  sub = sub * -1;
}
if (sum == 8 || sub == 8) {
  console.log(true);
}
//7
if (num1 == 15 || num2 == 15 || sum == 15) {
  console.log(true);
} else {
  console.log("They or their sum are not equal to 15");
}
//8
if (num1 % 7 == 0 || num1 % 11 == 0 || num2 % 7 == 0 || num2 % 11 == 0) {
  console.log(true);
}
//9
if (num1 == num2) {
  console.log(sum * 3);
} else {
  console.log("Values are not the same");
}
//10
let specifiedNum = 40;
let difference = specifiedNum - 19;
if (difference < 0) difference * -1;
if (difference > 19) {
  console.log(difference * 2);
}
//BONUS CHALLENGE
//more efficient way is writing these if-else statements in a function so that it is possible to execute the same function without changing anything.
//for example for the second question:
//num1 = 7;
//num2 = 15;
//let num3 = 100;
//lets reassign num3;
num3 = 55;
function range(x) {
  if (x <= 99 && x >= 50) {
    return true;
  } else {
    return false;
  }
}
if (range(num1) == true || range(num2) == true || range(num3) == true) {
  console.log("true");
}
