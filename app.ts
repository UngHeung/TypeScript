/**
 * Generic
 */

interface restriction {
  length: number;
}

function getLength<T extends restriction>(value: T): number {
  return value.length;
}

getLength("hello");
getLength(10); // Error
getLength(true); // Error

// 객체 비교하기
function getProperty<T, O extends keyof T>(obj: T, key: O) {
  return obj[key];
}

let obj = { a: 1, b: 2, c: 3 };
let obj2 = { d: 4, e: 5, f: 6 };

getProperty(obj, "a");
getProperty(obj2, "d");
getProperty(obj, "b");
