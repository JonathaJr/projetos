/*let calc = (n1, n2, operador) =>  {

   return eval(`${n1} ${operador} ${n2}`);

}

let resultado = calc(5, 8, "*");
console.log(resultado); */

/* Evento de click na Janela 

window.addEventListener ('click', event => {

    console.log("click"); // Janela do window 
    

});

document.addEventListener ('clicar', event => {
    
    console.log('clicar'); // Janela do documento 
    
}); */

/* let agora = new Date(); 

console.log(agora.toLocaleDateString()); */


/*
// Array

let carros = [
    "Fiat",
    "Palio",
    "Vw",
    "BMW",
    new Date()
];

carros.forEach(function(value, index){
    console.log(value, index);
    
}) */



/* Atributos e Métodos modo antigo

let celular = function() {
    this.cor = "Branco";
    this.marca = "Motorolla";

     this.ligar = function() {
        console.log("uma ligação");
        return "Ligando";
    }
}

let objeto = new celular();
console.log(objeto.ligar());

*/

// Atributos e Métodos Atual

class celular {
    constructor() {
        this.cor = "Branco";
    }

    ligar() {
        console.log("uma Ligação");
        return "Ligando";
        
    }
}

let objeto = new celular();
console.log(objeto.ligar());



