//calcular desconto
function desconto(valor,perc){
    perc = perc || 25;
    return (valor * perc) / 100;
}

valor = 100;
perc = 20;
vl_desc = desconto(valor,perc);
console.log(valor + ' | ' + perc + ' | ' + vl_desc);