// 어떤 타입을 할당할지 알 수 없음
let userInput: unknown;
let userName: string;

userInput = "1";
userInput = 1;

if (typeof userInput === "string") {
    userName = userInput;
}

function generateError(message: string, code: number): void {
    throw { message: message, errorCode: code };
}

generateError("에러 발생", 500);
