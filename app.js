var typescript;
var javascript;
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
var addValue;
addValue = printNumber;
console.log(addValue(10));
addValue = 10;
function getAddintionalString(str1, str2) {
    return str1 + str2;
}
var getAddintionalNumbers;
getAddintionalNumbers = getAddintionalString;
