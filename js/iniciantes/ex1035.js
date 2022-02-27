var input = require('fs').readFileSync('stdin', 'utf8');
var [A, B, C, D] = input.split(' ').map(item => parseInt(item));

const cond1 = B > C
const cond2 = D > A
const cond3 = (C + D) > (A + B)
const cond4 = C > 0 && D > 0
const cond5 = A % 2 == 0

if(cond1 & cond2 & cond3 & cond4 & cond5){
    console.log("Valores aceitos")
}else{
    console.log("Valores nao aceitos")
}