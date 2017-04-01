var http = require('http')
var express = require('express')
var app = express()

var resources = require('./resources')
resources(app)

app.use(express.static('./public'))

http.createServer(app).listen(8080, function() {
  console.log('Servidor iniciado na porta 8080')
})
