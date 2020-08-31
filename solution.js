// Check if two given integer values are in the range 50 to 99 (this includes both 50 and 99). Print true if either of them are in the range.
let integer1 = 50

    if ((integer1 >= 50 && integer1 <= 99))
    {
     console.log(true);
} 

// Check if three given integer values are in the range 50 to 99 (inclusive). Print true if one or more of them are in the range.
let integer1 = "X" // X= (16,57,101)

    if ((integer1 >= 50 && integer1 <= 99))
    {
     console.log(true);
} 
    else {
        console.log(false);
}

// Declare the variables a, b and c, and give them number values. Check which one out of the three variables has the largest value and print it to the console. Then change the values of the variables to see if your conditional still works.
let a = 53;
let b = 14;
let c = 38;
if (a > b && a> c) { console.log("a is the largest");   
}
else if (b > a && b > c) {
    console.log("b is the largest");
    
}
else if (c > a && c > b) {
    console.log("c is the largest");
    
}
else {
    console.log("a=b=c")
}


// Create a new string adding "Py" in front of a given string. If the given string begins with "Py" then print the original string.
let str1 = "misbah";
if (str1.charAt(0) === "p" && str1.charAt(1) === "y") {
    console.log(str1);
}
else {console.log("Py"+str1); }

// Calculate the sum of the two integers. If the sum is in the range 50 to 80, print 65, otherwise print 80.
let i1 = 4;
let i2 = 54;
if ((i1+i2) > 50 && (i1+i2) < 80) { console.log(65);
    
} else { console.log(80);
    
}

// Check whether the sum of two integers is 8, or whether their difference is 8. If one of these is the case, print true.
let number1 = 15
let number2 = 7
if ((number1 + number2) === 8 || (number1 - number2) === 8)
{ console.log(true) }
else { console.log(false) }

// Check whether either one of two integers is 15, or if their sum is 15. If one of these is the case, print true.

let number3 = 6
let number4 = 15
if (number3 === 15 || number4 === 15 || (number3 + number4) === 15)
{ console.log(true) }
else { console.log(false) }

// Check whether one of two integers is a multiple of 7 or 11. If so, print true.

let number5 = 41
let number6 = 88
if (number5 % 7 === 0 || number6% 7 === 0 || number5 % 11 === 0 || number6% 11 === 0)
{ console.log(true) }
else { console.log(false) }

// Calculate the sum of the two given integers. If the two values are the same, then print triple their sum.

let int1 = 5;
let int2 = 5;
if (int1===int2) { console.log(int1*3) } 
else { console.log(int1+int2) }

// Calculate the difference between a specified number and 19. Print double the difference if the specified number is greater than 19.
let a = 39
if (a > 19) { console.log(2*(a-19))}
else { console.log(19 - a) }

// BONUS CHALLENGE: Play around with each of your results, i.e., make sure they are dynamic to different inputs; is there a more efficient way of writing your code?; etc.