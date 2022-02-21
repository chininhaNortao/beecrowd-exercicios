var input = require('fs').readFileSync('stdin', 'utf8');
var dinheiro = parseFloat(input.split('\n').shift());

const notas100 = parseInt(dinheiro / 100);
dinheiro = dinheiro % 100;

const notas50 = parseInt(dinheiro / 50);
dinheiro = dinheiro % 50;

const notas20 = parseInt(dinheiro / 20);
dinheiro = dinheiro % 20;

const notas10 = parseInt(dinheiro / 10);
dinheiro = dinheiro % 10;

const notas5 = parseInt(dinheiro / 5);
dinheiro = dinheiro % 5;

const notas2 = parseInt(dinheiro / 2);
dinheiro = dinheiro % 2;

// moedas
const moedas1 = parseInt(dinheiro / 1);
dinheiro = dinheiro % 1;

const moedas05 = parseInt(dinheiro / 0.5);
dinheiro = dinheiro % 0.5;

const moedas025 = parseInt(dinheiro / 0.25);
dinheiro =dinheiro % 0.25;

const moedas010 = parseInt(dinheiro / 0.1);
dinheiro = dinheiro % 0.1;

const moedas005 = parseInt(dinheiro / 0.05);
dinheiro = dinheiro % 0.05;

const moedas001 = parseInt(dinheiro / 0.01);
dinheiro = dinheiro % 0.01;

console.log("NOTAS:")
console.log(notas100,"nota(s) de R$ 100.00");
console.log(notas50,"nota(s) de R$ 50.00");
console.log(notas20,"nota(s) de R$ 20.00");
console.log(notas10,"nota(s) de R$ 10.00");
console.log(notas5,"nota(s) de R$ 5.00");
console.log(notas2,"nota(s) de R$ 2.00");
// moedas
console.log("MOEDAS:");
console.log(moedas1,"moeda(s) de R$ 1.00");
console.log(moedas05,"moeda(s) de R$ 0.50");
console.log(moedas025,"moeda(s) de R$ 0.25");
console.log(moedas010,"moeda(s) de R$ 0.10");
console.log(moedas005,"moeda(s) de R$ 0.05");
console.log(moedas001,"moeda(s) de R$ 0.01");