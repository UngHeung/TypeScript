"use strict";
let typescript;
let javascript;
function printString(str) {
    return str;
}
function printNumber(num) {
    return num.toString();
}
function nonPrintValue(val) {
    console.log(val);
}
function returnUndefined(str) {
    console.log(str);
    return;
}
console.log(returnUndefined("value")); // undefined
let addValue;
addValue = printNumber;
console.log(addValue(10));
addValue = 10;
function getAddintionalString(str1, str2) {
    return str1 + str2;
}
let getAddintionalNumbers;
getAddintionalNumbers = getAddintionalString;
function handleAddNumber(num1, num2, callback) {
    const result = num1 + num2;
    return callback(result);
}
handleAddNumber(1, 2, (res) => {
    console.log(res);
    return res;
});
