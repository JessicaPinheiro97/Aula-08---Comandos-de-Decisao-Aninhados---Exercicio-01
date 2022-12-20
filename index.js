const prompt = require("prompt-sync")();

var n1 = parseInt(prompt("Digite o primeiro número: "));
var n2 = parseInt(prompt("Digite o segundo número: "));

if (n1 > 0 && n2 > 0){

  if (n1 % 2 == 0 && n2 % 2 == 0) {
    console.log("Os dois números são pares!");
  }  else if (n1 % 2 != 0 && n2 % 2 != 0) {
    console.log("Os dois números são ímpares!");
  } else {
    console.log("Existe um par e um ímpar!");
  }
  
}

else{
  console.log("Existe pelo menos um número 0 ou negativo!");
}