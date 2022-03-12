function Converter() {
    var elementoValor = document.getElementById("valor").value;
    console.log(elementoValor);
    var elementoOpcao1 = document.querySelector("input[name=dolarReal]:checked");
    console.log(elementoOpcao1);
  
    if (elementoOpcao1 != null) {
      var dolarEmReal = elementoValor * 5;
      console.log(dolarEmReal);
  
      var elementoValorConvertido = document.getElementById("valorConvertido");
      elementoValorConvertido.innerHTML = dolarEmReal;
    }
  }


  