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
console.log(10);

addValue = 10;
