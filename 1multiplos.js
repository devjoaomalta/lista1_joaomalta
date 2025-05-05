let numeros1 = []    //criei a array para armazenar multiplos de 3
let numeros2 = []     //criei a array para armazenar multiplos de 5
const const1 = 3       //defini a constante 3, para executar os calculos 
const const2 = 5    //defini a constante 5, para executar os calculos 

for (let i = 1; const1 * i < 1000; i++) {        // o for é feito para executar a repetição, com i começando em 1, 3 multiplica com i até que o resultado seja menor que 1000, a iteração é feita add 1 ao i em cada repetição
    numeros1.push(const1 * i);            // a função push adiciona os números na array, enquanto executa o calculo constante = 3 x i = (iterações)
}

for (let i = 1; const2 * i < 1000; i++) {     // mesma função do outro for, mas com a constante 5
    numeros2.push(const2 * i);               // mesma função do outro push, mas armazena multiplos de 5
}

let soma = numeros1.reduce((acumulador, valorAtual) => {     // essa variável soma define a soma dos números da array "numeros1", a função reduce é responsável por fazer essa soma
    return acumulador + valorAtual;             // retorna o resultado de acumulador e valor atual, que é o total da array
}, 0);

let soma1 = numeros2.reduce((acumulador, valorAtual) => {
    return acumulador + valorAtual;
}, 0);

console.log("Multiplos de 3:", soma);       // imprime o resultado dos multiplos, que foram calculados na variável soma, com a função reduce
console.log("Multiplos de 5:", soma1);      //imprime o resultado da soma dos multiplos de 5