"use strict";
function add(n1, n2, showResult, phrase) {
    var result = n1 + n2;
    if (showResult) {
        console.log(phrase + result);
    }
    else {
        return result;
    }
}
// 変数には型を指定していないのは、型推論(type inference)を利用しているから
// 右辺が 5 なので number 型と推論される
var number1 = 5;
var number2 = 10;
var printResult = true;
var resultPhrase = 'Result: ';
add(number1, number2, printResult, resultPhrase);
