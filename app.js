var userInput;
var userName;
// 何を入れてもエラーにならないのは、 any 型と同じ
userInput = 5;
userInput = 'Max';
// any 型と違い、 unknown 型を特定の型に入れるには、
// 型をチェックする必要がある(any 型よりは安全)
if (typeof userInput === 'string') {
    userName = userInput;
}
function generateError(message, code) {
    // エラーを throw する場合は、戻り値を返すことはあり得ない
    throw { message: message, errorCode: code };
}
var result = generateError('エラーが発生', 500);
console.log(result);
