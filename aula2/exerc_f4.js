//desconto do irrf
function findAliquota(vlr){
    obj = base_calculo;
    Object.keys(obj).forEach(key => {
        //console.log(key, obj[key].inicio, obj[key].fim);
        if (vlr >= obj[key].inicio && vlr <= obj[key].fim){
           //console.log(key); 
           return key;
        }
    });
}

function irrf(renda){
    aliq = findAliquota(renda);
    console.log(aliq);
    imposto  = renda - ((renda * aliq) / 100); 
    return imposto;
}

vl_renda = 3000;
base_calculo = { 
    "0"    : {"inicio": 0,       "fim" : 1903.98},
    "7.5"  : {"inicio": 1903.99, "fim" : 2826.65},
    "15"   : {"inicio": 2826.66, "fim" : 3751.05},
    "22.5" : {"inicio": 3751.06, "fim" : 4664.68},
    "22.5" : {"inicio": 3751.06, "fim" : 4664.68},
    "27.5" : {"inicio": 4664.68, "fim" : 100000000000000000000000000000000000}
};

console.log(irrf(vl_renda));