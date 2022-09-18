var carta1 = {
  imagem: "https://pbs.twimg.com/media/D8zm-j2W4AAax84.jpg",
  nome: "Caitlyn",
  atributos: {
    ataque: 7,
    defesa: 9,
    magia: 6,
  }
}

var carta2 = {
  imagem: "https://noticias.maisesports.com.br/wp-content/uploads/2022/03/LoL-Miss-Fortune-Coelha-de-Batalha.jpg",
  nome: "Miss Fortune",
  atributos: {
    ataque: 9,
    defesa: 8,
    magia: 2,
  }
}

var carta3 = {
  imagem: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Lux_8.jpg",
  nome: "Lux",
  atributos: {
    ataque: 7,
    defesa: 8,
    magia: 9,
  }
}

var carta4 = {
  imagem: "https://img.redbull.com/images/c_crop,w_1214,h_608,x_0,y_0,f_auto,q_auto/c_scale,w_1200/redbullcom/2017/08/03/1331862149625_2/league-of-legends-teemo.jpg.jpg",
  nome: "Teemo",
  atributos: {
    ataque: 5,
    defesa: 4,
    magia: 8,
  }
}

var carta5 = {
  imagem: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aphelios_0.jpg",
  nome: "Aphelios",
  atributos: {
    ataque: 9,
    defesa: 5,
    magia: 6,
  }
}

var carta6 = {
  imagem: "https://cdn1.dotesports.com/wp-content/uploads/2022/06/22092614/Nilah_Base_Final-1.jpg",
  nome: "Nilah",
  atributos: {
    ataque: 8,
    defesa: 7,
    magia: 4,
  }
}

var carta7 = {
  imagem: "https://cdn.oneesports.gg/cdn-data/wp-content/uploads/2020/07/LoL_SpiritBlossomThresh.jpg",
  nome: "Thresh",
  atributos: {
    ataque: 4,
    defesa: 9,
    magia: 6,
  }
}

var carta8 = {
  imagem: "https://cdn1.dotesports.com/wp-content/uploads/2022/02/01061500/Zeri_0.jpg",
  nome: "Zeri",
  atributos: {
    ataque: 10,
    defesa: 5,
    magia: 5,
  }
}

var carta9 = {
  imagem: "https://cdn.mobachampion.com/imgs/blog/get-free-champions-in-lol/How%20to%20Get%20Free%20Champions%20in%20League%20of%20Legends%20Like%20Yasuo.jpg?resize=960%2C600&strip=all&lossy=1",
  nome: "Yasuo",
  atributos: {
    ataque: 8,
    defesa: 4,
    magia: 5,
  }
}

var carta10 = {
  imagem: "https://www.pcgamesn.com/wp-content/uploads/2022/06/lol-gamepass-valorant.jpg",
  nome: "Ezreal",
  atributos: {
    ataque: 7,
    defesa: 5,
    magia: 6,
  }
}

var cartas = [carta1, carta2, carta3, carta4, carta5, carta6, carta7, carta8, carta9, carta10]

var cartaMaquina;
var cartaJogador;

var cartasDoJogador = [];
var cartasDaMaquina = [];

function sortearCarta() {
  var botaoSortear = document.getElementById("btnSortear");
  var botaoJogar = document.getElementById("btnJogar");
  
  var numeroCartaMaquina = parseInt(Math.random() * 10);
  cartaMaquina = cartas[numeroCartaMaquina];
  
  var numeroCartaJogador = parseInt(Math.random() * 10);
  
  while (numeroCartaMaquina === numeroCartaJogador) {
    numeroCartaJogador = parseInt(Math.random() * 10);
  }
  
  cartaJogador = cartas[numeroCartaJogador];
  
  botaoSortear.disabled = true
  botaoJogar.disabled = false
  
  exibeCardJogador();
}


function exibeCardJogador() {
  var card = document.getElementById("opcoes");
  var cardTexto = ""
  
  cardTexto += `
    <div class="cartao">
      <img class="cartao__imagem" src="${cartaJogador.imagem}" alt="">
      <div class="cartao__info" id="cartao-info">
        <p>${cartaJogador.nome}</p>

      </div>
    </div>
  `
  
  card.innerHTML = cardTexto;
  
  exibeOpcoes()
}

function exibeOpcoes() {
  var opcoes = document.getElementById("cartao-info");
  var opcoesTexto = `<p class="info__titulo">${cartaJogador.nome}</p>`;
  
  for (var atributo in cartaJogador.atributos) {
    opcoesTexto += `
      <div class="info__atributos">
        <label class="atributo">
          <input type="radio" name="atributo" value="${atributo}" checked> 
          ${atributo}
        </label>
        <p class="atributo__valor">${cartaJogador.atributos[atributo]}</p>
      </div>
    `
  }
  
  opcoes.innerHTML = opcoesTexto;
}

function obtemAtributoSelecionado() {
  var radioAtributos = document.getElementsByName("atributo");
  
  for (var i = 0; i < radioAtributos.length; i++) {
    if (radioAtributos[i].checked === true) {
      return radioAtributos[i].value;
    }
  }
}

