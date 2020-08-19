//1,2

let i = 34;
let j = 120;
let z = 450;
if (i >= 50 && i <= 99 && j >= 50 && j <= 99) {
  console.log("True");
} else {
  console.log("False");
}
//2
if ((i >= 50 && i <= 99) || (j >= 50 && j <= 99) || (z >= 50 && z <= 99)) {
  console.log("True");
} else {
  console.log("False");
}

//3
let a = 34;
let b = 100;
let c = 50;
if (a > b && a > c) {
  console.log("a greather than b , c");
} else if (b > a && b > c) {
  console.log("b greather than a , c");
} else if (c > a && c > b) {
  console.log("c greather than b , c");
} else {
  console.log("one of them is equal with another one");
}
//4
let myStr = "PYwhgejwg";
if (myStr.charAt(0) == "P" && myStr.charAt(1) == "Y") {
  console.log(myStr);
} else {
  console.log("nothings");
}

//5
let s1 = 2334;
let s2 = 343;
let sum = s1 + s2;
if (sum >= 50 && sum <= 80) {
  console.log("65");
} else {
  console.log("80");
}

//6
let q = 34;
let w = 0;
let sum1 = q + w;
if (sum1 == 8 || sum1 != 8) {
  console.log("true");
} else {
  console.log("false");
}

//7
let e = 4;
let r = 11;
let sum2 = e + r;
let case1 = 15;
if (sum2 == case1 || e == case1 || r == case1) {
  console.log("True");
} else {
  console.log("false");
}
//8
let t = 21;
let t1 = 30;
if (t % 7 == 0 || t % 11 == 0 || t1 % 7 == 0 || t1 % 11 == 0) {
  console.log("True");
} else {
  console.log("false");
}

//9
let u1 = 4;
let u2 = 4;
let sumU = u1 + u2;
if (u1 == u2) {
  console.log(sumU * 3);
} else {
  console.log("they are not the same");
}

//10
let a2 = 199;
let value = 19;
let difference = a2 - value;
if (a2 > value) {
  console.log(difference * 2);
} else {
  console.log("the number is not greater than 19");
}

// 11
// we can also get the value from user for a dynamic program with prompt.
