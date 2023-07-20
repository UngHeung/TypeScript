"use strict";
const myName = "ungheung";
let myAge;
myAge = 30;
function f() {
    const value = "hi";
    let value2 = "hi2";
    return value;
}
function f2() {
    var value2 = "hello";
    return value2;
}
const add = (age, year = 1) => age + year;
console.log(add(myAge));
const printName = (name) => console.log(name);
printName(myName);
const numbers = [1, 2, 3, 4, 5];
const newNumbers = [6, 7];
numbers.push(0);
numbers.push(...newNumbers);
const allNumbers = [...numbers, ...newNumbers];
const obj = {
    name: "ungheung",
    age: 30,
};
const newObj = Object.assign({}, obj);
console.log(newObj.name, newObj.age);
const numList = (...numbers) => {
    console.log(numbers);
};
numList(...numbers);
const numList2 = (...numbers) => {
    console.log(numbers);
};
numList2(...[1, 2, 3]);
const values = ["hi!!", "hello!!"];
const [hi, hello] = values;
console.log(hi, hello);
const [] = values;
const userInfo = {
    userName: "Heung",
    userAge: 30,
};
const { userName, userAge } = userInfo;
console.log(userName, userAge);
