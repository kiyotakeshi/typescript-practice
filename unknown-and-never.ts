let userInput: unknown;
let userName: string;

// 何を入れてもエラーにならないのは、 any 型と同じ
userInput = 5;
userInput = 'Max';

// any 型と違い、 unknown 型を特定の型に入れるには、
// 型をチェックする必要がある(any 型よりは安全)
if (typeof userInput === 'string') {
    userName = userInput;
}

// この関数が値を返すことはあり得ないと明示的に示せる
function generateError(message: string, code: number): never {
    // エラーを throw する場合は、戻り値を返すことはあり得ない
    throw { message: message, errorCode: code };
}

const result = generateError('エラーが発生', 500);
console.log(result); // undifined すら表示されない
