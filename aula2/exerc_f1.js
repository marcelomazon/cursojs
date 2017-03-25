//exercicio 1 
// calcular a media dos parametros
function media(){
    qtd_args = arguments.length;
    soma = 0;
    console.log('total args: '+qtd_args);
    for (i=0;i<qtd_args;i++){
        soma += arguments[i];
        console.log('soma: '+soma);
    }

    media = soma / qtd_args;
    console.log('Meida: '+media);
}

media(5,6,7,8,9);