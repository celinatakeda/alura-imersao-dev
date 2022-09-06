function ConverterReal() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  if (valor !== "") {
    var valorEmDolarNumerico = parseFloat(valor);

    var valorEmReal = valorEmDolarNumerico * 5;
    var valorEmBitcoin = (valorEmDolarNumerico * 102.905,70) / 1000000;

    var elementoValorConvertido = document.getElementById("valorConvertido");
    var elementoValorBitcoin = document.getElementById("valorEmBitcoin");

    var valorConvertido = "O valor em Real é R$ " + valorEmReal.toFixed(2);
    elementoValorConvertido.innerHTML = valorConvertido;

    var valorBitcoin = "O valor em Bitcoin é Ƀ " + valorEmBitcoin;
    elementoValorBitcoin.innerHTML = valorBitcoin;
  } else {
    var valorIndefinido = "Digite o valor!";
    var elementoValorConvertido = document.getElementById("valorConvertido");
    elementoValorConvertido.innerHTML = valorIndefinido;
  }
}

function ConverterEuro() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  if (valor !== "") {
    var valorEmRealNumerico = parseFloat(valor);

    var valorEmEuro = valorEmRealNumerico * 5;
    var valorEmBitcoin = (valorEmRealNumerico * 102.905,70) / 1000000;

    var elementoValorConvertido = document.getElementById("valorConvertido");
    var elementoValorBitcoin = document.getElementById("valorEmBitcoin");

    var valorConvertido = "O valor em Euro é € " + valorEmEuro.toFixed(2);
    elementoValorConvertido.innerHTML = valorConvertido;

    var valorBitcoin = "O valor em Bitcoin é Ƀ " + valorEmBitcoin;
    elementoValorBitcoin.innerHTML = valorBitcoin;
  } else {
    var valorIndefinido = "Digite o valor!";
    var elementoValorConvertido = document.getElementById("valorConvertido");
    elementoValorConvertido.innerHTML = valorIndefinido;
  }
}

function ConverterDolar() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;

  if (valor !== "") {
    var valorEmRealNumerico = parseFloat(valor);

    var valorEmDolar = valorEmRealNumerico / 5;
    var valorEmBitcoin = (valorEmRealNumerico / 19.955, 63) / 100000;

    var elementoValorConvertido = document.getElementById("valorConvertido");
    var elementoValorBitcoin = document.getElementById("valorEmBitcoin");

    var valorConvertido = "O valor em Dólar é U$ " + valorEmDolar.toFixed(2);
    elementoValorConvertido.innerHTML = valorConvertido;

    var valorBitcoin = "O valor em Bitcoin é Ƀ " + valorEmBitcoin;
    elementoValorBitcoin.innerHTML = valorBitcoin;
  } else {
    var valorIndefinido = "Digite o valor!";
    var elementoValorConvertido = document.getElementById("valorConvertido");
    elementoValorConvertido.innerHTML = valorIndefinido;
  }
}
