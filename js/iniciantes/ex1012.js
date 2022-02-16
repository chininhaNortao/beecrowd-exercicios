var input = require('fs').readFileSync('stdin', 'utf8');
var [A, B, C] = input.split('\n').shift().split(" ").map(item => parseFloat(item));

const resA = (A * C) / 2;
const resB = 3.14159 * (C ** 2);
const resC = ((A + B) * C) / 2;
const resD = B * B;
const resE = A * B;

console.log("TRIANGULO:",resA.toFixed(3));
console.log("CIRCULO:",resB.toFixed(3));
console.log("TRAPEZIO:",resC.toFixed(3));
console.log("QUADRADO:",resD.toFixed(3));
console.log("RETANGULO:",resE.toFixed(3))