/*Função que recebe uma string CamelCase arbitraria dentro da própria função e conta quantas palalvras existem */

function actionButton() {
  //string arbitraria
  var s = "myFavoriteCamelCase"
  //contagem das inicias Maiúsculas dentro da string
  var res = s.replace(/[A-Z]/g, "");
  //comparação do tamanho da string menos o número de letras em maiúsculas acrescentando +1 já que a primeira palavra começa em letra minúscula.
  var number = (s.length - res.length) + 1


  document.getElementById("demonstration").innerText = "Number of Words contained in the String: " + number;

}