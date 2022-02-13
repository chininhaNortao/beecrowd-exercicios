var input = require('fs').readFileSync('stdin', 'utf8');
var valores = input.split('\n');


const nFuncionario = parseInt(valores.shift());
const horasWork = parseInt(valores.shift());
const moneyWork = parseFloat(valores.shift());

console.log("NUMBER =",nFuncionario);
const salario = horasWork * moneyWork
console.log("SALARY = U$",salario.toFixed(2));