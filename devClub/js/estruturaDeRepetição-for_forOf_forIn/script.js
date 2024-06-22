/* 
    Estrutura de repetição - LOOP

    1- Inicialização - Criar uma variavel e colocar um valor inicial para ela 

    2- Condição - Enquanto for true, o laço continuará iterando. Ele irá verificar antes de cada intereção

    3- Expressão Final - O que irá ocorrer a cada vez que o nosso laço der uma volta

    for ([inicialização]: [condição]: [expressão final]) {
        bloco de código
    }
*/

for (let i = 0; i <= 5; i++){
    console.log (i);
}

// Exemplo de como posso usar for em um Array 

const pessoas = ["Maria", "Luis", "Paulo", "Adre"]; //Vetor são os valores dentro do Arrays

for (let vetor = 0; vetor < pessoas.length; vetor++){
    console.log (pessoas[vetor]);
} // pessoas.length (Tamanho de um Array)

