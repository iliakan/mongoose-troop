
/*!
 * Analytics Machine - Plugins
 * Copyright(c) Thomas Blobaum
 * MIT Licensed
 */

var path  = require('path');

require('directory')(path.join(__dirname, 'lib'), function (fn, filename) {
  module.exports[filename] = fn
})
