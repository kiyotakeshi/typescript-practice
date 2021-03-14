// union 型を使用
function combine(input1: number | string, input2: number | string) {
    let result;

    // ランタイムでチェックする必要があるので処理を記載
    if (typeof input1 == 'number' && typeof input2 === 'number') {
        result = input1 + input2;
    } else {
        result = input1.toString() + input2.toString();
    }
    return result;
}

const combineAges = combine(30, 26);
console.log(combineAges);

const combinedNames = combine('Max', 'Anna');
console.log(combinedNames);
