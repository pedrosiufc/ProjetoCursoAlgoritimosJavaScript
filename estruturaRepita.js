function acaoBotao(){

	var sairLopp, valor1, valor2
	
  do{
    valor1 = prompt("digite o primeiro valor: ")
    valor2 = prompt("digite o segundo valor: ")
	  document.getElementById("paragrafo").innerText = "Resultado: " + ((parseInt( valor1 )) + (parseInt( valor2 )));
    sairLopp = prompt("Deseja sair? S/N")
  }while (sairLopp == "N")
    	
}