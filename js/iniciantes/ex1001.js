var input = require('fs').readFileSync('stdin', 'utf8');
const [A, B] = input.split('\n').map(item => parseInt(item));

const X = A + B
console.log("X =",X);