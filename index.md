# Essential Electron

Concise plain-speak about Electron.

## What is Electron?

Electron is a <span class="def">library</span> you can use to build desktop applications with <span class="def">JavaScript, HTML and CSS</span>. These applications can be packaged to run on Mac, Windows and Linux computers as well as be placed in the Mac and Windows app stores.

### Next: [Why is this important?](#why-is-this-important-)

### Definitions:
- **JavaScript, HTML and CSS** Are web languages, meaning they are the building blocks of websites and browsers like Chrome know how to turn this code into the visual graphics you see.
- **Electron is a library** Electron is code that you can re-use and not have to write yourself. You use it to build your project on top of.

### Resources:
- [Apps built on Electron]()

## Why is this important?

Typically, desktop applications for each operating system are written in each's <span class="def">native language</span>. That can mean having three teams writing three versions of your app. Electron enables you to write your app once and with web languages.

### Next

- [How, even?](#how-even-)

### Definitions:
- **native (operating system) language** These are languages that the major operating systems are (mostly) built with: Mac, Objective C; Linux, C; Windows, C++.

## How, even?

Electron combines <span class="def">Chromium</span> and <span class="def">Node.js</span> with a set of custom <span class="def">APIs</span> for native operating system functions like open file dialogs, notifications, icons and more. Both Chromium and Node are built on V8 and in Electron they share one instance of it.

![Electron components](imgs/electron-components.png)

### Next: [What is developing with Electron like?](#what-is-developing-with-Electron-like-)

### Definitions:
- **API** Application Program Interface describes the set of methods made available for you to use (aka interface) a library with.
- **Chromium** Created by Google, this is the open source library that the browser Chrome is built on.
- **Node.js** A tool for writing JavaScript on servers (your computer is also a server!).
- **V8** Chrome and Node.js use V8, an engine that translates JavaScript into the code that can talk directly to the computer or server.

### Resources:
- [Node.js](https://nodejs.org)
- [Chromium]()
- [Electron blog post]()

## What's developing like?

Developing with Electron is like building web pages that you can seamless use Node in (really!) and only need to <span class="def">work in one browser</span>—the latest version of that browser and all the goodies that come along with it like <span class="def">ES2015</span> support and CSS Variables.

### Next: [How do I start?](#how-do-i-start-)

### Definitions:
- **Work in one browser** Not all browsers are the same and web designers and developers often have to go the extra mile to make one site look the same on each.
- **ES2015** Chromium's V8 supports over 90% of ES2015, the latest updates to JavaScript.

### Resources:
- [New Chrome](https://nodejs.org)
- [Chromium]()
- [CSS Variables]()
