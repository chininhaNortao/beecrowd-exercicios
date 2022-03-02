var input = require('fs').readFileSync('stdin', 'utf8');
var [codigo, qtde] = input.split(' ').map(item => parseInt(item));

const dict_val = {
    1: 4,
    2: 4.5,
    3: 5,
    4: 2,
    5: 1.5
};

const valor_pagar = qtde * dict_val[codigo];

console.log("Total: R$",valor_pagar.toFixed(2));