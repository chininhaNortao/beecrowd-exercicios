var input = require('fs').readFileSync('stdin', 'utf8');
var [A, B, C, D] = input.split(' ').map(item => parseInt(item));

if(B > C){
    if(D > A){
        if((C + D) > (A + B)){
            if(C > 0 && D > 0){
                if(A % 2 == 0){
                    console.log("Valores aceitos")
                }else{
                    console.log("Valores nao aceitos")
                }
            }else{
                console.log("Valores nao aceitos")
            }
        }else{
            console.log("Valores nao aceitos")
        }
    }else{
        console.log("Valores nao aceitos")
    }
}else{
    console.log("Valores nao aceitos")
}