var input = require('fs').readFileSync('stdin', 'utf8');
var dinheiro = input.split('\n').map(item => parseInt(item)).shift();

const notas100 = parseInt(dinheiro / 100)
dinheiro = dinheiro % 100

const notas50 = parseInt(dinheiro / 50)
dinheiro = dinheiro % 50

const notas20 = parseInt(dinheiro / 20)
dinheiro = dinheiro % 20

const notas10= parseInt(dinheiro / 10)
dinheiro = dinheiro % 10

const notas5 = parseInt(dinheiro / 5)
dinheiro = dinheiro % 5

const notas2 = parseInt(dinheiro / 2)
dinheiro = dinheiro % 2

const notas1 = parseInt(dinheiro / 1);
dinheiro = dinheiro % 1;

console.log(notas100,"nota(s) de R$ 100,00");
console.log(notas50,"nota(s) de R$ 50,00");
console.log(notas20,"nota(s) de R$ 20,00");
console.log(notas10,"nota(s) de R$ 10,00");
console.log(notas5,"nota(s) de R$ 5,00");
console.log(notas2,"nota(s) de R$ 2,00");
console.log(notas1,"nota(s) de R$ 1,00");