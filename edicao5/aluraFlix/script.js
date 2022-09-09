var listaFilmes = [];
var elementoFilmeInvalido = document.getElementById("filmeInvalido");

function adicionarFilme() {
  var nomeFilmeFavorito = document.getElementById("nomedofilme").value;
  var filmeFavorito = document.getElementById("filme").value;
  
  elementoFilmeInvalido.innerHTML = "" 

  if (filmeFavorito.endsWith(".jpg") || (filmeFavorito.endsWith(".png") || (filmeFavorito.endsWith(".jpeg")))) {
    listaFilmes.push(filmeFavorito);
    listaFilmes.push(nomeFilmeFavorito);

    listarFilmesNaTela();
  } else {
    elementoFilmeInvalido.innerHTML = "Endereço de filme inválido"
    console.error("Endereço de filme inválido");     
  }  
  document.getElementById("filme").value = "";
  document.getElementById("nomedofilme").value = "";
}

function listarFilmesNaTela() {
  console.log(listaFilmes)
  var elementoListaFilmes = document.getElementById("listaFilmes");
  elementoListaFilmes.innerHTML = "";

  for (var i = 0; i < listaFilmes.length; i++) {
    var elementoFilmeFavorito = "<img src=" + listaFilmes[i] + ">";

    elementoListaFilmes.innerHTML =  elementoListaFilmes.innerHTML + elementoFilmeFavorito;

    var elementoListaNome = document.getElementById("nomeFilme");
    var elementoFraseFilme = document.getElementById("fraseFilme");
    elementoFraseFilme.innerHTML = "Nome dos filmes";

    if (listaFilmes[i + 1] !== undefined) {
      elementoListaNome.innerHTML =
        elementoListaNome.innerHTML + " - " + listaFilmes[i + 1];
    }
  }
}

function removerFilme() {
  var nomeFilmeFavorito = document.getElementById("nomedofilme").value;
  var filmeFavorito = document.getElementById("filme").value;

  console.log(listaFilmes)
  if (listaFilmes.length == 0) {
    elementoFilmeInvalido.innerHTML = "Lista vazia"
  } else {
    listaFilmes.forEach((filme) => {
      var posFilmeFavorito = filme.indexOf(filmeFavorito)
      var posNomeFilme = filme.indexOf(nomeFilmeFavorito)
      
      listaFilmes.splice(posFilmeFavorito, 1)
      listaFilmes.splice(posNomeFilme, 1);
    })
    
    }
    

  }




