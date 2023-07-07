// union
// 숫자, 혹은 문자열을 처리할 수 있는 함수

//type aliace
// 타입을 변수에 넣어주는 느낌
type Combineable = number | string;

function combine(input1: Combineable, input2: Combineable) {
    let result;

    if (typeof input1 === "number" && typeof input2 === "number") {
        result = input1 + input2;
    } else {
        result = input1.toString() + input2.toString();
    }

    return result;
}

const combineNumber = combine(10, 20);
const combineString = combine("wel", "come");

console.log(combineNumber);
console.log(combineString);

// 타입 알리어스 또다른 사용법
type User = { id: string; pw: string };

function setUser(user: User) {
    //
}
