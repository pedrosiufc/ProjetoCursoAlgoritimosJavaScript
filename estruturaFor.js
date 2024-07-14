/*
Estrutura para mostrar o fatorial de um número 
*/

function acaoBotao() {
  //variaveis internas a função
  var numero, fatorial, contador;

  numero = prompt("digite o número para calcular o fatorial.")
  fatorial = 1
  for (contador = 1; contador <= numero; contador++) {
    fatorial = fatorial * contador
  }

  document.getElementById("paragrafo").innerText = "O fatorial de: " + numero + " eh: " + fatorial

}