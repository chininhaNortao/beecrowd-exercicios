var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');
// 12 km/l
const tempo = parseInt(lines.shift());
const vm = parseInt(lines.shift());

const distancia = tempo * vm

console.log((distancia / 12).toFixed(3));