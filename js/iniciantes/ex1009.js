var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var nome = lines.shift();
var salario = parseFloat(lines.shift());
var bonus = parseFloat(lines.shift()) * 0.15;

var total = salario + bonus;
console.log("TOTAL = R$",total.toFixed(2));