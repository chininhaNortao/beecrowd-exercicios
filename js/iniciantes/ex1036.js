var input = require('fs').readFileSync('stdin', 'utf8');
var [a, b, c] = input.split(' ').map(item => parseFloat(item));

// delta = sqrt((b**2)-4*a*c)
// x+ = -b + delta / 2*a
// x+ = -b - delta / 2*a
const delta = (b**2)-(4*a*c);

if (delta <= 0 || a <= 0){
    console.log("Impossivel calcular")
}
else{
    xPos = ((-b) + Math.sqrt(delta)) / (2 * a)
    xNeg = ((-b) - Math.sqrt(delta)) / (2 * a)
    console.log("R1 =",xPos.toFixed(5))
    console.log("R2 =",xNeg.toFixed(5))
}