const http = require('http')
const fs = require('fs')
const httpPort = 80

module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? ''
    : '/'
}