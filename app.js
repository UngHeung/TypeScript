// 객체
// const fruit: {
//     name: string;
//     count: number;
//     colors: string[];
//     role: [number, string];
// } = {
//     name: "Apple",
//     count: 5,
//     colors: ["red", "green"],
//     role: [2, "author"],
// };
// const role: [number, string] = [1, "man"];
// const role2 = [2, "woman"];
// role[1] = 11;
// role2[1] = 22;
// let role3: [number, string];
// role3 = [3, "new man", "after 2000"];
// console.log(fruit.name);
// // 배열
// let fruits: string[];
// fruits = "orange"; // error
// fruits = ["orange", 1]; // error
// fruits = ["orange", "melon"];
// for (const color of fruit.colors) {
//     console.log(color.length);
//     color.map(() => {}); // error
// }
// enum 열거형
var Human;
(function (Human) {
    Human["HEAD"] = "\uBA38\uB9AC";
    Human["BODY"] = "\uBAB8";
    Human["ARMS"] = "\uD314";
    Human["LEGS"] = "\uB2E4\uB9AC";
})(Human || (Human = {}));
var eye = {
    position: Human.HEAD,
};
function getPosition(part) {
    if (part.position === Human.HEAD) {
        return part.position;
    }
    return undefined;
}
console.log(getPosition(eye));
