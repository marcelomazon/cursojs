//calcular imc
/*function imc(peso,altura){
    return (peso / (altura * altura));
}
peso = 80;
altura = 1.77;

imc = imc(peso,altura).toFixed(2);

console.log('Peso: ' + peso + '; Altura: ' + altura + '; IMC => '+imc);
*/

// correção....
function imc(){
    var peso, alteura;
    if (typeof arguments[0] === 'object'){
        peso = arguments[0].peso;
        altura = arguments[0].altura;
    } else {
        peso = arguments[0];
        altura = arguments[1];
    }
    return (peso / (altura * altura));
}

console.log{
    'Calcular', imc({nome:'Marcelo',peso:80,altura:1.77});
}