var fs = require('fs')
var path = require('path')

var pastaBase = process.argv[2] || 'c:/windows'

function lerPasta(pasta) {
  function lerPastaToda(erro, arquivos) {
    if (erro) {
      console.log('Deu erro!!!', erro)
      return;
    }
    for (var posicao in arquivos) {
      var nomeArquivo = arquivos[posicao]
      var nomeCompleto = path.join(pasta, nomeArquivo)
      //if (fs.accessSync(nomeCompleto, fs.constants.R_OK)) {
        if (fs.statSync(nomeCompleto).isDirectory()) {
          lerPasta(nomeCompleto)
        }
      //}
      //if (nomeCompleto.toLowerCase().endsWith('.log')) {
        console.log(nomeArquivo, nomeCompleto)
      //}
    }
  }
  fs.readdir(pasta, lerPastaToda)
}

lerPasta(pastaBase)
