/**
 * Generic
 */

function newArray<T>(element1: T, element2: T): T[] {
  return [element1, element2];
}

newArray(1, 2);
newArray("a", 2);
newArray("a", "b");
newArray(true, 1);
newArray(false, true);

function newArray2<T, T2>(element: T, element2: T2) {
  return [element, element2];
}

newArray2(1, 2);
newArray2(1, "a");
newArray2(true, "b");
newArray2("a", "b");
