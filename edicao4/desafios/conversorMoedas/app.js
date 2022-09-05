function Converter() {
    var elementoValor = document.getElementById("valor").value;
    var elementoOpcao1 = document.querySelector("input[name=dolarReal]:checked");
    var elementoOpcao2 = document.querySelector("input[name=realDolar]:checked");
    var elementoOpcao3 = document.querySelector("input[name=realBitcoin]:checked");
      
    ConverterRealDolar(elementoValor, elementoOpcao1);
    ConverterDolarReal(elementoValor, elementoOpcao2);
    ConverterRealBitcoin(elementoValor, elementoOpcao3);   
  }

    function ConverterRealDolar(valor, opcao) {
    if(opcao != null) {
      var realEmDolar = valor * 5;
      var elementoValorConvertido = document.getElementById("valorConvertidoReal");
      elementoValorConvertido.innerHTML = "R$ " + realEmDolar.toFixed(2);
    }
  }

  function ConverterDolarReal(valor, opcao) {
    if(opcao != null) {
      var DolarEmReal = valor / 5;
      var elementoValorConvertido = document.getElementById("valorConvertidoDolar");
      elementoValorConvertido.innerHTML = "U$ " + DolarEmReal.toFixed(2);
    }
  }

  function ConverterRealBitcoin(valor, opcao) {
    if(opcao != null) {
      var realEmBitcoin = valor * 0.0000050;
      var elementoValorConvertido = document.getElementById("valorConvertidoBitcoin");
      elementoValorConvertido.innerHTML = "BTC " + realEmBitcoin.toFixed(2);
    }
  }


  