function CalcularMedia() {
  var elementoNotaUm = document.getElementById("nota1");
  var elementoNotaDois = document.getElementById("nota2");
  var elementoNotaTres = document.getElementById("nota3");
  var elementoNotaQuatro = document.getElementById("nota4");

  var nota1 = elementoNotaUm.value;
  var nota2 = elementoNotaDois.value;
  var nota3 = elementoNotaTres.value;
  var nota4 = elementoNotaQuatro.value;

  if (nota1 !== "" && nota2 !== "" && nota3 !== "" && nota4 !== "") {
    var nota1Numerico = parseFloat(nota1);
    var nota2Numerico = parseFloat(nota2);
    var nota3Numerico = parseFloat(nota3);
    var nota4Numerico = parseFloat(nota4);

    var media =
      (nota1Numerico + nota2Numerico + nota3Numerico + nota4Numerico) / 4;
    console.log(media);

    var elementoResultadoMedia = document.getElementById("resultadoMedia");

    var mediaFinal = "Sua média foi: " + media.toFixed(2);

    elementoResultadoMedia.innerHTML = mediaFinal;
  } else {
    var elementoResultadoMedia = document.getElementById("resultadoMedia");
    elementoResultadoMedia.innerHTML = "Digite todas as notas";
  }
}
