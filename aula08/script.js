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
    nome: "Bulbasauro",
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
    nome: "Piplup Tail",
    imagem:
        "https://www.pngfind.com/pngs/m/441-4413614_personagem-pokemon-png-piplup-tail-transparent-png.png",
      //"http://pm1.narvii.com/6399/96fdb9d4fe6a9e72b9bc60ad418e3c43795e53b4_00.jpg",
    atributos: {
      ataque: 5,
      defesa: 6,
      magia: 8
    }
  };

  var cartaMeotwo = {
    nome: "Meotwo",
    imagem:
        "https://i.pinimg.com/originals/17/fa/d8/17fad813cda380f2d310d24b18cbfd34.png",
      //"http://pm1.narvii.com/6399/96fdb9d4fe6a9e72b9bc60ad418e3c43795e53b4_00.jpg",
    atributos: {
      ataque: 8,
      defesa: 7,
      magia: 9
    }
  };
  
  var cartaMaquina = [cartaPaulo, cartaRafa, cartaGui, cartaPiplup, cartaMeotwo];
  var cartaJogador = [cartaPaulo, cartaRafa, cartaGui, cartaPiplup, cartaMeotwo];
  var indiceMaquina = 0;
  var indiceJogador = 0;
  //var cartas = [cartaPaulo, cartaRafa, cartaGui, cartaPiplup, cartaMeotwo];
  // 0          1           2
  //console.log(cartaMaquina.indexOf(cartaPiplup)) 
  console.log(cartaMaquina[indiceMaquina]) 
  
  function sortearCarta() {
    var numeroCartaMaquina = parseInt(Math.random() * 5);
    cartaMaquina = cartaMaquina[numeroCartaMaquina];
    indiceMaquina = numeroCartaMaquina
    
    //console.log(indiceMaquina);
  
    var numeroCartaJogador = parseInt(Math.random() * 5);
    while (numeroCartaJogador == numeroCartaMaquina) {
      numeroCartaJogador = parseInt(Math.random() * 5);
    }
    cartaJogador = cartaJogador[numeroCartaJogador];
    indiceJogador = numeroCartaJogador;
    //console.log(indiceJogador);
  
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
  
    if (cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado])    
     {  
        console.log(indiceMaquina)
        
        console.log(cartaMaquina)
         
         receberCarta();            
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

  function receberCarta() {
      console.log(indiceMaquina)
      console.log(indiceJogador)
      //var indexCartaMaquina = cartaMaquina.indexOf()
      //console.log(indexCartaMaquina)
      console.log(cartaMaquina)
       //cartaMaquina[indiceMaquina]
      console.log(cartaMaquina[indiceMaquina])
      //console.log(cartaJogador[indiceJogador])
       cartaJogador.push(cartaMaquina[indiceMaquina]);
       cartaMaquina.splice(indiceMaquina, 1)
       console.log(cartaMaquina)
       console.log(cartaJogador)

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