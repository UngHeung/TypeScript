"use strict";
function add(num1, num2, isTrue, str1) {
    const result = num1 + num2;
    if (isTrue) {
        console.log(str1 + result);
    }
    else {
        return num1 + num2;
    }
}
const num1 = 10;
const num2 = 5.5;
let num3;
num3 = "1";
const isConsole = true;
const str1 = "결과 : ";
const result = add(num1, num2, isConsole, str1);
