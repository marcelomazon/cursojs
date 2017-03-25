//calcular imc
function imc(peso,altura){
    return (peso / (altura * altura));
}
peso = 80;
altura = 1.77;

imc = imc(peso,altura).toFixed(2);

console.log('Peso: ' + peso + '; Altura: ' + altura + '; IMC => '+imc);