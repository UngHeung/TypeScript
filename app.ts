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
