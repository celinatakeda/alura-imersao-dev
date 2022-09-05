function ConverterReal() {
    var valorElemento = document.getElementById("valor");
    var valor = valorElemento.value;   
   
    if (valor !== "") {

      var valorEmDolarNumerico = parseFloat(valor);
  
      var valorEmReal = valorEmDolarNumerico * 5;
  
      var elementoValorConvertido = document.getElementById("valorConvertido");
      
      var valorConvertido = "O resultado em Real é R$ " + valorEmReal;
      elementoValorConvertido.innerHTML = valorConvertido;    
    }else {
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
  
      var elementoValorConvertido = document.getElementById("valorConvertido");
      var valorConvertido = "O resultado em Dolar é U$ " + valorEmDolar;
      elementoValorConvertido.innerHTML = valorConvertido;
    }else {
      var valorIndefinido = "Digite o valor!";
      var elementoValorConvertido = document.getElementById("valorConvertido");
      elementoValorConvertido.innerHTML = valorIndefinido;     
    }
  }

