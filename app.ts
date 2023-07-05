// 객체

const fruit = {
    name: "Apple",
    count: 5,
    colors: ["red", "green"],
};

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
