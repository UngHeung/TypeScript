/**
 * Generic
 */

function newArray<T>(element1: T, element2: T): T[] {
  return [element1, element2];
}

newArray<number>(1, 2);
newArray("a", 2);
newArray<string>("a", "b");
newArray(true, 1);
newArray<boolean>(false, true);

function newArray2<T, T2>(element: T, element2: T2) {
  return [element, element2];
}

newArray2<number, number>(1, 2);
newArray2<number, string>(1, "a");
newArray2<boolean, string>(true, "b");
newArray2<string, string>("a", "b");
