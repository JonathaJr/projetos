// Função Void (vazia)

function digaMeuNome() {
    console.log("Jonathan Jr");
}
digaMeuNome(); // => Chamando a Função
digaMeuNome();
digaMeuNome();
digaMeuNome();

// Função com parâmetro

function digiteUmNome(nome) {
    console.log(nome);
}

digiteUmNome("Rodolfo, Lucas, André ..... "); // => Dentro do parâmetro posso passar qualquer valor, nesta é nome "String"
digiteUmNome("Luis");
digiteUmNome("Paulo");

// Outro Exemplo "Number"
function calculo(n1, n2) {
    const resultado = n1 + n2;

    console.log(resultado);
}

calculo(2, 3);
calculo(50, 33);
calculo(20, 40);


// Função Return

function calculo(n1, n2) {
    const resultado = n1 + n2;

    return resultado;
}

const resultadoDaSoma = calculo(30, 40);
console.log(resultadoDaSoma);

//Outro Exemplo
function estaEndividado(salario, gastos) {
    if (salario > gastos) {
        return "Está no AZUL";
    } else {
        return "Está no VERMELHO";
    }

}

const maria = estaEndividado(5000, 7000);
const joao = estaEndividado(10000, 5000);

console.log(maria);
console.log(joao);


//Arrow Function (É uma forma mais moderna para representar as funções)

const digaSeuNome = () => {
    console.log ("Ricardo");
}

digaSeuNome();



