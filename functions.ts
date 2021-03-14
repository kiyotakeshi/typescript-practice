// 戻り値の型を指定する場合(※推論されているので明示的に書く必要はない)
function add(n1: number, n2: number): number {
    return n1 + n2;
}

// void 型(何も返さない) :void と書く必要も基本的にない
function printResult(num: number) {
    console.log('Result: ' + num);
}

// 型を指定せずに宣言するので、 any 型となる
// let combineValues;

// 関数を入れられるように指定しても、別の関数が入る恐れがある
// let combineValues: Function;

// 関数の引数の型と戻り値の型を指定できる
let combineValues: (a: number, b: number) => number;

// add 関数を格納
combineValues = add;

// any なので number を入れられてしまう
// combineValues = 5;

// 変数と通して関数を実行する
console.log(combineValues(8, 8));

printResult(add(5, 12));

console.log('------------------');
// 3つ目の引数としてコールバック関数を取る
function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
    const result = n1 + n2;
    cb(result);
}

addAndHandle(10, 20, (result) => {
    console.log(result);
});
