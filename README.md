# File Manipulator Program（node.js版）
![Node.js](https://img.shields.io/badge/Node.js-339933?logo=node.js&logoColor=white)

CLIで指定されたコマンドを実行し、ファイル操作の処理を行うプログラムです。

## コマンド一覧

### ・ reverse inputpath outputpath
inputpath にあるファイルを受け取り、outputpath に inputpath の内容を逆にした新しいファイルを作成します。
### ・ copy inputpath outputpath
inputpath にあるファイルのコピーを作成し、outputpath として保存します。
### ・ duplicate-contents inputpath n
inputpath にあるファイルの内容を読み込み、その内容を複製し、複製された内容を inputpath に n 回複製します。
### ・ replace-string inputpath needle newstring
inputpath にあるファイルの内容から文字列 'needle' を検索し、'needle' の全てを 'newstring' に置き換えます。
## Usage
````bash
$ node src/index.js {command} {...args}

# reverse の場合
$ node src/index.js reverse inputpath outputpath
````
