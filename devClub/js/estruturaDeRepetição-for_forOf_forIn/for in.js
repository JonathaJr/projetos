/*

    Estrutura de Repetição - LOOP
        -FOR IN
        -Usado para interar objetos
*/

const dados = {
    nome: "Jonathan",
    idade: 30,
    bairro: "Jardim Cambuci"
}; // nome, idade e bairro São Atributos

console.log(dados);

for (let atributo in dados) {
    console.log(atributo);
}; // Esse código pega só os Atributos


// Pegando valor dentro do Atributo (Duas Formas)
console.log(dados.nome);
console.log(dados['idade']);



