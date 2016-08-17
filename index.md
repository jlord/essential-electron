# Essential Electron

Below you'll (hopefully) find questions about Electron answered, words defined and resources linked. And concisely!

## What is Electron?

Electron is a <span class="def">library</span> you can use to build desktop applications with <span class="def">JavaScript, HTML and CSS</span>. These applications can be packaged to run on Mac, Windows and Linux computers.

### Next
- [Why is this important?](#why-is-this-important)

#### Definitions:
- **JavaScript, HTML and CSS** Are web languages, meaning they are the building blocks of websites and web browsers like Chrome and Safari know how to turn this code into the visual graphics you see.
- **Electron is a library** Electron is code that you can re-use and not have to write yourself. You can use it to write your project on top of.

## Why is this important?

Typically, desktop applications for each operating system are written in that operating systems native language. That can mean having three teams writing your app three times to work on each kind of system. With Electron, you can write your app just once and using the common web languages (HTML, CSS and JavaScript) which makes app development more

### Next

- [How](#how)

## How

Electron itself is mostly C++. It's a combination of [Chromium]() (the open source version of Google Chrome), [Node.js]() (server-side JavaScript language) and a set of APIs (Application Program Interface) for native operating system functions like open file dialogs, notifications, icons and more.

### More
- [How are Chrome and Node combined?](#how-are-chrome-and-node-combined)

## How are Chrome and Node combined

[Chromium]() and [Node.js]() projects are both built on the same JavaScript rendering engine, [V8]() (built first for Chromium). In Electron they share one version of V8, the one in Chrome. Sometimes Electron's Node needs to be patched to make this work, sometimes not.

![img of 3 parts]()

## What are the trade offs?

## What are the perks?

## What is developing on Electron like?
