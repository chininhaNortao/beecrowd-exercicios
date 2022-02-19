var input = require('fs').readFileSync('stdin', 'utf8');
var km = parseInt(input.split('\n').shift());

// 1 km a cada 2 min
// 0.5 km a cada 1 min

const minutos = km / 0.5
console.log(minutos,"minutos");