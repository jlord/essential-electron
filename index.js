var fs = require('fs')
var marked = require('marked')

var markdown = fs.readFileSync('index.md').toString()
var header = fs.readFileSync('header.html').toString()
var footer = fs.readFileSync('footer.html').toString()

var html = marked(markdown)

fs.writeFileSync('index.html', header + html + footer)

console.log('(•◡•)/\n')
