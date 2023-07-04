function add(num1: number, num2: number, isTrue: boolean, str1: string) {
    if (isTrue) {
        console.log(str1 + num1 + num2);
    } else {
        return num1 + num2;
    }
}

const num1 = 10;
const num2 = 5.5;
const isConsole = true;
const str1 = "결과 : ";
const result = add(num1, num2, isConsole, str1);
