var input = require('fs').readFileSync('stdin', 'utf8');
var [A, B, C] = input.split('\n').shift().split(" ").map(item => parseInt(item));

var maiorAB = (A + B + Math.abs(A-B)) / 2
var resposta = (maiorAB + C + Math.abs(maiorAB - C)) / 2
console.log(resposta,"eh o maior");