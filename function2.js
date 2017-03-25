console.log(primeiraFuncao);
console.log(segundaFuncao);

// scopo global, carregada junto com todo script
function primeiraFuncao(){
    console.log('oi');
}

// function reference só existe após o ponto de sua declaração
var segundaFuncao = function(){
    console.log('tchau');
};

console.log(primeiraFuncao);
console.log(segundaFuncao);