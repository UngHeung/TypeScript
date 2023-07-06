// union
// 숫자, 혹은 문자열을 처리할 수 있는 함수

function combine(input1: number | string, input2: number | string) {
    const result = input1 + input2;
    return result;
}

const combineNumber = combine(10, 20);
const combineString = combine("wel", "come");
