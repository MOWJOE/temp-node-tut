// Modules - Encapsulated code (only share minimum or only sharing what we want)
//CommonJS, every file is module (by default)

const names = require('./4-names.js')
const sayHi = require('./5-utils.js')

require('./7-mind-grenade')

const data = require('./6-alternative-flavor')

sayHi('susan')
sayHi(names.john)
sayHi(names.peter)
