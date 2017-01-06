require('harmony-reflect')

require('babel-register')({
  ignore: (fname) => {
    if (fname.indexOf('node_modules') >= 0) {
      return true
    }
    return false
  }
})


const jsdom = require('jsdom').jsdom

global.document = jsdom('<html><body><div id="app"></div></body></html>')
global.window = document.defaultView
Object.keys(document.defaultView).forEach((property) => {
  if (typeof global[property] === 'undefined') {
    global[property] = document.defaultView[property]
  }
})

global.navigator = {
  userAgent: 'node.js'
}