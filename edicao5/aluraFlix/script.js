var listaNomes = [];
var listaCapas = [];

function adicionarFilme() {
  var filmeFavorito = document.getElementById("filme").value;
  var nomeFavorito = document.getElementById("nomedofilme").value;

  if (filmeFavorito.endsWith(".jpg")) {
    listaNomes.push(nomeFavorito);    
    listaCapas.push(filmeFavorito);    
    listarFilmesNaTela();    
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

  var posNomeFilme = 0;
  var posFilmesFavoritos = 0
 
  if (listaNomes.length == 0) {
    alert("Lista vazia!")
  } else {
      listaNomes.forEach(() => {      
        posNomeFilme = listaNomes.indexOf(nomeFilmeFavorito)       
      })
      listaNomes.splice(posNomeFilme, 1);
      console.log(listaNomes);        
      
      listaCapas.forEach(() => {
        posFilmesFavoritos = listaCapas.indexOf(filmeFavorito)          
      })
      listaCapas.splice(posFilmesFavoritos, 1);        
      console.log(listaCapas)
          
      listarFilmesNaTela();        
    }
  }




