const http = require('http')
const fs = require('fs')
const httpPort = 80

http.createServer((req, res) => {
  fs.readFile('index.html', 'utf-8', (err, content) => {
    if (err) {
      console.log('Невозможно открыть файл "index.html".')
    }

    res.writeHead(200, {
      'Content-Type': 'text/html; charset=utf-8'
    })

    res.end(content)
  })
}).listen(httpPort, () => {
  console.log('Сервер запущен на: http://localhost:%s', httpPort)
})

module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? ''
    : '/',
    filenameHashing: false,
    chainWebpack: config => {
        config.module
            .rule('svg')
            .use('file-loader')
            .options({
                name: '[name].[ext]',
                outputPath: ''
            });
    }
}