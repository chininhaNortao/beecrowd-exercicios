var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n').map(item => parseFloat(item));

const A = lines.shift();
const B = lines.shift();
const media = (((A * 3.5) + (B * 7.5)) / 11);

console.log("MEDIA =",media.toFixed(5));