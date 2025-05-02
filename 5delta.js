function delta(a,b,c){
    let resultado = ((b ** 2)-(4 * a * c));
    return resultado;
}

let a = 2
let b = 8
let c = (-24)
let calculo = delta(a,b,c)

console.log(calculo)