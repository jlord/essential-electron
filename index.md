# Essential Electron

Concise plain-speak about Electron.

| Background | Development | Development Cont'd |
| --- | --- |
| [What is Electron?](#what-is-electron-) | [How do I start?](#how-do-i-start-) | [Stay in touch](#stay-in-touch) |
| [Why is this important?](#why-is-this-important-) | [Electron's Two Processes](#electron-s-two-processes) | [Put it all together](#stay-in-touch) |
| [How, even?](#how-even-) | [Main Process](#main-process) |
| [What is developing like?](#what-is-developing-like-) | [Renderer Process](#renderer-process) |
|  | [Think of it like this](#think-of-it-like-this) |

## What is Electron?

Electron is a <span class="def">library</span> you can use to build desktop applications with <span class="def">JavaScript, HTML and CSS</span>. These applications can be packaged to run on Mac, Windows and Linux computers as well as be placed in the Mac and Windows app stores.

### Next: [Why is this important?](#why-is-this-important-)

### Definitions:
- **JavaScript, HTML and CSS** Are web languages, meaning they are the building blocks of websites and browsers like Chrome know how to turn this code into the visual graphics you see.
- **Electron is a library** Electron is code that you can re-use and not have to write yourself. You use it to build your project on top of.

### Resources:
- [Apps built on Electron](http://electron.atom.io/apps)

## Why is this important?

Typically, desktop applications for each operating system are written in each's <span class="def">native language</span>. That can mean having three teams writing three versions of your app. Electron enables you to write your app once and with web languages.

### Next: [How, even?](#how-even-)

### Definitions:
- **native (operating system) language** These are languages that the major operating systems are (mostly) built with: Mac, Objective C; Linux, C; Windows, C++.

## How, even?

Electron combines <span class="def">Chromium</span> and <span class="def">Node.js</span> with a set of custom <span class="def">APIs</span> for native operating system functions like open file dialogs, notifications, icons and more.

![Electron components](https://cloud.githubusercontent.com/assets/1305617/17800655/d501ab14-6599-11e6-89d2-e2f3f702cc71.png)

### Next: [What is developing like?](#what-s-developing-like-)

### Definitions:
- **API** Application Program Interface describes the set of methods made available for you to use a library with.
- **Chromium** Created by Google, this is the open source library used by Google's Chrome browser.
- **Node.js** (or Node) A tool for writing JavaScript on servers, accessing filesystems and networks (your computer is also a server!).
- **V8** Chrome and Node.js use V8, an engine that translates JavaScript into the code that can run directly on the computer.

### Resources:
- [Node.js](https://nodejs.org)
- [Chromium](http://chromium.org)
- [Electron blog post: Using Node as a Library](http://electron.atom.io/blog/2016/08/08/electron-internals-using-node-as-a-library) (deep dive)

## What's developing like?

Developing with Electron is like building web pages that you can seamlessly <span class="def">use Node in</span>—or building a Node app in which you can build an interface with HTML and CSS. And you only need to design for <span class="def">one browser</span>, the <span class="def">latest Chrome</span>.

### Next: [How do I start?](#how-do-i-start-)

### Definitions:
- **Use Node in** That's not all! In additional to the full Node API everywhere, you can make use of the over 300,000 modules already written and hosted on npm, a package manager for Node.
- **One browser** Not all browsers are the same and web designers and developers often have to go the extra mile to make one site look the same on each.
- **Latest Chrome** Use over 90% of ES2015, the latest updates to JavaScript, as well as cool features like CSS Variables.

### Resources:
- [Can I Use?](http://caniuse.com/#home) (see what each browser supports)
- [Updates to Chrome](http://blog.chromium.org) (Chromium Blog)
- [CSS Variables](https://developers.google.com/web/updates/2016/02/css-variables-why-should-you-care?hl=en)

## How do I start?

Since Electron's two components are websites and JavaScript, you'll need experience in both of those before you begin. Check out some tutorials on HTML, CSS and JS and install Node on your computer.

### Definitions:
- **Let's be real**, learning to make websites and write Node are not overnight things but hopefully the links below can get you started.

### Next: [Electron's Two Processes](#electron-s-two-processes)

### Resources:
- [Install Node](https://nodejs.org) (chose the LTS version)
- [NodeSchool Tutorials](http://nodeschool.io) (try learnyounode)
- [JS for Cats](http://jsforcats.com)
- [Learn to Code HTML & CSS](http://learn.shayhowe.com/html-css) (by Shay Howe)
- [CSS Tricks](https://css-tricks.com)
- [Mozilla Developer Network](https://developers.google.com/web/updates/2016/02/css-variables-why-should-you-care?hl=en)

## Electron's Two Processes

Electron has two processes: Main and Renderer. There are <span class="def">modules</span> that work on each or both of the two processes. The main process is more behind-the-scenes while the renderer process is each of the windows of your app that users see.

### Definitions:
- **Modules** Electron's APIs are grouped together based on what they do. For instance the `dialog` module has all the APIs for native dialogs like open file, save file and alerts.

### Next: [Main Process](#main-process)

### Resources:
- [Electron APIs List](http://electron.atom.io/docs/api/)

## Main Process

The main process is the entry point to every Electron app. It controls the life of the app, from open to close. It also <span class="def">calls the native elements</span> and creates each new browser window, aka renderer process, in the app. The full Node API is built in.

![main process diagram](https://cloud.githubusercontent.com/assets/1305617/17799473/ce14ba80-658f-11e6-9909-684dcbaa5d25.png)

### Definitions:
- **Calls the native elements** Opening dialogs and other native operating system interactions is resource intensive so it's done in the main process, leaving the renderer process uninterrupted.

### Next: [Renderer Process](#renderer-process)

### Resources:
- [Electron APIs List](http://electron.atom.io/docs/api/)

## Renderer Process

The renderer process is <span class="def">each browser window</span> that you create in your app. Each of these displays the web pages you create—but you've got the whole Node API available here, too, unlike any other web browser.

![renderer process diagram](https://cloud.githubusercontent.com/assets/1305617/17799695/831d0314-6591-11e6-8ecc-897502da234f.png)

### Definitions:
- **Each browser window** is a separate renderer process, meaning a crash in one won't affect another.

### Next: [Think of it like this](#think-of-it-like-this)

### Resources:
- [Electron APIs List](http://electron.atom.io/docs/api/)

## Think of it like this

In Chrome (or another web browser) each tab and its web page is like a single renderer process in Electron. If you close all of the tabs, Chrome is still there, this is like your main process, and you can open a new window or quit the app.

![Chrome comparison of the two processes](https://cloud.githubusercontent.com/assets/1305617/17799606/d2d65f50-6590-11e6-9e57-59650efd2dcf.png)

### Next: [Think of it like this](#think-of-it-like-this)

## Stay in touch

The main and renderer processes need to be able to communicate since they're both responsible for different tasks. For that there's <span class="def">IPC</span>: interprocess communication. Use it to pass messages between main and renderer processes.

![IPC diagram](https://cloud.githubusercontent.com/assets/1305617/17799777/506c76b0-6592-11e6-836e-3e2a18aba087.png)

### Definitions:
- **IPC** The main process and renderer process each have an IPC module to use.

### Next: [Put it all together](#put-it-all-together)

## Put it all together

Electron apps are like Node apps and use a <span class="def">`package.json` file</span>. It's there that you define which file is your main process and thus where Electron should start your app. Then that main process can create renderer processes and you'll use IPC to pass messages between the two.

![Electron app components diagram](https://cloud.githubusercontent.com/assets/1305617/17800702/36c44c6c-659a-11e6-9185-434b6d3f3b1f.png)

### Definitions:
- **`package.json` file** This is a common file in Node apps which contains metadata about the project and a list of dependencies.

### Next: You know everything about Electron now!
