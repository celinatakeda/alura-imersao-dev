var carta1 = {
    nome: "Bulbasaur",
    atributos: {
        ataque: 7,
        defesa: 8,
        magia: 6
    }        
};


var carta2 = {
    nome: "Darth Vader",
    atributos: {
        ataque: 9,
        defesa: 8,
        magia: 2
    }
      
};

var carta3 = {
    nome: "Shiryu de dragão",
    atributos: {
        ataque: 5,
        defesa: 9,
        magia: 10
    }     
};

var carta4 = {
    nome: "Shiny",
    atributos: {
        ataque: 9,
        defesa: 7,
        magia: 5
    }
};
    

var cartas = [carta1, carta2, carta3, carta4];
var cartaMaquina;
var cartaJogador;

function sortearCarta() {
    var numeroCartaMaquina = parseInt(Math.random() * 4);
    cartaMaquina = cartas[numeroCartaMaquina];
    console.log(cartaMaquina);

    var numeroCartaJogador = parseInt(Math.random() * 4);
    while (numeroCartaMaquina == numeroCartaJogador) {
        numeroCartaJogador = parseInt(Math.random() * 4);
    }
    cartaJogador = cartas[numeroCartaJogador];
    console.log(cartaJogador);

    document.getElementById("btnSortear").disabled = true;
    document.getElementById("btnJogar").disabled = false;

    exibirOpcoes();
}

function exibirOpcoes() {
    var exibirCarta = document.getElementById("cartaJogador");
    var opcoes = document.getElementById("opcoes");    
    var opcoesTexto = "";

    for (var atributo in cartaJogador.atributos) {
        opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo;
        console.log(atributo)
    }
    opcoes.innerHTML = opcoesTexto;
    exibirCarta.innerHTML = "Sua carta: " + cartaJogador.nome + "<br>" + "ataque: " + cartaJogador.atributos.ataque + " " + "defesa: " + cartaJogador.atributos.defesa + " " + "magia: " + cartaJogador.atributos.magia;

}

function obtemAtributoSelecionado() {
    var radioAtributos = document.getElementsByName("atributo");
    
    for (var i = 0; i < radioAtributos.length; i++) {
        if (radioAtributos[i].checked == true) {            
            return radioAtributos[i].value             
        }        
    }   
}

function jogar() {
    var atributoSelecionado = obtemAtributoSelecionado();    
    var elementoResultado = document.getElementById("resultado");
    var valorCartaJogador = cartaJogador.atributos[atributoSelecionado];
    var valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado]; 

    if (atributoSelecionado == undefined) {
        elementoResultado.innerHTML = "Você não selecionou atributo!"
        return
    }

    if (valorCartaJogador > valorCartaMaquina) {
        elementoResultado.innerHTML = "Você venceu!"
    }else if (valorCartaMaquina > valorCartaJogador) {
        elementoResultado.innerHTML = "Você perdeu, a carta da máquina é maior"
    }else {
        elementoResultado.innerHTML = "Empatou!"
    }
    
    
}