function ConverterFarenheit() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;

  if (valor !== "") {
    var valorCelsius = parseFloat(valor);
    var valorFarenheit = (valorCelsius * 1.8) + 32;
    var elementoValorConvertido = document.getElementById("valorConvertido");

    var valorConvertido = "O resultado é " + valorFarenheit.toFixed(0) + "F";
    elementoValorConvertido.innerHTML = valorConvertido;
  }else {
    var valorIndefinido = "Digite a temperatura"
    var elementoValorConvertido = document.getElementById("valorConvertido");
    elementoValorConvertido.innerHTML = valorIndefinido;
  }
}

function ConverterKelvin() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;

  if (valor !== "") {
    var valorCelsius = parseFloat(valor);

    var valorKelvis = valorCelsius + 273.15;
    var elementoValorConvertido = document.getElementById("valorConvertido");

    var valorConvertido = "O resultado é " + valorKelvis.toFixed(0) + "K";
    elementoValorConvertido.innerHTML = valorConvertido;
  }else {
    var valorIndefinido = "Digite a temperatura"
    var elementoValorConvertido = document.getElementById("valorConvertido");
    elementoValorConvertido.innerHTML = valorIndefinido;
  }
}

function ConverterCelsius() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;

  if (valor !== "") {
    var valorFarenheit = parseFloat(valor);
    var valorCelsius = (valorFarenheit - 32) / 1.8;
    var elementoValorConvertido = document.getElementById("valorConvertido");

    var valorConvertido = "O resultado é " + valorCelsius.toFixed(0) + "C";
    elementoValorConvertido.innerHTML = valorConvertido;
  }else {
    var valorIndefinido = "Digite a temperatura"
    var elementoValorConvertido = document.getElementById("valorConvertido");
    elementoValorConvertido.innerHTML = valorIndefinido;
  }
}