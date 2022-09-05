function adicionarFilme() {
    var nomeFilmeFavorito = document.getElementById("nomedofilme").value;    
    var filmeFavorito = document.getElementById("filme").value;

    if (filmeFavorito.endsWith(".jpg")) {  
        
        var listaFilmes = [];
        listaFilmes.push(filmeFavorito);
        listaFilmes.push(nomeFilmeFavorito);             

        listarFilmesNaTela(listaFilmes)
    } else {
        console.error("Endereço de filme inválido");
    }    
    document.getElementById("filme").value = "";
    document.getElementById("nomedofilme").value = "";
}

function listarFilmesNaTela(filmes) {
   
    for(var i = 0; i < filmes.length; i++) { 
                 
        var elementoFilmeFavorito = "<img src=" + filmes[i] + ">";        

        var elementoListaFilmes = document.getElementById("listaFilmes");   
        elementoListaFilmes.innerHTML =  elementoListaFilmes.innerHTML + elementoFilmeFavorito;        

        var elementoListaNome = document.getElementById("nomeFilme");        

        var elementoFraseFilme = document.getElementById("fraseFilme");
        elementoFraseFilme.innerHTML = "Escolha o seu filme e boa diversão!";

        if(filmes[i+1] !== undefined) {
            elementoListaNome.innerHTML = elementoListaNome.innerHTML + " - " + filmes[i+1]; 
            
        }                
    }  
}



