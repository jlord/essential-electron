# Essential Electron

Concise plain-speak about Electron.

| Background |
| --- |
| [What is Electron?](#what-is-electron-) |
| [Why is this important?](#why-is-this-important-) |
| [How, even?](#how-even-) |
| [What is developing like?](#what-s-developing-like-) |

| Development |
| --- |
| [Prereqs](#prereqs) |
| [Two Processes](#two-processes) |
| [Main Process](#main-process) |
| [Renderer Process](#renderer-process) |
| [Think of it like this](#think-of-it-like-this) |

| Development Cont'd |
| --- |
| [Stay in touch](#stay-in-touch) |
| [Put it all together](#put-it-all-together) |
| [Quick start](#quick-start) |
| [Packaging](#packaging) |
| [More 参考资料](#more-参考资料) |

Read this in [Japanese](index-jp.html)[Chinese](index-zh.html).

## Electron 是什么？

Electron 是一个可以用 <span class="def">JavaScript、HTML 和 CSS </span>构建桌面应用程序的<span class="def">库</span>。这些应用程序能打包到 Mac、Windows 和 Linux 系统上运行，也能上架到 Mac 和 Windows 的 App Store。

### 下一节: [为什么它如此重要？](#why-is-this-important-)

### 定义:
- **JavaScript, HTML and CSS** 都是 Web 语言，它们是组成网站的一部分，浏览器（如 Chrome）懂得如何将这些代码转为可视化图像。
- **Electron 是一个库** Electron 对底层代码进行抽象和封装，让开发者能在此之上构建项目。

### 参考资料:
- [由Electron构建的项目](http://electron.atom.io/apps)
- [Electron API Demos](http://electron.atom.io/#get-started) (看看你可以用Electron做什么)

## 为什么它如此重要？

通常来说，每个操作系统的桌面应用都由各自的<span class="def">原生语言</span>进行编写，这意味着需要 3 个团队分别为该应用编写相应版本。而 Electron 则允许你用 Web 语言编写一次即可。

### 下一节: [它由什么组成？](#how-even-)

### 定义:
- **原生（操作系统）语言** 用于开发主流操作系统应用的原生语言的对应关系（大多数情况下）：Mac 对应 Objective C、Linux 对应 C、Windows 对应 C++

## 它由什么组成？

Electron 结合了 <span class="def">Chromium</span>  、 <span class="def">Node.js</span> ，还有像打开文件窗口、通知、图标等这样的用于调用操作系统本地功能的 API。

![Electron components](imgs/components.png)

### 下一节: [开发体验如何?](#what-s-developing-like-)

### 定义:
- **API** 应用程序接口描述了可供您使用库的一组功能。
- **Chromium** 由Google创建，这是Google Chrome浏览器使用的开源库。
- **Node.js** （或者叫 Node）用于在服务器上编写JavaScript，访问文件系统和网络的工具（您的计算机也是服务器！）

### 参考资料:
- [Node.js](https://nodejs.org)
- [Chromium](http://chromium.org)
- [Electron blog post: Using Node as a Library](http://electron.atom.io/blog/2016/08/08/electron-internals-using-node-as-a-library) (deep dive)
- [Electron 版本发展](http://electron.atom.io/docs/tutorial/electron-versioning/)

## 开发体验如何？

基于 Electron 的开发就像在开发网页，而且能够无缝地 <span class="def">使用 Node</span>。或者说：在构建一个 Node 应用的同时，通过 HTML 和 CSS 构建界面。另外，你只需为<span class="def">一个浏览器（最新的 Chrome）</span>进行设计（即无需考虑兼容性等）。

### 下一节: [前提条件](#prereqs)

### 定义:
- **使用 Node** 这还不是全部! 除了完整的Node API之外，您还可以使用已经编写和托管在npm上的超过30万个模块，这是Node的包管理器。
- **一个浏览器** 并非所有的浏览器都是一样的，网页设计师和开发人员经常不得不多一些时间才能让网站在每个浏览器上的效果看起来都一样。
- **最新版 Chrome** 可使用超过90%的ES2015特性，最新的JavaScript，以及炫酷的特性，如CSS变量。

### 参考资料:
- [我可以使用?](http://caniuse.com/#home) (查看每个浏览器支持的内容)
- [更新到 Chrome](http://blog.chromium.org) (Chromium 博客)
- [CSS 变量](https://developers.google.com/web/updates/2016/02/css-variables-why-should-you-care?hl=en)

## 前提条件

由于Electron的两大组件都是网站和JavaScript，因此在开始之前，您需要这两者的相关经验。查看一些关于HTML，CSS和JS的教程，并在您的计算机上安装Node。

### 定义:
- **让我们真正开始**, 学习制作网站和编写Node并不是一夜之间的事情，但希望以下链接可以帮助您入门。

### 下一节: [两个进程](#two-processes)

### 参考资料:
- [安装 Node](https://nodejs.org) (chose the LTS version)
- [NodeSchool Tutorials](http://nodeschool.io) (try learnyounode)
- [JS for Cats](http://jsforcats.com) (by Max Ogden)
- [学习 HTML & CSS 编程](http://learn.shayhowe.com/html-css) (by Shay Howe)
- [CSS Tricks](https://css-tricks.com) (learn CSS best practices and tips)
- [Mozilla Developer Network](https://developers.google.com/web/updates/2016/02/css-variables-why-should-you-care?hl=en) (like a dictionary for websites and JavaScript)

## 两个进程

Electron 有两种进程：『主进程』和『渲染进程』。部分<span class="def">模块</span>只能在两者之一上运行，而有些则无限制。主进程更多地充当幕后角色，而渲染进程则是应用程序的各个窗口。

### 定义:
- **模块** Electron 的 API 是根据它们的用途进行分组。例如： `dialog`  模块拥有所有原生 dialog 的 API，如打开文件、保存文件和警告等弹窗。

### 下一节: [主进程](#main-process)

### 参考资料:
- [Electron APIs List](http://electron.atom.io/docs/api/)

## 主进程

主进程，通常是一个命名为 `main.js` 的文件，该文件是每个 Electron 应用的入口。它控制了应用的生命周期（从打开到关闭）。它既能<span class="def">调用原生元素</span>，也能创建新的（多个）渲染进程。另外，Node API 是内置其中的。

![main process diagram](imgs/main.png)

### 定义:
- **调用原生元素** 打开 diglog 和其它操作系统的交互均是参考资料密集型操作，因此都需要在主进程完成,从而不会中断渲染程序进程。

### 下一节: [渲染进程](#renderer-process)

### 参考资料:
- [Electron APIs List](http://electron.atom.io/docs/api/)

## 渲染进程

渲染进程是应用的一个浏览器窗口。与主进程不同，它能存在多个,并且相互独立.他们也能是<span class="def">隐藏</span>的。主窗口通常被命名为 `index.html` 。它们就像典型的 HTML 文件，但 Electron 赋予了它们完整的 Node API。因此，这也是它与浏览器的区别。

![renderer process diagram](imgs/renderer.png)

### 定义:
- **相互独立** 每个渲染进程都是独立的，这意味着某个渲染进程的崩溃，也不会影响其余渲染进程。
- **隐藏** 你可以设置隐藏一个窗口，让它在后台执行代码。

### 下一节: [像这样想](#think-of-it-like-this)

### 参考资料:
- [Electron APIs List](http://electron.atom.io/docs/api/)

## 像这样想

在Chrome（或其他网络浏览器）中，每个选项卡及其网页就像Electron中的单个渲染器进程。如果关闭所有选项卡，Chrome仍然存在，这就像您的主进程一样，您可以打开新窗口或退出应用程序。

![Chrome comparison of the two processes](imgs/like-this.png)

### 参考资料:
- [主进程和渲染进程的差异](http://electron.atom.io/docs/tutorial/quick-start/#differences-between-main-process-and-renderer-process)

### 下一节: [保持通讯](#stay-in-touch)

## 保持通讯

由于主进程和渲染进程各自负责不同的任务，而对于需要协同完成的任务，它们需要相互通讯。<span class="def">IPC</span>就为此而生，它提供了进程间的通讯。但它只能在主进程与渲染进程之间传递信息（即渲染进程之间不能进行直接通讯）。

![IPC diagram](imgs/ipc.png)

### 定义:
- **IPC** 主进程和渲染进程各自拥有一个 IPC 模块。

### 下一节: [总而言之](#put-it-all-together)

## 总而言之

Electron 应用就像 Node 应用，它也依赖一个 <span class="def">`package.json` </span> 文件。该文件定义了哪个文件作为主进程，并因此让 Electron 知道从何启动应用。然后主进程能创建渲染进程，并能使用 IPC 让两者间进行消息传递

![Electron app components diagram](imgs/app-files.png)

### 定义:
- **`package.json` 文件** 这是Node应用程序中的一个常用文件，其中包含有关该项目的元数据和一系列依赖关系。

### 下一节: [Quick start](#quick-start)

## Quick start

Electron Quick Start存储库是一个简单的Electron应用程序，包含您在此处了解到的 `package.json` ，`main.js` 和 `index.html`  - 一个开始的好地方！您也可以像选择框架一样去从模板库中选择一个模板boilerplates。

### 下一节: [打包](#packaging)

### 参考资料:
- [Electron Quick Start](https://github.com/electron/electron-quick-start)
- [Awesome Electron: Boilerplates](http://electron.atom.io/community#boilerplates)

## 打包 

一旦您的应用程序构建完成，您可以使用Mac，Windows或Linux的命令行工具`electron-packager` 将其打包。为此添加脚本到你的 `package.json` 。请查看下面的资源，以便在Mac和Windows应用商店中获取您的应用。

### 下一节: [更多参考资料](#more-参考资料)

### 定义:
- **command-line tool** 这是一个通过在终端中传递命令来与之交互的程序。

### 参考资料:
- [electron-packager](http://github.com/electron-userland/electron-packager)
- [Electron API Demos packaging scripts](https://github.com/electron/electron-api-demos/blob/master/package.json#L15-L18)
- [Mac App Store Electron Guide](http://electron.atom.io/docs/tutorial/mac-app-store-submission-guide/)
- [Windows App Store Electron Guide](http://electron.atom.io/docs/tutorial/windows-store-guide/)

## More 参考资料

这里的概念会让你感觉很不错，但当然还有其他更多的资料。

### 参考资料:
- [Full Electron docs](http://electron.atom.io/docs/)
- [Awesome Electron: tools, videos, components, meetups](http://electron.atom.io/community/)
- [Spectron](http://electron.atom.io/spectron/) (Electron testing library)
- [Devtron](http://electron.atom.io/devtron/) (Inspect your Electron app)
