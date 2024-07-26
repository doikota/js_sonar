# JavaScript で SonarQube を使うサンプルです。

### git clone した後に、node の環境を準備します。

```
npm init
```

### JavaScript のプログラムを実行します。

```
node src/index.js
```

### jest を導入します。

```
npm install --save-dev jest
```

### package.json ファイルの中の scripts セクションにて、jest をテスト実施時のフレームワークに指定します。

```json:package.json
"scripts": {
  "test": "jest"
},
```

### テストを実行します。

```
npm run test
```

### カバレッジを表示します。

```
npm run test -- --coverage
```

### SonarQube にテスト結果とカバレッジレポートを送付します。

```
sonar-scanner
http://localhost:9000/
```
