![Essential Electron screenshot](https://cloud.githubusercontent.com/assets/1305617/17867404/3e699c20-685f-11e6-9303-c98862a0540a.png)

# Essential Electron

This is a informational website about Electron, answering essential Electron concepts in plain-speak, a few diagrams and links to resources for diving in deeper.

---

This was an idea I had about a different type of documentation—or something—where text was kept short, jargon was expanded upon, concepts were defined and links provided for more in-depth explanations. I built this out because I couldn't get the idea out of my head without trying to see it through, so here it is! There is more I'll likely keep tweaking. Hopefully some will find it useful :smile:

Here's a [blog post](http://jlord.us/blog/essential-electron.html) with a bit more info.

### Build it

The site is built from one markdown file `index.md` with one bit of inline HTML for creating the styles on the vocabulary words. The markdown is pared and turned into HTML, sandwiched between `header.html` and `footer.html` through a tiny Node script in `index.js`.

The stylesheet is `style.css` and it uses system fonts unless you have Source Sans Pro installed locally.

You'll need [Node.js](https://nodejs.org) to build this site:

```bash
# Clone repository
git clone https://github.com/jlord/essential-electron.git
# Go into repository clone
cd essential-electron
# Install dependencies
npm install
# Rebuild if changes have been made to:
# index.md, footer.html, header.html
npm start
# Open the page in your browser
open index.html
```
