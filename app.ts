// union 型を使用
function combine(
    input1: number | string,
    input2: number | string,
    // literal 型で引数の型を指定
    resultConversion: 'as-number' | 'as-text'
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
