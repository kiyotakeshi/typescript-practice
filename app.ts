// alias 型
type Combinable = number | string;

// 型の名前を説明的にすることができる
type ConversionDescriptor = 'as-number' | 'as-text';

function combine(
    input1: Combinable, // 型の再利用ができる
    input2: Combinable,
    resultConversion: ConversionDescriptor,
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
