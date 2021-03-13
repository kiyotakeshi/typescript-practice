const button = document.querySelector('button');

// 必ず取得できる場合は null にならないことを宣言 !
// input 要素であることが確実なので指定
const input1 = document.getElementById('num1')! as HTMLInputElement; 
const input2 = document.getElementById('num2')! as HTMLInputElement; 

function add(num1: number, num2: number) {
    return +num1 + +num2;
}

button.addEventListener('click', function () {
    // input form の value property の値は文字列
    console.log(add(+input1.value, +input2.value));
});
