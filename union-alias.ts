// alias 型
type Combinable = number | string;

// 型の名前を説明的にすることができる
type ConversionDescriptor = 'as-number' | 'as-text';

function combine(
    input1: Combinable, // 型の再利用ができる
    input2: Combinable,
    resultConversion: ConversionDescriptor
) {
    let result;

    // ランタイムでチェックする必要があるので処理を記載
    if (
        (typeof input1 == 'number' && typeof input2 === 'number') ||
        resultConversion === 'as-number'
    ) {
        result = +input1 + +input2;
    } else {
        result = input1.toString() + input2.toString();
    }
    return result;
}

const combineAges = combine(30, 26, 'as-number');
console.log(combineAges);

const combineStringAges = combine('30', '26', 'as-number');
console.log(combineStringAges);

const combinedNames = combine('Max', 'Anna', 'as-text');
console.log(combinedNames);

// alias 型は Object 型と組み合わせても良い
console.log('--------------------');

// 型の定義を一箇所で管理し、繰り返し記述することを避けられる　
type User = { name: string; age: number };

const user1: User = { name: 'Mike', age: 30 };

function greet(user: User) {
    console.log(`Hi, I'm ${user.name}`);
}

function isOlder(user: User, checkAge: number) {
    return checkAge > user.age;
}

greet(user1);
console.log(isOlder(user1, 31)); // true
