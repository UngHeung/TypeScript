/**
 * let, const, var
 * block scope, global scope
 */
const myName = "ungheung";
let myAge: number;

// myAge = "30";
myAge = 30;

// scope

function f() {
  // local scope
  const value = "hi";
  let value2 = "hi2";
  return value;
}

// console.log(value);
// console.log(value2);
// block scope, error

function f2() {
  // global scope
  var value2 = "hello";
  return value2;
}

// console.log(value2); // hello
// global scope, JS = not error, TS = error

/**
 * arrow function
 */
const add = (age: number, year = 1) => age + year;
console.log(add(myAge));

const printName: (name: string) => void = (name) => console.log(name);
printName(myName);

/**
 * spread operator
 */

const numbers = [1, 2, 3, 4, 5];
const newNumbers = [6, 7];

numbers.push(0);
// numbers.push(newNumbers); // error
// numbers.push(newNumbers[0], newNumbers[1])
numbers.push(...newNumbers);

const allNumbers = [...numbers, ...newNumbers];

const obj = {
  name: "ungheung",
  age: 30,
};

const newObj = { ...obj };

console.log(newObj.name, newObj.age);

const numList = (...numbers: number[]) => {
  console.log(numbers);
};

// numList(numbers) // error
numList(...numbers);

const numList2 = (...numbers: [number, number, number]) => {
  console.log(numbers);
};

// numList2(...numbers) // error
numList2(...[1, 2, 3]);

/**
 * destructuring assignment
 */

const values = ["hi!!", "hello!!"];
const [hi, hello] = values;
console.log(hi, hello); // hi!!hello!!

const [] = values;

const userInfo = {
  userName: "Heung",
  userAge: 30,
};

const { userName, userAge } = userInfo;
console.log(userName, userAge);
