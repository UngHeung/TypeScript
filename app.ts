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
