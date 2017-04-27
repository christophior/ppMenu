var menubar = require('menubar')

var mb = menubar({ transparent: true, resizable: false })

mb.on('ready', function ready () {
  console.log('app is ready')
})
