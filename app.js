function add(num1, num2, isTrue) {
    if (isTrue) {
        console.log(num1 + num2);
    }
    else {
        return num1 + num2;
    }
}
var num1 = 10;
var num2 = 5.5;
var isConsole = false;
var result = add(num1, num2, isConsole);
