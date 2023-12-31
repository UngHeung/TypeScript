# TypeScript

## 타입스크립트 설치

기본적으로 `NodeJS`가 설치되어 있어야 한다.

```bash
npm install -g typescript
```

## index.html

```html
...
<head>
    ...
    <script src="app.js" defer></script>
</head>
...
```

---

## app.ts 컴파일하기

```ts
// TypeScript
console.log("hello TypeScript");
```

```bash
tsc app.ts
```

```js
// 컴파일된 JavaScript
console.log("hello TypeScript");
```

---

## 자동으로 적용하기

```bash
npm init
npm install
npm install --save-dev lite-server
```

```json
{
    ...
    "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1",
        "start": "lite-server" // 스크립트 추가
    }
    ...
}
```

```bash
tsc app.ts
```

컴파일하면 자동으로 적용되어 브라우저에 표시된다.

---

## 타입

number `1`, `-1`, `1.1` \
string `'hi'`, `"hi"`, \``hi`\` \
boolean `true`, `false`

## 역할

### JavaScript

```js
function add(num1, num2) {
    return num1 + num2;
}

const num1 = "10";
const num2 = 5.5;
const result = add(num1, num2);

console.log(result);

// 105.5
```

이것을 유도하였다면 문제가 없겠지만, 그렇지 않았을 경우 문제가 생길 수 있다. \
이를 해결하기 위해 타입스크립트를 사용하여 입력 값에 타입을 지정해줄 수 있으며, \
입력 값이 지정한 타입과 다를 경우 에러를 표시해준다. \
다만 이는 컴파일 이전에만 유효하며, 이를 확인하고 제대로 된 값으로 수정해주지 않는다면 \
문제가 그대로 발생하게 된다. \
즉, 타입스크립트는 실수를 알려주지만, 컴파일을 차단하지는 않는다.
