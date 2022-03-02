var input = require('fs').readFileSync('stdin', 'utf8');
var linha = input.split('\n');

const notas = linha.shift().split(" ");
// notas
const n1 = parseFloat(notas.shift())
const n2 = parseFloat(notas.shift())
const n3 = parseFloat(notas.shift())
const n4 = parseFloat(notas.shift())

// pesos
const [p1,p2,p3,p4] = [2,3,4,1]

// calculando nota
const nota = ((n1 * p1) + (n2 * p2) + (n3 * p3) + (n4 * p4)) / 10

console.log("Media:",nota.toFixed(1));
if (nota >= 0 && nota < 5 ){
    console.log("Aluno reprovado.");
}
else if (nota >= 5 && nota <= 6.9){
    console.log("Aluno em exame.");
    var n_exame = parseFloat(linha.shift());
    console.log("Nota do exame:",n_exame.toFixed(1));
    const n_total = (n_exame + nota) / 2
    if (n_total >= 5){
        console.log("Aluno aprovado.");
        console.log("Media final:",n_total.toFixed(1));
    }else{
        console.log("Aluno reprovado.");
        console.log("Media final:",n_total.toFixed(1));
    }
}
else if (nota >= 7 ){
    console.log("Aluno aprovado.")
}