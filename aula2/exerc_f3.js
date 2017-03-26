//calcular desconto
function desconto(valor,perc){
    perc = perc || 25;
    desc = (valor * perc) / 100;
    console.log(valor + ' | ' + perc + '% | ' + desc);
}

valor = 100;
perc = 10;

desconto(valor,perc);