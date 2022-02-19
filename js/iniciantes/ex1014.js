var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

const distancia = parseInt(lines.shift());
const combustivel = parseFloat(lines.shift());

const res = distancia / combustivel

console.log(res.toFixed(3),"km/l");