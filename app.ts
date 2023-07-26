/**
 * Generic
 */

function add(val1: string | number, val2: string | number) {
  if (typeof val1 === "number" && typeof val2 === "number") {
    return val1 + val2;
  } else if (val1 === "string" && typeof val2 === "string") {
    return val1 + val2;
  }
}

// union 타입을 사용할 수 있지만
// unknown과 같은 이유로 조건문을 사용하여 타입을 확인해주어야 한다.
// number + string과 같은 교차 연산이 되지 않도록 하기 위함
