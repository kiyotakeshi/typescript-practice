// 明示的に型を書く場合
// const person: {
//     name: string;
//     age: number;
// }

// 型推論が動作する場合は、型推論を使うほうがいい
const person = {
    name: 'mike',
    age: 30,
    // 文字列の array
    hobbies: ['Sports', 'Cooking'],
};

// let favariteActivities: string[];
// favariteActivities = ['Sports', 'Cooking'];

console.log(person);

for (const hobby of person.hobbies) {
    // hobby. とすると string の property にアクセスできコードを安全かつ簡単に書ける
    console.log(hobby.toUpperCase());
}

// const product: {
//     id: string;
//     price: number;
//     tags: string[];
//     details: {
//         title: string;
//         description: string;
//     };
// }
const product = {
    id: 'abc1',
    price: 13,
    tags: ['great-offer', 'hot-and-new'],
    details: {
        title: 'Red Carpet',
        description: 'A great carpet',
    },
};

console.log(product);
