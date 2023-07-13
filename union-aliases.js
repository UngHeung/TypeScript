"use strict";
// union
// 숫자, 혹은 문자열을 처리할 수 있는 함수
function combine(input1, input2) {
    let result;
    if (typeof input1 === "number" && typeof input2 === "number") {
        result = input1 + input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
const combineNumber = combine(10, 20);
const combineString = combine("wel", "come");
console.log(combineNumber);
console.log(combineString);
function setUser(user) {
    //
}