function jogar() {
  var atributoSelecionado = obtemAtributoSelecionado();
  var elementoResultado = document.getElementById("resultado");
  var valorCartaJogador = cartaJogador.atributos[atributoSelecionado];
  var valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado];
  var botaoJogarNovamente = document.getElementById("btnJogarNovamente");
  var botaoJogar = document.getElementById("btnJogar");
  
  if (valorCartaJogador > valorCartaMaquina) {
    elementoResultado.innerHTML = `<p>O atributo selecionado foi ${atributoSelecionado}. Você venceu. Parabéns! Vamos para a próxima rodada.`
    cartasDoJogador.push(cartaMaquina)
  } else if (valorCartaJogador === valorCartaMaquina) {
    elementoResultado.innerHTML = `<p>O atributo selecionado foi ${atributoSelecionado}. Você empatou. Vamos para a próxima rodada.`
  } else {
    elementoResultado.innerHTML = `<p>O atributo selecionado foi ${atributoSelecionado}. Você perdeu. Que pena! Vamos para a próxima rodada.`
    cartasDaMaquina.push(cartaJogador);
  }
  
  if (cartasDaMaquina.length == 5 || cartasDoJogador.length == 5) {
    document.getElementById("btnJogar").disabled = true;
    document.getElementById("btnJogarNovamente").disabled = true;
    document.getElementById("btnSortear").disabled = true;
    
    if (cartasDaMaquina.length == 5) {
      elementoResultado.innerHTML = `<p>Fim do jogo. O vencedor foi a máquina por ${cartasDaMaquina.length} a ${cartasDoJogador.length} pontos.`;
      document.getElementById("divBotaoReiniciar").innerHTML = `
      <button type="button" onclick=reiniciar()>Reiniciar</button>
    `;
    } else {
      elementoResultado.innerHTML = `<p>Fim do jogo. O vencedor foi você por ${cartasDoJogador.length} a ${cartasDaMaquina.length}.`;
      document.getElementById("divBotaoReiniciar").innerHTML = `
      <button type="button" onclick=reiniciar()>Reiniciar</button>
    `;
    }    
  } else {
    document.getElementById("btnJogarNovamente").disabled = false;
  }
  
  botaoJogar.disabled = true;
  
  exibeCards()
  exibePontuacao()
}

function exibeCards() {
  var card = document.getElementById("opcoes");
  var cardTexto = ""
  cardTexto += `<div class="cartao">
      <img class="cartao__imagem" src="${cartaJogador.imagem}" alt="">
      <div class="cartao__info cartao__info--novo" id="cartao-info">
        <p class="info__titulo">${cartaJogador.nome}</p>
        <div>
          <p>ATAQUE</p>
          <p>${cartaJogador.atributos["ataque"]}</p>
        </div>
        <div>
          <p>DEFESA</p>
          ${cartaJogador.atributos["defesa"]}
        </div>
        <div>
          <p>MAGIA</p>
          ${cartaJogador.atributos["magia"]}
        </div>
      </div>
    </div>
  `
  
  cardTexto += `
    <div class="cartao">
      <img class="cartao__imagem" src="${cartaMaquina.imagem}" alt="">
      <div class="cartao__info cartao__info--novo" id="cartao-info">
        <p class="info__titulo">${cartaMaquina.nome}</p>
        <div>
          <p>ATAQUE</p>
          <p>${cartaMaquina.atributos["ataque"]}</p>
        </div>
        <div>
          <p>DEFESA</p>
          <p>${cartaMaquina.atributos["defesa"]}</p>
        </div>
        <div>
          <p>MAGIA</p>
          <p>${cartaMaquina.atributos["magia"]}</p>
        </div>
      </div>
    </div>
  `
  
  card.innerHTML = cardTexto;
}

function jogarNovamente() {
  var botaoJogar = document.getElementById("btnJogar");
  var botaoSortear = document.getElementById("btnSortear");
  var botaoJogarNovamente = document.getElementById("btnJogarNovamente");
  var elementoResultado = document.getElementById("resultado");
  var card = document.getElementById("opcoes");
  
  cartaJogador = ""
  cartaMaquina = ""
  elementoResultado.innerHTML = ""
  card.innerHTML = ""
  
  botaoJogar.disabled = true;
  botaoSortear.disabled = false;
  botaoJogarNovamente.disabled = true;
  
  sortearCarta();
}

function exibePontuacao() {
  var pontuacao = document.getElementById("pontuacao");
  
  pontuacao.innerHTML = `<span>Jogador: ${cartasDoJogador.length}</span> <span>Máquina: ${cartasDaMaquina.length}</span>`
}

function reiniciar() {
  var botaoJogar = document.getElementById("btnJogar");
  var botaoSortear = document.getElementById("btnSortear");
  var botaoJogarNovamente = document.getElementById("btnJogarNovamente");
  var elementoResultado = document.getElementById("resultado");
  var card = document.getElementById("opcoes");
  var pontuacao = document.getElementById("pontuacao");
  var divBotao = document.getElementById("divBotaoReiniciar");
  
  cartaJogador = ""
  cartaMaquina = ""
  elementoResultado.innerHTML = ""
  card.innerHTML = ""
  pontuacao.innerHTML = ""
  divBotao.innerHTML = ""
  
  
  cartasDaMaquina = [];
  cartasDoJogador = [];
  
  botaoJogar.disabled = true;
  botaoSortear.disabled = false;
  botaoJogarNovamente.disabled = true;
}