var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var [A, B, C, D] = input.split('\n').map(item => parseInt(item));

const diferenca = (A * B) - (C * D);

console.log("DIFERENCA =",diferenca);