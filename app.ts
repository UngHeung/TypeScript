let typescript: "typescript" | 0 | false;
let javascript: "javascript" | 1 | true;

function printString(str: string) {
    return str;
}

function printNumber(num: number): string {
    return num.toString();
}

function nonPrintValue(val: any) {
    console.log(val);
}

function returnUndefined(str: string): undefined {
    console.log(str);
    return;
}

console.log(returnUndefined("value")); // undefined

let addValue: Function;
addValue = printNumber;
console.log(addValue(10));

addValue = 10;

function getAddintionalString(str1: string, str2: string) {
    return str1 + str2;
}

let getAddintionalNumbers: (num1: number, num2: number) => number;
getAddintionalNumbers = getAddintionalString;

function handleAddNumber(num1: number, num2: number, callback: (res: number) => number) {
    const result = num1 + num2;
    return callback(result);
}

handleAddNumber(1, 2, (res) => {
    console.log(res);
    return res;
});
