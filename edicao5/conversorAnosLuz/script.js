function ConverterQuilometroAnosLuz() {
  var valor = document.getElementById("valor").value;
  if (valor !== "") {
    var valorEmQuilomentros = parseFloat(valor);

    var valorAnosLuz = valorEmQuilomentros * 365 * 86400;
    var valorAnos= valorAnosLuz / 365

    var elementoValorConvertido = document.getElementById("valorConvertido");
    var valorConvetido = "Anos Luz é " + valorAnosLuz + " Km";
    elementoValorConvertido.innerHTML = valorConvetido;

    var elementoAnosViagem = document.getElementById("valorTempoDeslocamento");
    var valorConvetidoAnos = "Tempo de viagem é " + valorAnos + " anos";
    elementoAnosViagem.innerHTML = valorConvetidoAnos;
    e
  } else {
      var valorIndefinido = "Digite o valor!";
      var elementoValorConvertido = document.getElementById("valorConvertido");
      elementoValorConvertido.innerHTML = valorIndefinido;
    }
}