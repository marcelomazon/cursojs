function nomeCompleto(){
    return this.nome + ' ' + this.sobrenome;
}

global.nome = "joão";
global.sobrenome = "da silva";

console.log(nomeCompleto())
