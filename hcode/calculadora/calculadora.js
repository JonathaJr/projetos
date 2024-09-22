let calc = (n1, n2, operador) =>  {

   return eval(`${n1} ${operador} ${n2}`);

}

let resultado = calc(5, 8, "*");
console.log(resultado);
