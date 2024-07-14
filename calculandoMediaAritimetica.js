//Operações Matémáticas
var nome, nota1, nota2, media;
nome = prompt("digite nome do aluno:")
nota1 = prompt("digite a primeira nota:")
nota2 = prompt("digite a segunda nota:")
media = (parseInt(nota1) + parseInt(nota2)) / 2;
if (media >= 5) {
  alert(nome + " Aprovado");
} else {
  alert(nome + " Reprovado");
}
