var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

const peca1 = lines.shift();
const peca2 = lines.shift();

var [codigo1, numero1, valor1] = peca1.split(" ");
var [codigo2, numero2, valor2] = peca2.split(" ");

//valor1, valor2 = parseFloat(valor1),parseFloat(valor2);

var valor_pagar = (numero1 * valor1) + (numero2 * valor2);
console.log("VALOR A PAGAR: R$",valor_pagar.toFixed(2));