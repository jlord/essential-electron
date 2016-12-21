var fs = require('fs')
var marked = require('marked')

var translations = ['jp']
var header = fs.readFileSync('header.html').toString()
var footer = fs.readFileSync('footer.html').toString()

var markdown = fs.readFileSync('index.md').toString()
var html = marked(markdown)

fs.writeFileSync('index.html', header + html + footer)

buildTranslations()

// TODO make translations dir
function buildTranslations() {
  translations.forEach(function (lang) {
    var langFile = 'index-' + lang
    var langMarkdown = fs.readFileSync(langFile + '.md').toString()
    var langHtml = marked(langMarkdown)
    fs.writeFileSync(langFile + '.html', header + langHtml + footer)
  })
}

console.log('(•◡•)/\n')
