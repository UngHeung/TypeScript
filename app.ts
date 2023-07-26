/**
 * Generic
 */

function add(val1: unknown, val2: unknown) {
  if (typeof val1 === "number" && typeof val2 === "number") {
    return val1 + val2;
  } else if (val1 === "string" && typeof val2 === "string") {
    return val1 + val2;
  }
}

// unknown 타입은 모든 타입을 사용할 수 있지만
// 타입을 엄격하게 검사하기 때문에 조건문을 사용하여 타입을 확인해주어야 한다.
// number + string과 같은 교차 연산이 되지 않도록 하기 위함
