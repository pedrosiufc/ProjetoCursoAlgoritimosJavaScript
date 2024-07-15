function actionButton() {

  var s = "myFavoriteCamelCase"
  var res = s.replace(/[A-Z]/g, "");
  var number = (s.length - res.length) + 1
  //return numero;

  document.getElementById("demonstration").innerText = "Number of Words contained in the String: " + number;

}