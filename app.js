// 戻り値の型を指定する場合(※推論されているので明示的に書く必要はない)
function add(n1, n2) {
    return n1 + n2;
}
// void 型(何も返さない) :void と書く必要も基本的にない
function printResult(num) {
    console.log('Result: ' + num);
}
// 型を指定せずに宣言するので、 any 型となる
// let combineValues;
// 関数を入れられるように指定しても、別の関数が入る恐れがある
// let combineValues: Function;
// 関数の引数の型と戻り値の型を指定できる
var combineValues;
// add 関数を格納
combineValues = add;
// any なので number を入れられてしまう
// combineValues = 5;
// 変数と通して関数を実行する
console.log(combineValues(8, 8));
printResult(add(5, 12));
