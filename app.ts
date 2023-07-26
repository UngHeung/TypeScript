/**
 * Generic
 */

function add(val1: string, val2: string): string;
function add(val1: number, val2: number): number;
function add(val1: any, val2: any) {
  return val1 + val2;
}

// 함수 오버로드를 사용할 수 있다.
