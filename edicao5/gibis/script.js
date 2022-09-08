function adicionarGibi() {
  var nomeGibiFavorito = document.getElementById("nomedogibi").value;
  var gibiFavorito = document.getElementById("gibi").value;

  if (gibiFavorito.endsWith(".jpg")) {
    var listaGibis = [];
    listaGibis.push(gibiFavorito);
    listaGibis.push(nomeGibiFavorito);

    listarGibisNaTela(listaGibis);
  } else {
    console.error("Endereço de filme inválido");
  }
  document.getElementById("gibi").value = "";
  document.getElementById("nomedogibi").value = "";
}

function listarGibisNaTela(gibis) {
  for (var i = 0; i < gibis.length; i++) {
    var elementoGibiFavorito = "<img src=" + gibis[i] + ">";

    var elementoListaGibis = document.getElementById("listaGibis");
    elementoListaGibis.innerHTML =
      elementoListaGibis.innerHTML + elementoGibiFavorito;

    var elementoListaNome = document.getElementById("nomeGibi");

    var elementoFraseGibi = document.getElementById("fraseGibi");
    elementoFraseGibi.innerHTML = "Escolha o seu gibi e boa leitura!";

    if (gibis[i + 1] !== undefined) {
      elementoListaNome.innerHTML =
        elementoListaNome.innerHTML + " - " + gibis[i + 1];
    }
  }
}
