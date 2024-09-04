

function adicionarTarefa() {
    let txt = document.querySelector("input").value;

    /*cliando uma <li> dentro do HTML pelo JS*/
    let li = document.createElement("li");
    li.innerHTML = txt + '<span onclick="deletarTarefa(this)">❌</span>';

    document.querySelector("ul").appendChild(li);

    document.querySelector("input").value = "";
}

function deletarTarefa(li) {
    li.parentElement.remove();
    
}



