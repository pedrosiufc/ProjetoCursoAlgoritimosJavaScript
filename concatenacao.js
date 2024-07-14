var nome, numero

nome = prompt("digite o seu nome: ")
numero = prompt("digite um número: ")

//mostrando o resultado na página html
//pegando o id da tag html
document.getElementById("paragrafo").innerText = nome + " : " + numero;