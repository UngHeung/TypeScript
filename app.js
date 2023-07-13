// 어떤 타입을 할당할지 알 수 없음
var userInput;
var userName;
userInput = "1";
userInput = 1;
if (typeof userInput === "string") {
    userName = userInput;
}
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
function func() { }
console.log(func());
var res = generateError("에러 발생", 500);
console.log(res);
