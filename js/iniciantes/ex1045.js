var input = require('fs').readFileSync('stdin', 'utf8');
var lados = input.split(' ').map(item => parseFloat(item));
lados.sort();

const a = lados.shift()
const b = lados.shift()
const c = lados.shift()

if (a >= (b + c)){
    console.log("NAO FORMA TRIANGULO")
}
if ((a**2) == ((b**2) + (c**2))){
    console.log("TRIANGULO RETANGULO")
}
if ((a**2) > ((b**2) + (c**2))) {
    console.log("TRIANGULO OBTUSANGULO")
}
if ((a**2) < ((b**2) + (c**2))) {
    console.log("TRIANGULO ACUTANGULO")
}
if (a == b && c == b) {
    console.log("TRIANGULO EQUILATERO")
} 
if ((a == b && a != c) || (b == c && b != a) || (c == a && c != b)){
    console.log("TRIANGULO ISOSCELES")
}
