var input = require('fs').readFileSync('stdin', 'utf8');
var [x,y] = input.split('\n');

const [x1,y1] = x.split(" ");
const [x2,y2] = y.split(" ");

const distancia = (((x2-x1)**2) + ((y2-y1)**2))** 0.5
console.log(distancia.toFixed(4));