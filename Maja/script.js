/* 1. Check if two given integer values are in the range 50 to 99 (this includes both 50 and 99). Print true if either of them are in the range. */
let integer1 = 50;
let integer2 = 1;
let InTheRange = integer1 >= 50 || integer1 <= 99;
console.log(InTheRange); // true
let InTheRange2 = integer2 >= 50 || integer2 <= 99;
console.log(InTheRange2); // true

if (InTheRange) {
  console.log(`${integer1} and ${integer2} are in the range of 50 and 90`); // 50 and 1 are in the range of 50 and 90
} else {
  console.log(`${integer1} and ${integer2} are not in the range of 50 and 90`);
}

/* 2. Check if three given integer values are in the range 50 to 99 (inclusive). Print true if one or more of them are in the range. */

let integer3 = 40;
let integer4 = 50;
let integer5 = 100;
let InRange3 = integer3 >= 50 && integer3 <= 90;
console.log(InRange3); // false
let InRange4 = integer4 >= 50 && integer4 <= 90;
console.log(InRange4); // true
let InRange5 = integer5 >= 50 && integer5 <= 90;
console.log(InRange5); // false

if (InRange3 === true) {
  console.log(`${integer3} is in the range of 50 and 90`);
} else {
  console.log(`${integer3} is not in the range of 50 and 90`); // 40 is not in the range of 50 and 90
}

if (InRange4 === true) {
  console.log(`${integer4} is in the range of 50 and 90`); // 50 is in the range of 50 and 90
} else {
  console.log(`${integer4} is not in the range of 50 and 90`);
}

if (InRange5 === true) {
  console.log(`${integer5} is in the range of 50 and 90`);
} else {
  console.log(`${integer5} is not in the range of 50 and 90`); // 100 is not in the range of 50 and 90
}

/* 3. Declare the variables a, b and c, and give them number values. Check which one out of the three variables has the largest value and print it to the console. Then change the values of the variables to see if your conditional still works. */

let a = 13;
let b = 45;
let c = 62;
let maxNr = Math.max(a, b, c);
if (maxNr) {
  console.log(`${maxNr} is the largest value`); // 62 is the largest value
} else {
  console.log(`${maxNr} is not the largest value`);
}

let d = 38;
let e = 15;
let f = 2;
let maxNr2 = Math.max(d, e, f);
if (maxNr2) {
  console.log(`${maxNr2} is the largest value`); // 38 is the largest value
} else {
  console.log(`${maxNr2} is not the largest value`);
}

/* 4. Create a new string adding "Py" in front of a given string. If the given string begins with "Py" then print the original string. */

let givenString = "World";
let Py = "Py";
let PyWorld = Py.concat(givenString);
console.log(PyWorld); // PyWorld

/* 5. Calculate the sum of the two integers. If the sum is in the range 50 to 80, print 65, otherwise print 80. */

let integer6 = 45;
let integer7 = 2;
if (`(${integer6} + ${integer7}) >= 50 && (${integer6} + ${integer7}) <= 80`) {
  console.log(65); // 65
} else {
  console.log(80);
}

/* 6. Check whether the sum of two integers is 8, or whether their difference is 8. If one of these is the case, print true. */
let integer8 = 21;
let integer9 = 13;
let sum8 = true;
let sumOther = false;
if (
  `((${integer8} + ${integer9}) === 8) || ((${integer8} - ${integer9}) === 8)`
) {
  console.log(sum8); // true
} else {
  console.log(sumOther);
}

/* 7. Check whether either one of two integers is 15, or if their sum is 15. If one of these is the case, print true. */

let integer10 = 12;
let integer11 = 15;
let TrueAnswer = true;
let FalseAnswer = false;
if (
  `(${integer10} === 15) || (${integer11} === 15) || ((${integer10} + ${integer11}) === 15) `
) {
  console.log(TrueAnswer); // true
} else {
  console.log(FalseAnswer);
}

/* 8. Check whether one of two integers is a multiple of 7 or 11. If so, print true.
 */

let integer12 = 32;
let integer13 = 77;
if (`(${integer12} % 7 === 0) || (${integer13} % 7 === 0)`) {
  console.log(TrueAnswer); // true
} else {
  console.log(FalseAnswer);
}

/* 9. Calculate the sum of the two given integers. If the two values are the same, then print triple their sum. */
let tripleSum =
  `${integer1}` + `${integer2}` + `${integer4}` + `${integer2}` * 3;
if (`(${integer1} + ${integer2}) === (${integer4} + ${integer2})`) {
  console.log(tripleSum); // 501503
}

/* 10. Calculate the difference between a specified number and 19. Print double the difference if the specified number is greater than 19. */

let integer14 = 19;
if (`(${integer1} - ${integer14}) > 19`) {
  console.log((`${integer1}` - `${integer14}`) * 2); // 62
}

/* 11. BONUS CHALLENGE: Play around with each of your results, i.e., make sure they are dynamic to different inputs; is there a more efficient way of writing your code?; etc. */

//maybe tomorrow, becouse my brain needs rest.....
