var tuplePerson = {
    name: 'mike',
    age: 30,
    // 文字列の array
    hobbies: ['Sports', 'Cooking'],
    // tuple 型が配列と違う点は、要素数と要素の型が指定できること
    role: [2, 'author']
};
// // 型推論の場合
// // role: (string | number) のユニオン型
// // 3つ目の要素を入れられてしまう
// person.role.push('admin');
// // string か number であれば入れられてしまう
// person.role[1] = 10;
// tuple 型を明示した場合
// person.role[1] = 10; // 型が違うから怒られる
// person.role = []; // 長さの違う配列を代入するため怒られる
// person.role.push('admin'); // 追加することはできてしまうので注意
// let favariteActivities: string[];
// favariteActivities = ['Sports', 'Cooking'];
console.log(tuplePerson);
for (var _i = 0, _a = tuplePerson.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    // hobby. とすると string の property にアクセスできコードを安全かつ簡単に書ける
    console.log(hobby.toUpperCase());
}
console.log('-----------------');
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
var enumPerson = {
    name: 'mike',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    // 文字列で指定する
    // role: 'READ ONLY USER',
    role: Role.ADMIN
};
// 文字列が完全に一致していないといけない
// if (enumPerson.role === 'READ-ONLY-USER') {
//     console.log('読み取り専用ユーザ');
// }
if (enumPerson.role === Role.ADMIN) {
    console.log('管理ユーザ');
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
console.log('-----------------');
var product = {
    id: 'abc1',
    price: 13,
    tags: ['great-offer', 'hot-and-new'],
    details: {
        title: 'Red Carpet',
        description: 'A great carpet'
    }
};
console.log(product);
