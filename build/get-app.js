var App = require('../app-config.js');
var path = require('path');

var merge = function(a, b) {
  return {
    css: (a.css || []).concat(b.css || []),
    js: (a.js || []).concat(b.js || [])
  }
}

exports.entries = function() {
  var result = {}
  App.pages.forEach(p => {
    result[p.entry] = path.resolve(App.basePath, p.entry)
  })
  return result
}

exports.templates = function() {
  var isDev = process.env.NODE_ENV === 'development'
  return App.pages.map(p => {
    return {
      title: p.title,
      filename: p.filename,
      dev: isDev,
      config: App.config,
      template: path.resolve(__dirname, '../index.tpl'),
      cdn: merge(App.cdn, p.cdn),
      chunks: ['vendor', 'manifest','commons', p.entry]
    }
  })
}

exports.externals = function() {
  return App.externals
}
