var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

const raio = parseFloat(lines.shift());
const n = 3.14159;

const area = n * (raio ** 2);
// area = n * (raio**2)

console.log("A="+area.toFixed(4));