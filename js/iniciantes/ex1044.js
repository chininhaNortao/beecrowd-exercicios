const input = require("fs").readFileSync("stdin", "utf8");
var [a, b] = input.split(' ').map(item => parseInt(item));

if (a > b){
     if(a % b == 0){
         console.log("Sao Multiplos")
     }else{
         console.log("Nao sao Multiplos")
     }
}else{
    if(b % a == 0){
        console.log("Sao Multiplos")
    }else{
        console.log("Nao sao Multiplos")
    }
}