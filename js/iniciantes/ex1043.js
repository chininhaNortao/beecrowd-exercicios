var input = require('fs').readFileSync('stdin', 'utf8');
var [A, B, C] = input.split(' ').map(item => parseFloat(item));

const _round = (number, decimal) => Number(Math.round(number + "e" + decimal) + "e-" + decimal)

if ((A < (B + C)) && (B < (A + C)) && (C < (B + A))){
    const peri = parseFloat(A+B+C)
    console.log("Perimetro =",_round((peri),2));
}else {
    const area = parseFloat(((A+B)/2)*C);
    console.log(area)
    console.log("Area =",_round(area,2));
}