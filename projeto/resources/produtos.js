//produtos
module.exports = function(app) {
  app.get('/api/produtos', function(req, resp){
    resp.json([
        {codigo: 1, nome: 'Carro'},
        {codigo: 2, nome: 'Bicicleta'},
        {codigo: 3, nome: 'Avião'}
      ])
  });

  app.post('/api/produtos', function(req, resp){
    console.log(req.body)
    resp.json(req.body)
  });

  app.get('/api/produtos/:id', function(req, resp){})
  app.put('/api/produtos/:id', function(req, resp){});
  app.delete('/api/produtos/:id', function(req, resp){});

// estenção do express que permite interprestar o body da requisição,
//converte aquilo em um objeto
//e associa com uma propriedade de uma requisição

}
