var cartaPaulo = {
    nome: "Shiryu de dragão",
    imagem:
        "https://pm1.narvii.com/6399/964f7fc5d3b518bb492d98563359f6fc1fbecf1b_hq.jpg",
      //"http://pm1.narvii.com/6399/96fdb9d4fe6a9e72b9bc60ad418e3c43795e53b4_00.jpg",
    atributos: {
      ataque: 5,
      defesa: 9,
      magia: 10
    }
  };
  
  var cartaRafa = {
    nome: "Bulbasaur",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
    atributos: {
      ataque: 7,
      defesa: 8,
      magia: 6
    }
  };
  
  var cartaGui = {
    nome: "Darth Vader",
    imagem:
      "https://images-na.ssl-images-amazon.com/images/I/41i-0NH0q9L._SX328_BO1,204,203,200_.jpg",
    atributos: {
      ataque: 9,
      defesa: 8,
      magia: 2
    }
  };

  var cartaPiplup = {
    nome: "Piplup",
    imagem:
        "https://www.pngfind.com/pngs/m/441-4413614_personagem-pokemon-png-piplup-tail-transparent-png.png",
      //"http://pm1.narvii.com/6399/96fdb9d4fe6a9e72b9bc60ad418e3c43795e53b4_00.jpg",
    atributos: {
      ataque: 5,
      defesa: 6,
      magia: 8
    }
  };

  var cartaPachirisu = {
    nome: "Pachirisu",
    imagem:
        "https://i.pinimg.com/originals/17/fa/d8/17fad813cda380f2d310d24b18cbfd34.png",      
    atributos: {
      ataque: 8,
      defesa: 7,
      magia: 9
    }
  };

  var cartaVaporeon = {
    nome: "Eeveelution Vaporeon",
    imagem: 
        "https://1.bp.blogspot.com/-6_1ISesmTB4/V6Co1X0kPfI/AAAAAAAAAYk/xO28MIPcc_A9hy0eCV2PqTciopZqACrOgCLcB/s1600/134Vaporeon_BW_anime.png",
    atributos: {
        ataque: 8,
        defesa: 7,
        magia: 9
     }
    };

    var cartaVupix = {
        nome: "Vupix",
        imagem: "https://vignette.wikia.nocookie.net/pokexpertodex/images/7/7f/Vulpix_usando_lanzallamas.PNG/revision/latest?cb=20121116114851&path-prefix=es",
        atributos: {
            ataque: 8,
            defesa: 7,
            magia: 9
        }
    };

    var cartaGyarados = {
        nome: "Gyarados",
        imagem: "https://th.bing.com/th/id/R.9c798b57e1e597b8de4d3f70f897fdab?rik=w4%2bU45mF3iEmpg&riu=http%3a%2f%2f2.bp.blogspot.com%2f-fSPLtwNKTQw%2fV9hh9xmkQhI%2fAAAAAAAABj4%2faM9pQxrpnnowUnRuMeAB8OrJuE54D6RyACK4B%2fs1600%2fe464eb10-35ab-0134-066a-062f3a35be5f.png&ehk=ck97Ac3rYm3nyZ%2fyvSJjYgEmg4KnXhI03pzQTJtmL3Y%3d&risl=&pid=ImgRaw&r=0",
        atributos: {
            ataque: 8,
            defesa: 7,
            magia: 7
        }
    };

    var cartaSeya = {
        nome: "Seya",
        imagem: "https://i.pinimg.com/originals/16/0c/ff/160cff418f023094911f9dc42d757065.png",
        atributos: {
            ataque: 10,
            defesa: 8,
            magia: 6
        }
    };

  
  var cartaMaquina;
  var cartaJogador;
  var cartas = [cartaPaulo, cartaRafa, cartaGui, cartaPiplup, cartaPachirisu, cartaVaporeon, cartaVupix, cartaGyarados, cartaSeya ];
  // 0          1           2
  
  function sortearCarta() {
    var numeroCartaMaquina = parseInt(Math.random() * 9);
    cartaMaquina = cartas[numeroCartaMaquina];
  
    var numeroCartaJogador = parseInt(Math.random() * 9);
    while (numeroCartaJogador == numeroCartaMaquina) {
      numeroCartaJogador = parseInt(Math.random() * 9);
    }
    cartaJogador = cartas[numeroCartaJogador];
    console.log(cartaJogador);
  
    document.getElementById("btnSortear").disabled = true;
    document.getElementById("btnJogar").disabled = false;
    exibirCartaJogador();
    
    
  }
  
  function obtemAtributoSelecionado() {
    var radioAtributo = document.getElementsByName("atributo");
    for (var i = 0; i < radioAtributo.length; i++) {
      if (radioAtributo[i].checked) {
        return radioAtributo[i].value;
      }
    }
  }
  
  function jogar() {
    //console.log("chamou");
    var atributoSelecionado = obtemAtributoSelecionado();
    var divResultado = document.getElementById("resultado");

    if (atributoSelecionado == undefined) {
        divResultado.innerHTML = "Você não selecionou o atributo!"
        return
    }
  
    if (cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado]
    ) {
      htmlResultado = "<p class='resultado-final'>Venceu!</p>";
    } else if (
      cartaJogador.atributos[atributoSelecionado] <
      cartaMaquina.atributos[atributoSelecionado]
    ) {
      htmlResultado = "<p class='resultado-final'>Perdeu!</p>";
    } else {
      htmlResultado = "<p class='resultado-final'>Empatou!</p>";
    }
    divResultado.innerHTML = htmlResultado;
  
    document.getElementById("btnJogar").disabled = true;
    exibirCartaMaquina();
  }
  
  function exibirCartaJogador() {
    var divCartaJogador = document.getElementById("carta-jogador");
    divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`;
    // divCartaJogador.style.backgroundImage = "url(" + cartaJogador.imagem + ")"
    var moldura =
      '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
    var tagHTML = "<div id='opcoes' class='carta-status'>";
  
    var opcoesTexto = "";
    for (var atributo in cartaJogador.atributos) {
      opcoesTexto +=
        "<input type='radio' name='atributo' value='" +
        atributo +
        "'>" +
        atributo +
        " " +
        cartaJogador.atributos[atributo] +
        "<br>";
    }
    var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`;
  
    divCartaJogador.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
  }
  
  function exibirCartaMaquina() {
    var divCartaMaquina = document.getElementById("carta-maquina");
    divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`;
    // divCartaJogador.style.backgroundImage = "url(" + cartaJogador.imagem + ")"
    var moldura =
      '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
    var tagHTML = "<div id='opcoes' class='carta-status'>";
  
    var opcoesTexto = "";
    for (var atributo in cartaMaquina.atributos) {
      opcoesTexto +=
        "<p type='text' name='atributo' value='" +
        atributo +
        "'>" +
        atributo +
        " " +
        cartaMaquina.atributos[atributo] +
        "</p>";
    }
    var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`;
  
    divCartaMaquina.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
  }