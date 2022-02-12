var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n').map(item => parseInt(item));

const A = lines.shift();
const B = lines.shift();

console.log("SOMA =",A+B);