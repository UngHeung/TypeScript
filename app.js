function add(num1, num2, isTrue, str1) {
    var result = num1 + num2;
    if (isTrue) {
        console.log(str1 + result);
    }
    else {
        return num1 + num2;
    }
}
var num1 = 10;
var num2 = 5.5;
var isConsole = true;
var str1 = "결과 : ";
var result = add(num1, num2, isConsole, str1);
