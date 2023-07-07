function printString(str: string) {
    return str;
}

function pringNumber(num: number): string {
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
