var listaNomes = [];
//var listaGenero = [];
var listaCapas = [];

function adicionarFilme() {
  var filmeFavorito = document.getElementById("filme").value;
  var nomeFavorito = document.getElementById("nomedofilme").value;
  //var generoFavorito = document.getElementById("genero").value;

  if (filmeFavorito.endsWith(".jpg")) {
    listaNomes.push(nomeFavorito);
    //listaGenero.push(generoFavorito);
    listaCapas.push(filmeFavorito);
    // listarFilmesNaTela(filmeFavorito, nomeFavorito, generoFavorito);
    listarFilmesNaTela();
    //alert("Filme Adicionado");
  } else {
    console.error("Endereço Inválido");
    alert("Endereço Inválido");
  }
  document.getElementById("filme").value = "";
  document.getElementById("nomedofilme").value = "";
}

function listarFilmesNaTela() {
  var elementoListaFilmes = document.getElementById("listaFilmes");
  var elementoListaNomes = document.getElementById("nomeFilme");
  elementoListaFilmes.innerHTML = "";
  elementoListaNomes.innerHTML = "";

  for (var i = 0; i < listaCapas.length; i++) {
    var novoElementoListaFilmes =  "<img src=" +  listaCapas[i] +">";
    
    var listaNome = `${listaNomes[i]}` + " "; 

    elementoListaFilmes.innerHTML += novoElementoListaFilmes;
    elementoListaNomes.innerHTML += listaNome;
  }

} 
function removerFilme() {
  var nomeFilmeFavorito = document.getElementById("nomedofilme").value;
  var filmeFavorito = document.getElementById("filme").value;

  console.log(listaFilmes)
  if (listaNomes.length == 0) {
    alert("Lista vazia!")
  } else {
    listaNome.forEach((nome) => {      
      var posNomeFilme = nome.indexOf(nomeFilmeFavorito)   
      
      listaFilmes.splice(posNomeFilme, 1);
    })
    
    }
    
  }




