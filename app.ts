function add(num1: number, num2: number, isTrue: boolean) {
    if (isTrue) {
        console.log(num1 + num2);
    } else {
        return num1 + num2;
    }
}

const num1 = 10;
const num2 = 5.5;
const isConsole = false;
const result = add(num1, num2, isConsole);
