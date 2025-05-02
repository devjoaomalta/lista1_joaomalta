function fatorial(n) { // cria a função fatorial de um número "n"
    
    let resultado = 1 // define a variável com valor inicial de 1
   
    for (let i = 1; i <= n; i++) {  // cria a estrutura for que é um laço de repetição, nele é definida a variável inicial i como 1 e o laço continua até que i seja igual a n, ou seja, 6. i++ incrementa 1 a cada repetição. 
        resultado *= i  // a cada passo o valor é multiplicado por i, ou seja, por 1
    }
    return resultado    // imprime o resultado
}

console.log(fatorial(6))   // calcula o fatorial, com o número 6. pode ser mudado a qualquer momento