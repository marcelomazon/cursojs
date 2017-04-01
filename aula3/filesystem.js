var fs = require("fs"),
    path = require("path");

var pasta = "c:/cursojs";
//var regex = /\.log$/i;

fs.readdir(pasta, function (erro, arquivos) {
    if (erro) {
        console.log("Falha ao listar arquivos de "+p);
        return;
    }

    arquivos.map(function (item) {
        return path.join(pasta, item); // concatenar pasta + arquivo
    }).filter(function (item) {
        return fs.statSync(item).isFile();
    }).forEach(function (item) {
        if (path.extname(item) == '.js')
            console.log("%s (%s)", item, path.extname(item));
    });
});