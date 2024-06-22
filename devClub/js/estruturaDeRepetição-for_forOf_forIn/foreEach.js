/*

    ForEach(item, index, array)

        item -   Dados/Informações contidas na posição atual do Array
        index -  Números da Posição. Sempre começando em 0
        array -  Retorna o Array completo

 */

const dados = [
    { nome: "Jonathan", idade: 30, contato: '(18) 99769-6124' },
    { nome: "Luis", idade: 15, contato: '(18) 99769-6890' },
    { nome: "Paulo", idade: 40, contato: '(18) 99769-7895' },
    { nome: "Andre", idade: 10, contato: '(18) 99769-7543' }
];

/* nesse array vamos plugar ele neste caso é os dados (Código padarão do JavaScript)
array.forEach(element => {
    
});  Dentro dos parênteses vai uma função*/


dados.forEach(function (item, index, array) {
    console.log(item);
    console.log(index);
}); 

// Descobrindo se os clientes são maiores ou menores de idade. 

dados.forEach(function (item, index) {
    if (item.idade <= 18) {
        console.log(`O cliente ${item.nome} tem a idade de ${item.idade} anos, e tem a posição ${index} é menor de idade. `)
    } else {
        console.log(`O cliente ${item.nome} tem a idade de ${item.idade} anos, e tem a posição ${index} é maior de idade.`)
    }
});
