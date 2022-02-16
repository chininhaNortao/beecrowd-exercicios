var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n').map(item => parseInt(item));

var raio = lines.shift();

var resultado = (4/3) * 3.14159 * (raio**3);
console.log("VOLUME =",resultado.toFixed(3));