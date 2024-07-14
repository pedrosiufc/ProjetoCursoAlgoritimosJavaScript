
//variaveis globais
//var valor1, valor2, resultado, operacao;

function acaoBotao(){
  //variaveis internas a função
  var valor1, valor2, resultado, operacao;

  valor1 = prompt("digite o valor1: ")
  operacao = prompt("digite a operação desejada: Ex: + , - , *, / ")
  valor2 = prompt("digite o valor2: ")
  
  if (operacao == "+") {
    resultado = parseInt(valor1) + parseInt(valor2)  
  } else if (operacao == "-") {
    resultado = parseInt(valor1) - parseInt(valor2)
  } else if (operacao == "*") {
    resultado = parseInt(valor1) * parseInt(valor2)
  } else if (operacao == "/") {
    resultado = parseInt(valor1) / parseInt(valor2)
  }
  
  document.getElementById("paragrafo").innerText = resultado

}


