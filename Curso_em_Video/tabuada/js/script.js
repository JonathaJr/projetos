function tabuada() {
    let numero = document.querySelector('#txtn');
    let tabuada = document.querySelector('#seltab');

   
    if (numero.value.length == 0) {
        alert('Por favor, digite um número');
    } else {
         // Pegando o número que é texto e convertendo para número.
        let n = Number(numero.value);
        let contador = 1;
        tabuada.innerHTML = '';
        while (contador <=10){
            let item = document.createElement('option');
            item.text = `${n} x ${contador} = ${n*contador}`;
            item.value = `tabuada${contador}`;
            tabuada.appendChild(item);
            contador++
        }
    }

}