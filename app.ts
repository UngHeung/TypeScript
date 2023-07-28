/**
 * Generic
 */

// function add(val:number, val2:number):number;
// function add(val:string, val2:String):string;
function add<T>(val1: T, val2: T): T {
  return val1 + val2;
}

add<number>(10, 10);
add<string>("type", "script");
add(1, 1);
add(1, "a"); // error
add("a", "b");
add(true, true);
add(false, 1); // error

// 타입을 나중에 적용할 수 있도록 유연하게 지정할 수 있다.
// 여기서 T는 변수와 같은 느낌이며, 이름은 상관 없지만 관습적으로 T를 사용한다.

// 제네릭을 통해 선언 이후 사용 시점에 타입을 정할 수 있다.
// 하지만 제네릭은 연산자를 지원하지 않는다.
