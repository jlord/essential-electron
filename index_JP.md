# Essential Electron

Electronについての簡潔で飾らない話

| Background |
| --- |
| [Electronとは？](#electronとは) |
| [なぜ重要？](#なぜ重要) |
| [では、どうやって？](#ではどうやって) |
| [開発はどのように？](#開発はどのように) |

| Development |
| --- |
| [前提条件](#前提条件) |
| [2つのプロセス](#2つのプロセス) |
| [メインプロセス](#メインプロセス) |
| [レンダラプロセス](#レンダラプロセス) |
| [こう考えてみよう](#こう考えてみよう) |

| Development Cont'd |
| --- |
| [通信を絶やさない](#通信を絶やさない) |
| [プロセスはひとまとめに](#プロセスはひとまとめに) |
| [クイックスタート](#クイックスタート) |
| [パッケージ化](#パッケージ化) |
| [さらに](#さらに) |

## electronとは？

Electronは<span class="def">JavaScript、HTML、CSS</span>を使ってデスクトップアプリケーションを作ることができる<span class="def">ライブラリ</span>です。作ったアプリケーションはMac、Windows、Linuxで動かせます。

### 次は：[なぜ重要？](#なぜ重要)

### 定義：
* __JavaScript、HTML、CSS__ はWeb用の言語で、Webサイトの基本的な構成要素です。Chromeなどのブラウザは、コードをふだん目にするグラフィックに変えて表示します。
* __Electronはライブラリです__ Electronはコードですが、再利用でき、自分で書き起こす必要がありません。ユーザはその上にプロジェクトを構成します。

### 参考資料
* [Apps built on Electron](http://electron.atom.io/apps/)
* [Electron API Demos](http://electron.atom.io/#get-started)（Electronで何ができるかをみてください）

## なぜ重要？

一般に、デスクトップアプリケーションは各オペレーティングシステムの<span class="def">ネイティブ言語</span>で書かれています。ということは、アプリケーション1つに、3つのバージョンを書く3つのチームが必要になるかもしれません。ElectronならばWebページ用の言語を使って、アプリケーションを1回作れば済みます。

### 次は：[では、どうやって？](#ではどうやって)

### 定義：
* __ネイティブ（OS）言語__ 主要OSの構成に使われている言語は（ほぼ）次のとおりです。MacはObjective-C、LinuxはC言語、WindowsはC++言語。

## では、どうやって？

Electronは<span class="def">Chromium</span>と<span class="def">Node.js</span>を、ファイルオープンのダイアログボックス、通知、アイコンなどといったOS固有の機能向けの一連のカスタム<span class="def">API</span>に、結びつけています。

<img src="http://jlord.us/essential-electron/imgs/components.png" alt="Electron components"> 
<em>注釈: 
Chromium／Webページ作成用
Node.js／ファイルシステムとネットワーク用
ネイティブAPI／3つのOS用</em>

### 次は： [開発はどのように？](#開発はどのように)

### 定義：
* __API__ Application Program Interfaceには、ライブラリを使えるように一連の機能が記述されています。
* __Chromium__ Googleにより作られている、GoogleのブラウザであるChromeに使われたオープンソースのライブラリです。
* __Node.js__（またはNode） サーバ用にJavaScriptを記述するツールです。ファイルシステムやネットワークへアクセスします（手元のコンピュータがサーバにもなるのです！）。

### 参考資料：
* [Node.js](https://nodejs.org/en/)
* [Chromium](https://www.chromium.org/)
* [Electron blog post: Using Node as a Library](http://electron.atom.io/blog/2016/08/08/electron-internals-using-node-as-a-library)（かなり詳しいです）
* [Electron versioning](http://electron.atom.io/docs/tutorial/electron-versioning/)

## 開発はどのように？

Electronによる開発は、シームレスに<span class="def">Nodeを利用</span>できるWebページを構築するようなものです。あるいは、HTMLやCSSでインターフェースを作成できるようなNodeのアプリケーションを構築するようなものと言えます。その上、<span class="def">単一のブラウザ</span>、つまり<span class="def">最新のChrome</span>だけに対して設計すればよいようになっています。

### 次は：[前提条件](#前提条件)

### 定義：
* __Nodeを利用する__ それだけではありません。完全なNode APIを自由に使える上に、Node用のパッケージマネージャであるnpmにホストされた既存の300,000を超えるモジュールを利用できます。
* __単一のブラウザ__ 全てのブラウザが同じではありません。Webデザイナや開発者は、どのブラウザでもサイトが同じに見えるよう、余計な作業をしなくてはならないことがよくあります。
* __最新のChrome__  JavaScriptの最新の改訂版であるES2015を90％以上サポートしており、CSS Variablesのような素晴らしい機能を備えています。

### 参考資料：
* [Can I Use?](http://caniuse.com/#home)（各ブラウザがサポートしている内容を確認します）
* [Updates to Chrome](https://blog.chromium.org/)（Chromiumのブログ）
* [CSS Variables](https://developers.google.com/web/updates/2016/02/css-variables-why-should-you-care?hl=en)

## 前提条件

Electronには、WebサイトとJavaScriptという2つの構成要素があります。そのため、開発に着手する前に、その2つをよく知っておく必要があります。HTML、CSS、JavaScriptに関するチュートリアル等を確認して、自分のコンピュータにNodeをインストールしておいてください。

### 定義：
* __率直に言うと__、Webサイトの作成方法やNodeの書き方を一晩で学ぶことはできませんが、以下のリンクは入門にきっと役立つことでしょう。

### 次は：[2つのプロセス](#2つのプロセス)

### 参考資料：
* [Install Node](https://nodejs.org/en/)（LTS版を選択してください）
* [NodeSchool Tutorials](https://nodeschool.io/ja/)（learnyounodeに挑戦してみてください）
* [JS for Cats](http://jsforcats.com/)（Max Ogden著）
* [Learn to Code HTML & CSS](http://learn.shayhowe.com/html-css/)（Shay Howe著）
* [CSS Tricks](https://css-tricks.com/)（CSSのベストプラクティスとヒントを学ぶ）
* [Mozilla Developer Network](https://developers.google.com/web/updates/2016/02/css-variables-why-should-you-care?hl=en)（WebサイトとJavaScriptの辞書のようなもの）

## 2つのプロセス

Electronには、メインとレンダラという2種類のプロセスがあります。そして、それぞれ、または両方のプロセスで稼働する<span class="def">モジュール</span>があります。レンダラプロセスが、アプリケーションにおける各ウィンドウであるのに対して、メインプロセスは、どちらかというと背後に隠れているプロセスです。

### 定義：
* __モジュール__ ElectronのAPIは、その働きごとにまとめられています。例えば、```dialog```モジュールには、ファイルオープン、ファイル保存、アラートのようなネイティブダイアログ用のAPIが全てあります。

### 次は：[メインプロセス](#メインプロセス)

### 参考資料：
* [Electron APIs List](http://electron.atom.io/docs/api/)

## メインプロセス

メインプロセス(一般的に、```main.js```という名前のファイルです)は、あらゆるElectronアプリケーションにおけるエントリーポイントとなります。オープンからクローズまで、アプリケーションの生命を管理します。メインプロセスはまた、<span class="def">ネイティブな要素を呼び出し</span>、それぞれの新たなレンダラプロセスをアプリケーション内に作成します。メインプロセスには完全なNode APIがビルトインされています。

<img src="http://jlord.us/essential-electron/imgs/main.png" alt="main process diagram"> 

<em>注釈：メインプロセス
取得する内容
* Node.js API
* Electronのメインプロセスモジュール

一般的なタスク
* レンダラプロセスの作成
* ネイティブな要素の呼び出し
* アプリケーションの開始と終了</em>

### 定義：
* __ネイティブな要素の呼び出し__ ダイアログのオープンや他のネイティブなオペレーティングシステムのインタラクションは、リソースを集中的に使うので、レンダラプロセスを妨げないようにメインプロセスで実行されます。

### 次は：[レンダラプロセス](#レンダラプロセス)

### 参考資料：
* [Electron APIs List](http://electron.atom.io/docs/api/)

## レンダラプロセス

レンダラプロセスは、アプリケーションにおけるブラウザウィンドウです。メインプロセスとは異なり、複数のプロセスの存在が可能で、<span class="def">それぞれが独立</span>しています。またレンダラプロセスは<span class="def">隠す</span>こともできます。通常レンダラプロセスは```index.html```という名前です。これは典型的なHTMLのファイルのようですが、Webブラウザとは異なり、Electronでは全てのNode APIを利用できます。

<img src="http://jlord.us/essential-electron/imgs/renderer.png" alt="renderer process diagram"> 
<em>
注釈：レンダラプロセス

取得する内容
* Node.ｊｓ API
* DOM API
* Electronレンダラプロセスモジュール

一般的なタスク：
* HTMLとCSSによってWebページを設計する
* JavaScriptページのインタラクション
</em>

### 定義：
* __それぞれが独立している__ 各レンダラプロセスは別個のプロセスであり、1つが故障しても他のプロセスには影響しません。
* __隠す__ ウィンドウを隠すように設定して、バックグラウンドでコードだけを実行するようにできます。

### 次は：[こう考えてみよう](#こう考えてみよう)

### 参考資料：
* [Electron APIs List](http://electron.atom.io/docs/api/)

## こう考えてみよう

Chrome（または別のWebブラウザ）における各タブ・各Webページは、Electronにおけるレンダラプロセス1つに相当します。Chromeの全タブを閉じてもChromeが残っている状態がElectronのメインプロセスに似ていて、新しいウィンドウを開いたり、アプリケーションを終えたりすることができます。

<img src="http://jlord.us/essential-electron/imgs/like-this.png" alt="Chrome comparison of the two processes"> 
<em>
注釈：メインプロセス、レンダラプロセス
</em>

### 参考資料：
* [Differences between Main and Renderer Process](http://electron.atom.io/docs/tutorial/quick-start/#differences-between-main-process-and-renderer-process)

### 次は：[通信を絶やさない](#通信を絶やさない)

## 通信を絶やさない

メインプロセスとレンダラプロセスは、それぞれ違うタスクに責任を負っていることから、互いに通信可能であることが必要です。そのためにプロセス間通信（<span class="def">IPC</span>）があります。IPCを用いて、メインプロセスとレンダラプロセス間でメッセージをやり取りします。

<img src="imgs/ipc.png" alt="IPC diagram"> 
*注釈：プロセス間でメッセージを送る*

### 定義：
* __IPC__ メインプロセスとレンダラプロセスはそれぞれIPCモジュールを持っている。

### 次は：[プロセスはひとまとめに](#プロセスはひとまとめに)

## プロセスはひとまとめに

ElectronアプリケーションはNodeアプリケーションと同様に、<span class="def">```package.json```ファイル</span>を使います。そこでどのファイルがメインプロセスか、すなわち、どこでElectronにアプリケーションをスタートさせるかを定義させています。そしてメインプロセスはレンダラプロセスを作り、IPCを用いて2つのプロセス間でメッセージを送ることができます。

<img src="http://jlord.us/essential-electron/imgs/app-files.png" alt="Electron app components diagram"> 
*注釈：1. アプリの開始ポイントを決める。2. アプリを起動し、レンダラプロセスを作成する。3. アプリのインターフェースをレイアウトし整える。4. IPCを用いてメインプロセスでタスクを実行し、情報を得る。*

### 定義：
* __```package.json```ファイル__ Nodeアプリケーションでは一般的なファイルであり、プロジェクトについてのメタデータと依存関係のリストを含んでいる。

### 次は：[クイックスタート](#クイックスタート)

## クイックスタート

Electronクイックスタートリポジトリは```package.json```や```main.js```そして```index.html```による最小構成のElectronアプリです。ここで学んできたもので、取りかかりには最適です。また選択したフレームワークでテンプレート用のボイラープレートをチェックしておきましょう。

### 次は：[パッケージ化](#パッケージ化)

### 参考資料：
* [Electron Quick Start](https://github.com/electron/electron-quick-start)
* [Awesome Electron: Boilerplates](http://electron.atom.io/community/#boilerplates)

## パッケージ化

アプリをいったん構築したら、MacやWindowsあるいはLiux用に<span class="def">コマンドラインツール</span>```electron-packager```でパッケージ化することができます。そのために```package.json```にスクリプトを加えます。以下でMacやWindowsのアプリケーションストアでアプリを得るためのリソースを確認してください。

### 次は：[さらに](#さらに)

### 定義：
* __コマンドラインツール__ 端末でコマンドを送信することによって相互作用させるプログラム。

### 参考資料：
* [electron-packager](https://github.com/electron-userland/electron-packager)
* [Electron API Demos packaging scripts](https://github.com/electron/electron-api-demos/blob/master/package.json#L15-L18)
* [Mac App Store Electron Guide](http://electron.atom.io/docs/tutorial/mac-app-store-submission-guide/)
* [Windows App Store Electron Guide](http://electron.atom.io/docs/tutorial/windows-store-guide/)

## さらに

ここでのコンセプトだけで十分、事足りるでしょうが、もちろんまだ学ぶべきことはあります。ここにさらに参考となる情報を記しておきます。

### 参考資料：
* [Full Electron docs](http://electron.atom.io/docs/)
* [Awesome Electron: tools, videos, components, meetups](http://electron.atom.io/community/)
* [Spectron](http://electron.atom.io/spectron/)(Electronのテストライブラリ)
* [Devtron](http://electron.atom.io/devtron/)(Electronアプリを精査する)

