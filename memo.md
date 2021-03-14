- compile
    - Babel のように、古いブラウザで新しい JavaScript の機能が動くようにコンパイルしてくれる

```shell
$ tsc --version
Version 4.2.3

tsc understanding-ts/using-ts.ts
```

- 開発用サーバを立ち上げておく

```shell
npm init

# 開発だけ必要な依存関係を追加
npm install --save-dev lite-server

# package.json と同じディレクトリにある index.html を表示
npm start
```

- .ts のコンパイルも自動で行う

```shell
tsc app.ts --watch
```

- ディレクトリ単位でコンパイルを自動で行う

```shell
# プロジェクトのルートフォルダで実行
tsc --init

ls tsconfig.json

tsc --watch
```
