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
    
    var listaNome = `${listaNomes[i]}` + " - "; 

    elementoListaFilmes.innerHTML += novoElementoListaFilmes;
    elementoListaNomes.innerHTML += listaNome;
  }

} 
function removerFilme() {
  var nomeFilmeFavorito = document.getElementById("nomedofilme").value;
  var filmeFavorito = document.getElementById("filme").value;

 
  if (listaNomes.length == 0) {
    alert("Lista vazia!")
  } else {
      listaNomes.forEach(() => {      
        var posNomeFilme = listaNomes.indexOf(nomeFilmeFavorito)       
        listaNomes.splice(posNomeFilme, 1);
        listarFilmesNaTela()
        console.log(listaNomes);        
      })
      
      listaCapas.forEach(() => {
        var posFilmesFavoritos = listaCapas.indexOf(filmeFavorito)
        listaCapas.splice(posFilmesFavoritos, 1);
        listarFilmesNaTela()
        console.log(listaCapas)    
      })    
    }
  }




