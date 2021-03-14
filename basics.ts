function add(n1: number, n2: number, showResult: boolean, phrase:  string) {

    const result = n1 + n2;
    if (showResult) {
        console.log(phrase + result);
    } else {
        return result;
    }
}

// 変数には型を指定していないのは、型推論(type inference)を利用しているから
// 右辺が 5 なので number 型と推論される
let number1 = 5;
const number2 = 10;
const printResult = true;
const resultPhrase = 'Result: ';

add(number1, number2, printResult, resultPhrase);
