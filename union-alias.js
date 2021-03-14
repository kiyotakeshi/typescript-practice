"use strict";
function combine(input1, // 型の再利用ができる
input2, resultConversion) {
    var result;
    // ランタイムでチェックする必要があるので処理を記載
    if ((typeof input1 == 'number' && typeof input2 === 'number') ||
        resultConversion === 'as-number') {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
var combineAges = combine(30, 26, 'as-number');
console.log(combineAges);
var combineStringAges = combine('30', '26', 'as-number');
console.log(combineStringAges);
var combinedNames = combine('Max', 'Anna', 'as-text');
console.log(combinedNames);
// alias 型は Object 型と組み合わせても良い
console.log('--------------------');
var user1 = { name: 'Mike', age: 30 };
function greet(user) {
    console.log("Hi, I'm " + user.name);
}
function isOlder(user, checkAge) {
    return checkAge > user.age;
}
greet(user1);
console.log(isOlder(user1, 31)); // true
//# sourceMappingURL=union-alias.js.map