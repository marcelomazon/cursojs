var estados = require('./estados')
var clientes = require('./clientes')

module.exports = function(app) {
  estados(app);
  clientes(app);
}