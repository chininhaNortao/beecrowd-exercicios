var input = require('fs').readFileSync('stdin', 'utf8');
var [x,y] = input.split(' ').map(item => parseFloat(item));

console.log(x)
console.log(y)
