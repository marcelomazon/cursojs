module.exports = function(app) {
  app.get('/api/estados', function(req, resp){
    resp.json([
      {sigla:'SC', nome: 'Santa Catarina'},
      {sigla:'RS', nome: 'Rio Grande do Sul'},
      {sigla:'PR', nome: 'Paraná'}])
  })
}
