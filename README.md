JavaScriptでSonarQubeを使うサンプルです。

git cloneした後に、nodeの環境を準備します。
> npm init

jestを導入します。
> npm install --save-dev jest

package.jsonファイルの中のscriptsセクションにて、jestをテスト実施時のフレームワークに指定します。
package.json
  "scripts": {
    "test": "jest"
  },

テストを実行します。
> npm run test

カバレッジを表示します。
> npm run test -- --coverage

SonarQubeにテスト結果とカバレッジレポートを送付します。
> sonar-scanner
