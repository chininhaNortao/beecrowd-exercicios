var input = require('fs').readFileSync('stdin', 'utf8');
var [x,y] = input.split(' ').map(item => parseFloat(item));

// q2 | q1
// q3 | q4


if (x > 0){
    if(y > 0){
        console.log("Q1")
    }else if (y < 0){
        console.log("Q4")
    }else if (y == 0){
        console.log("Eixo X")
    }
} else if (x < 0){
    if (y > 0){
        console.log("Q2")
    }else if(y < 0){
        console.log("Q3")
    }else if (y == 0){
        console.log("Eixo X")
    }
}else if (x ==0){
    if(y == 0){
        console.log("Origem")
    }else if (y != 0){
        console.log("Eixo Y")
    }
}