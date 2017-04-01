var http = require('http')
var express = require('express')
var bodyParser = require('body-parser')
var resources = require('./resources')
var app = express()

app.use(express.static('./public'))
app.use(bodyParser.json()) // os retornos das requisições serão interpretados como json
resources(app)

http.createServer(app).listen(8080, function(){
    console.log('Servidor aberto na porta 8080')
})

// criar uma função que retorna uma função com todos os objetos criados