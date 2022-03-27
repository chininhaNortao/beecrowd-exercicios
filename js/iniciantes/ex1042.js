const { parse } = require('path');

var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split(' ').map(item => parseInt(item));

const n = lines.length

for(var i = 0; i<n;i++){
    console.log(lines[i])
}
for(var i = 0; i<n;i++){
    chave = lines[i]
    var j = i - 1
    while (j >= 0 && lines[j] > chave){
        lines[j+1] = lines[j]
        j -= 1
    }
    lines[j+1] = chave
}
console.log()
for(var i = 0; i<n;i++){
    console.log(lines[i])
}