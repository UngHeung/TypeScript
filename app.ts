// 객체

const fruit: {
    name: string;
    count: number;
    colors: string[];
    role: [number, string];
} = {
    name: "Apple",
    count: 5,
    colors: ["red", "green"],
    role: [2, "author"],
};

const role: [number, string] = [1, "man"];
const role2 = [2, "woman"];

role[1] = 11;
role2[1] = 22;

let role3: [number, string];
role3 = [3, "new man", "after 2000"];

console.log(fruit.name);

// 배열

let fruits: string[];
fruits = "orange"; // error
fruits = ["orange", 1]; // error
fruits = ["orange", "melon"];

for (const color of fruit.colors) {
    console.log(color.length);
    color.map(() => {}); // error
}
