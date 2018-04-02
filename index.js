const space = require('to-space-case-g')
const regex = /\s(\w)/g
const toCamelCase = string => space(string).replace(regex, (matches, letter) => letter.toUpperCase())

module.exports = toCamelCase
