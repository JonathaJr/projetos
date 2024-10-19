
const calcular = document.querySelector("#calcular");



function imc () {
    
    const nome = document.querySelector("#nome").value;
    const altura = document.querySelector("#altura").value;
    const peso = document.querySelector("#peso").value;
    const resultado = document.querySelector("#resultado");

    if (nome !== '' && altura !== '' && peso !== '') {
        
        const valorIMC = (peso / (altura * altura)).toFixed(1);

        let classificacao = '';

        if (valorIMC < 18.5) {
            classificacao = 'abaixo do peso'
        }else if (valorIMC < 25){
            classificacao = 'Está com peso ideal. PARABENS!!'
        }else if (valorIMC < 30) {
            classificacao = 'Acima do peso.'
        }

        resultado.textContent = `Prazer ${(nome.toUpperCase())} o seu IMC é ${valorIMC} e você esta ${classificacao}`

    } else {
        resultado.textContent = 'Preencha todos os campos!!!'
    }

}

calcular.addEventListener('click', imc);
