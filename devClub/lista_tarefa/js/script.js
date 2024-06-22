let input = document.getElementById("input-principal");
let botao = document.getElementById("botao-adicionar");


// Chamando uma FUNÇÃO para escrever no arquivo HTML
function cliqueiNoBotao() {
    arrayDeTarefas.push(input.value); // vai jogar dentro do array 

    mostrarNatela()
}

//Adicionando um EVENTO(OUVINTE DE EVENTO) pra que quando o botão for clicado para chamar a FUNÇÂO. 

botao.addEventListener("click", cliqueiNoBotao);

// Guardando Tarefas dentro do Arquivo HTML( <ul> ) => ARRAYS
let listaCompleta = document.getElementById("tarefas");


// Quando for clicado alguma tarefa, automaticamente vai ser adicionado dentro desse ARRAY.
let arrayDeTarefas = []; //Em cima adicionando na function

//Criando uma function para mostrar na tela. Dentro da <ul>
function mostrarNatela() {
    let novaLista = '' // texto vazio
    arrayDeTarefas.forEach (tarefa => {
        novaLista = novaLista + `
            <li class="item-tarefa"> 
                <p>${tarefa}</p>
            </li>
        `
    });

    listaCompleta.innerHTML = novaLista;
}





